set_key = (obj)->
  return unless obj?
  for k,v of obj
    v.key = k

set_key SOW.roles
set_key SOW.gifts
set_key SOW.events

if SOW.maskstates?
  SOW.maskstate_order = _.sortBy _.keys(SOW.maskstates), (o)-> -o

if SOW_RECORD.CABALA.events?
  for k,v of SOW.events
    v.id  = SOW_RECORD.CABALA.events.indexOf k
    v.key = k

MODULE = ($scope, $filter, $sce, $http, $timeout)->
  $scope.head = head;
  $scope.win  = win;
  $scope.link = GIJI.link

  background = (log)->
    return log unless log
    if $scope.modes?.player
      log.replace ///
        (/\*)(.*?)(\*/|$)
      ///g,'<em>$1$2$3</em>'
    else
      log.replace ///
        (/\*)(.*?)(\*/|$)
      ///g,'<span>$1 B.G $3</span>'

  anchor = (log)->
    return log unless log
    log.replace /<mw (\w+),(\d+),([^>]+)>/g, (key, a, turn, id)->
      """<a href_eval="popup(#{turn},'#{a}')" class="mark">&gt;&gt;#{id}</a>"""

  anchor_preview = (log)->
    log

  random = (log)->
    return log unless log
    log.replace /<rand ([^>]+),([^>]+)>/g, (key, val, cmd)->
      """<a class="mark" href_eval="inner('#{cmd}','#{val}')">#{val}</a>"""

  random_preview = (log)->
    log.replace /\[\[([^>]+)\]\]/g, (key, val)->
      """<a class="mark" href_eval="inner('#{val}','？')">#{val}</a>"""

  link_regexp = ///
      (\w+)://([^/<>）］】」\s]+)([^<>）］】」\s]*)
  ///
  link_regexp_g = ///
      (\w+)://([^/<>）］】」\s]+)([^<>）］】」\s]*)
  ///g

  id_num = 0
  uri_to_link = _.memoize (uri)->
    id_num++
    [uri, protocol, host, path] = uri.match link_regexp
    """<span class="badge" href_eval="external('link_#{id_num}','#{uri}','#{protocol}','#{host}','#{path}')">LINK - #{protocol}</span>"""

  link = (log)->
    return log unless log
    text = log.replace(/\s|<br>/g, ' ').stripTags()
    uris = text.match link_regexp_g
    if uris
      for uri in uris
        log = log.replace uri, uri_to_link uri
    return log

  space = (log)->
    return log unless log
    log.replace /(^|\n|<br>)(\ *)/gm, (full, s1, s2, offset)->
      s1 ||= ""
      nbsps = s2.replace /\ /g, '&nbsp;'
      "#{s1}#{nbsps}"

  $scope.preview_decolate = (log)->
    if log
      $sce.trustAsHtml space background anchor_preview link random_preview log
    else
      null

  $scope.text_decolate = (log)->
    if log
      $sce.trustAsHtml space background anchor link random log
    else
      null

  $scope.$watch 'title', (value, oldVal)->
    $('title').text(value);

  # stories support
  $scope.stories_toggle = ->
    $scope.stories_is_small = ! $scope.stories_is_small
    $scope.adjust()

  # face_id support
  $scope.img_csid_cid = (csid_cid)->
    if csid_cid?
      [csid, cid] = csid_cid.split '/'
      $scope.img_cid csid, cid
    else
      $scope.img_cid null, 'undef'

  $scope.img_cid = (csid, face_id)->
    csid = GIJI.csids[csid]
    csid or= GIJI.csids.default
    "#{URL.file}#{csid.path}#{face_id}#{csid.ext}"

  $scope.potof_key = (o)->
    csid   = (o.csid || '*').split('_')[0]
    face_id = o.face_id || '*'
    "#{csid}-#{face_id}"

  $scope.ajax_event = (turn, href, is_news)->    
    if $scope.events?
      event = $scope.event
      change = ->
        $scope.set_turn(turn)
        $scope.event.is_news = 
          if $scope.event.has_all_messages
            false
          else
            is_news
        $scope.page.value = 1
        $scope.mode.value = $scope.mode_cache.talk
        href = $scope.event_url $scope.event
        win.history "#{$scope.event.name}", href, location.hash

      if event.has_all_messages
        change()
      else
        if is_news
          getter = $scope.get_news
        else
          getter = $scope.get_all 
        getter event, =>
          $scope.init()
          change()

    else
      location.href = href + location.hash

  $scope.$watch "event.turn", (turn, oldVal)->
    $scope.ajax_event(turn, null, !! $scope.event.is_news) if turn? && $scope.event?


  TOKEN_INPUT  $scope
  HREF_EVAL    $scope
  TIMER   $scope
  CARD    $scope
  CACHE   $scope
  POTOFS  $scope
  AJAX    $scope, $http

  DIARY   $scope
  TITLE   $scope
  GO      $scope

  # INIT FILTER POOL sequence
  POOL    $scope, $filter, $timeout
