MODULE = ($scope, $filter)->
  $scope.head = head;
  $scope.win  = win;
  $scope.link = GIJI.link

  background = (log)->
    if $scope.modes?.player
      log.replace ///
        (/\*)(.*?)(\*/|$)
      ///g,'<em>$1$2$3</em>'
    else
      ret = log.replace ///
        (/\*)(.*?)(\*/|$)
      ///g,'<span>$1 B.G $3</span>'
      # ret = ""  if  "" == ret.removeTags('span').trim()
      ret

  anchor = (log)->
    log.replace /<mw (\w+),(\d+),([^>]+)>/g, (key, a, turn, id)->
      """ <a href_eval="popup(#{turn},'#{a}')" class="mark">&gt;&gt;#{id}</a> """

  random = (log)->
    log.replace /<rand ([^>]+),([^>]+)>/g, (key, val, cmd)->
      """ <a rel="popover" data-content="#{cmd}" class="mark">#{val}</a> """

  link_regexp = ///
      (\w+)://([^/]+)([^<>）］】」\s]+)
  ///
  link_regexp_g = link_regexp.setFlags('g')

  link = (log)->
    return log unless log
    text = log.removeTags('a')
    uris = text.match link_regexp_g
    if uris
      for uri in uris
        [uri, protocol, host, path] = uri.match link_regexp
        data = """
          #{protocol}://#{host} <br>
          #{path}
        """
        log = log.replace uri, """ <span class="badge"><a href="#{uri}" target="_blank">LINK</a> - <a rel=popover data-content="#{data}">#{protocol}</a></span> """
    return log


  $scope.text_decolate = (log)->
    if log
      background anchor link random log
    else
      null

  $scope.lax_date = (date)->
    date.format(Date.ISO8601_DATE + '({dow}) {tt}{12hr}時' + postfix)

  $scope.lax_time = (date)->
    if date? && date.addMinutes?
      timespan = (new Date() - date)/1000
      limit = 3 * 60 * 60
      if - limit < timespan < limit
        return "1分後"    if -60 < timespan < -25
        return "25秒以内" if -25 < timespan <  25
        return "1分前"    if  25 < timespan <  60
        return date.relative('ja')
      else
        now = date.clone()
        now.addMinutes(15)
        postfix = ["頃","半頃"][(now.getMinutes()/30).floor()]
        return now.format(Date.ISO8601_DATE + '({dow})  {TT}{hh}時' + postfix, 'ja')
    else
      return "....-..-..(？？？) --..時頃"

  $scope.news = ()->
    for o in GIJI.news
      o.is_news = Date.create('3days ago') < Date.create(o.date)
    GIJI.news

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
    csid or= 'portrate'
    "#{URL.resource}/images/#{csid}/#{face_id}.jpg"

  $scope.potof_key = (o)->
    csid   = (o.csid || '*').split('_')[0]
    face_id = o.face_id || '*'
    "#{csid}-#{face_id}"

  # role support
  $scope.rolename = (o)->
    SOW.roles[o]?.name || SOW.gifts[o]?.name || SOW.events[o]?.name || o || ""

  $scope.countup = (list)->
    counts = []
    group = list.groupBy()
    group.keys (key,val)->
      counts.push [val.length, key]

    counts.sortBy ([size, key])->
      size
    .map ([size, key])->
      if 1 < size
        "#{$scope.rolename(key)}x#{size}"
      else
        "#{$scope.rolename(key)}"

  $scope.remove_card = (at, idx)->
    $scope.story.card[at].removeAt idx

  init_gon = (href)->
    $scope.gon(href)

  navi = (link)->
    $scope.navi.move link
    if $scope.potofs?
      $scope.potofs_is_small = false
      $scope.secret_is_open  = true
    $scope.$apply()

  cancel_say = (logid)->
    params = Object.fromQueryString(location.search)
    params.cmd   = 'cancel'
    params.queid = logid
    GIJI.cancel_log = $.param params
    location.search = GIJI.cancel_log

  popup_apply = (item, turn)->
    idx = $scope.anchors.indexOf item
    if idx < 0
      $scope.anchors.push item
      item.turn = turn
      item.z = Date.now()
      item.top = $scope.pageY + 24
      $scope.$apply()

      drag = $(".drag.#{item.logid}")
      drag.fadeIn 'fast', ->
        drag.find(".badge").attr("href_eval","popup(#{item.turn},'#{item.logid}')")
    else
      drag = $(".drag.#{item.logid}")
      drag.fadeOut 'fast', ->
        $scope.anchors.removeAt(idx)
        $scope.$apply()

  popup = (turn, ank)->
    href = location.href.replace location.hash, ""

    popup_find = ()->
      has_messages = 0 < $scope.events[turn]?.messages?.length
      return null unless has_messages

      item = $scope.events[turn].messages.find (log)->
        log.logid == ank
      if item
        popup_apply item, turn
      item

    popup_ajax = (turn)->
      return null if turn < 0
      has_messages = 0 < $scope.events[turn]?.messages?.length
      return null if has_messages

      href = GIJI.change_turn href, turn
      $scope.get href, =>
        $scope.events_join gon.event  if  turn == gon.event.turn
        return  if  popup_find()
      href

    return  if  popup_ajax turn
    return  if  popup_find()
    return  if  popup_ajax turn - 1


  href_eval = (e)->
    $scope.pageY = e.pageY
    eval $(e.target).attr('href_eval')
    $scope.$apply()
    $(window).scroll()

  foreground = (e)->
    logid = $(e.target).find("[name]").attr('name')
    item  = $scope.anchors.find (o)-> logid = o.logid
    item.z = Date.now()
    $scope.$apply()

  # use in interpolate
  $('#messages').on  'click', '.drag',  foreground
  $('#messages').on  'click', '[href_eval]', href_eval
  $('#sayfilter').on 'click', '[href_eval]', href_eval

  TOKEN_INPUT  $scope
  AJAX    $scope
  CACHE   $scope
  POTOFS  $scope

  # INIT FILTER POOL sequence
  INIT    $scope
  FILTER  $scope, $filter
  POOL    $scope
  DIARY   $scope
  TITLE   $scope
  GO      $scope

  $scope.init()
