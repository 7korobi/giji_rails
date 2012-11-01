
GIJI.change_turn = (href, turn)->
  href.replace(///
    /\d+/messages
  ///,"/#{turn}/messages")

RAILS = ($scope, $filter, $compile)->
  LIB      $scope

  MODULE   $scope
  INIT     $scope

  EFFECT   $scope
  FILTER   $scope, $filter

  navi =
    options:
      current: 'link'
      location: 'hash'
      is_cookie: false
    button: GIJI.navis

  $scope.location = window.location
  if window.onhashchange?
    window.onhashchange = =>
      $scope.$digest()

  $scope.$watch 'location.hash', (oldVal, newVal)->

  $scope.$watch 'title', (oldVal, newVal)->
    $('title').text(newVal);

  $scope.link = GIJI.link

  href_eval = (e)->
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

    popup_apply = (e, item, turn)->
      idx = $scope.anchors.indexOf item
      if idx < 0
        item.z = Date.now()
        item.top = e.pageY + 24
        $scope.anchors.push item
        $scope.$apply()
        drag = $(".drag [name=#{item.logid}]").parents(".drag")
        drag.prepend("""<div class="drag_head"><span class="badge" href_eval="popup(#{turn},'#{item.logid}')">―</span></div>""")
        drag.hide().fadeIn 'fast'
        $scope.boot.delay 20

      else
        $(".drag [name=#{item.logid}]").parents(".drag").fadeOut 'fast', ->
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
          popup_apply e, item, turn
        item

      popup_ajax = (turn)->
        return null if turn < 0
        has_messages = 0 < $scope.events[turn]?.messages?.length
        return null if has_messages

        href = GIJI.change_turn href, turn
        $scope.get href, =>
          $scope.event_cache gon.event  if  turn == gon.event.turn
          return  if  popup_find()
        href

      return  if  popup_ajax turn
      return  if  popup_find()
      return  if  popup_ajax turn - 1

    eval $(e.target).attr('href_eval')

  foreground = (e)->
    logid = $(e.target).find("[name]").attr('name')
    item  = $scope.anchors.find (o)-> logid = o.logid
    item.z = Date.now()
    $scope.$apply()

  # use in interpolate
  $('#messages').on  'click', '.drag',      foreground
  $('#messages').on  'click', '[href_eval]', href_eval
  $('#sayfilter').on 'click', '[href_eval]', href_eval

  Navi.push $scope, 'navi',  navi
  $scope.navi.watch.push ->
    $scope.boot.delay 20
