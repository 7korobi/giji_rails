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

MODULE = ($scope, $filter)->
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

  random = (log)->
    return log unless log
    log.replace /<rand ([^>]+),([^>]+)>/g, (key, val, cmd)->
      """<a class="mark" href_eval="inner(this,'#{cmd}','#{val}')">#{val}</a>"""

  link_regexp = ///
      (\w+)://([^/<>）］】」\s]+)([^<>）］】」\s]*)
  ///
  link_regexp_g = ///
      (\w+)://([^/<>）］】」\s]+)([^<>）］】」\s]*)
  ///g

  id_num = 0
  link = (log)->
    return log unless log
    text = log.replace(/\s|<br>/g, ' ').stripTags()
    uris = text.match link_regexp_g
    if uris
      for uri in uris
        id_num++
        [uri, protocol, host, path] = uri.match link_regexp
        log = log.replace uri, """<span class="badge" href_eval="external('link_#{id_num}','#{uri}','#{protocol}','#{host}','#{path}')">LINK - #{protocol}</span>"""
    return log

  $scope.text_decolate = (log)->
    if log
      background anchor link random log
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


  TOKEN_INPUT  $scope
  HREF_EVAL    $scope
  TIMER   $scope
  AJAX    $scope
  CARD    $scope
  CACHE   $scope
  POTOFS  $scope

  DIARY   $scope
  TITLE   $scope
  GO      $scope

  # INIT FILTER POOL sequence
  POOL    $scope, $filter
