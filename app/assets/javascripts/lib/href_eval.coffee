HREF_EVAL = ($scope)->
  navi = (link)->
    $scope.navi.move link
    if $scope.potofs?
      $scope.potofs_is_small = false
      $scope.secret_is_open  = true
    $scope.$apply()

  cancel_say = (queid)->
    $scope.submit
      cmd:   'cancel'
      queid: queid
      turn: $scope.event.turn
      vid:  $scope.story.vid

  inner = (dom, cmd, val)->
    item = $(dom)
    if 0 > item.html().indexOf cmd
      item.html("#{val} ⇠ #{cmd}")
    else
      item.html("#{val}")


  external = (id, uri, protocol, host, path)->
    item = $scope.anchors.find (log)->
      log.logid == id
    idx = $scope.anchors.indexOf item
    if idx < 0
      item = 
        template:"message/external"
        mestype: "XSAY"
        logid: id
        protocol: protocol
        host: host
        path: path
        uri: uri
        top: $scope.pageY + 24
        z: Date.now()
      $scope.anchors.push item
      $scope.$apply()
      drag = $(".drag.#{item.logid}")
      drag.fadeIn 'fast', ->
        drag.find(".badge").attr("href_eval","external('#{id}')")
    else
      drag = $(".drag.#{id}")
      drag.fadeOut 'fast', ->
        $scope.anchors.removeAt(idx)
        $scope.$apply()

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
        drag.find(".drag_head .badge").attr("href_eval","popup(#{item.turn},'#{item.logid}')")
    else
      drag = $(".drag.#{item.logid}")
      drag.fadeOut 'fast', ->
        $scope.anchors.removeAt(idx)
        $scope.$apply()
    idx

  popup = (turn, ank)->
    href = location.href.replace location.hash, ""

    popup_find = (turn)->
      event = $scope.events[turn]
      return null unless event?.messages?

      item = event.messages.find (log)->
        log.logid == ank
      if item
        popup_apply item, turn
      item

    popup_ajax = (turn, seek)->
      event = $scope.events[turn]
      return unless event?

      if event.has_all_messages
        seek()
      else
        $scope.get_all event, ->
          if  turn == gon.event.turn
            is_news = $scope.event.is_news
            $scope.merge $scope, gon, "events"  
            $scope.event.is_news = is_news
          seek()

    if ! popup_find turn
      popup_ajax turn, ->
        if ! popup_find turn
          popup_ajax turn - 1, ->
            popup_find turn - 1

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
