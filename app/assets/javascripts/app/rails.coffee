
GIJI.change_turn = (href, turn)->
  href.replace(///
    /\d+/messages
  ///,"/#{turn}/messages")

RAILS = ($scope, $compile, $interpolate)->
  MODULE   $scope
  TEMPLATE $scope, $compile, $interpolate
  INIT     $scope
  CSS      $scope
  POOL     $scope
  EFFECT   $scope
  FILTER   $scope

  navi =
    options:
      current: 'link'
      is_cookie: false
      on: 'hash'
    button: GIJI.navis

  $scope.location = window.location
  if window.onhashchange?
    window.onhashchange = =>
      $scope.$digest()

  $scope.$watch 'location.hash', (oldVal, newVal)->
  $scope.$watch 'title', (oldVal, newVal)->
    $('title').text(newVal);

  $scope.link = GIJI.link

  click_eval = (e)->
    init_gon = (href)->
      $scope.gon(href)

    sort_potofs = (tgt, zero)->
      reverse = (tgt == @tgt)
      for potof in $scope.potofs
        potof[tgt] or= zero
      $scope.potofs = $scope.potofs.sortBy tgt, reverse
      $scope.$apply()
      @tgt = reverse || tgt

    navi = (link)->
      $scope.navi.move link
      if $scope.potofs?
        $scope.potofs_is_small = false
      $scope.$apply()

    cancel_say = (logid)->
      params = Object.fromQueryString(location.search)
      params.cmd   = 'cancel'
      params.queid = logid
      GIJI.cancel_log = $.param params
      location.search = GIJI.cancel_log

    popup_apply = (e, item)->
      idx = $scope.anchors.indexOf item
      if idx < 0
        item.z = Date.now()
        item.top = e.pageY + 24
        $scope.anchors.push item
        $scope.$apply()
        $(".drag [name=#{item.logid}]").parents(".drag").hide().fadeIn 'fast'
      else
        $(".drag").fadeOut 'fast', ->
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
          popup_apply e, item
        item

      popup_ajax = (turn)->
        return null if turn < 0
        has_messages = 0 < $scope.events[turn]?.messages?.length
        return null if has_messages

        href = GIJI.change_turn href, turn
        $scope.gon href, =>
          $scope.event_cache gon.event  if  turn == gon.event.turn
          return  if  popup_find()
        href

      return  if  popup_ajax turn
      return  if  popup_find()
      return  if  popup_ajax turn - 1

    eval $(e.target).attr('href_eval')

  $('#messages').on  'click', '[href_eval]', click_eval
  $('#sayfilter').on 'click', '[href_eval]', click_eval

  $scope.log_refresh = (log)->
    log.cancel_btn = ->
      if log.logid? && "q" == log.logid[0] && (new Date() - log.date) < 25 * 1000
        """<span class="btn btn-danger" href_eval='cancel_say("#{log.logid}")'><i class="icon-remove"></i></span>"""
      else
        ""
    log.time = -> $scope.lax_time Date.create log.date

  $scope.log = (log)->
    return unless log?

    if ! log.img? && log.face_id? && log.csid?
      log.img  or= $scope.img_cid(log.csid, log.face_id)

    if ! log.anchor? && log.logid?
      [_, mark, num] = log.logid.match(/(\D)\D+(\d+)/)
      if SOW.log.anchor[mark]?
        log.anchor or= "(#{SOW.log.anchor[mark]}#{Number(num)})"
      else
        log.anchor or= " "

    if ! log.template? && log.logid? && log.mestype? && log.subid?
      log.sub1id = log.logid[0]
      log.sub2id = log.logid[1]
      template = null
      for style in GIJI.message.template
        style.keys (target, table)->
          template or= table[log[target]]
      log.template or= "giji/#{template}"

    log.text = $scope.text_decolate log.log
    $scope.log_refresh log

    box = GIJI.interpolates[log.template]
    box(log) if box?

  Navi.push $scope, 'navi',  navi
  $scope.navi.watch.push ->
    $(window).resize()
    $scope.adjust()

  $scope.form =
    csid_cid: null
