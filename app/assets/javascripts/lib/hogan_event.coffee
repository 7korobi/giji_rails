HOGAN_EVENT = ($scope)->
  hogan_click_event = null

  navi = (link)->
    $scope.navi.move link
    if $scope.potofs?
      $scope.potofs_is_small = false
      $scope.secret_is_open  = true
    $scope.$apply()

  cancel_say = _.memoize (queid)->
    _.debounce ->
      $scope.submit
        cmd:   'cancel'
        queid: queid
        turn: $scope.event.turn
        vid:  $scope.story.vid
    , 25000,
      leading: true
      trailing: false

  inner = (cmd, val)->
    item = $(hogan_click_event.target)
    if 0 > item.html().indexOf cmd
      item.html("#{val} ⇠ #{cmd}")
    else
      item.html("#{val}")

  external = (id, uri, protocol, host, path)->
    item = _.find $scope.anchors, (log)->
      log.logid == id
    idx = $scope.anchors.indexOf item
    if idx < 0
      item =
        template:"message/external"
        mestype: "XSAY"
        turn: -1
        logid: id
        protocol: protocol
        host: host
        path: path
        uri: uri
        top: $scope.pageY + 24
        z: Date.now()
      $scope.anchors.push item
    else
      $scope.anchors.splice idx, 1

  popup_apply = (item, turn)->
    idx = $scope.anchors.indexOf item
    if idx < 0
      $scope.anchors.push item
      item.turn = turn
      item.z = Date.now()
      item.top = $scope.pageY + 24
    else
      $scope.anchors.splice idx, 1
    idx

  popup = (turn, ank)->
    href = location.href.replace location.hash, ""

    popup_find = (turn)->
      if turn < 0
        list = $scope.anchors
      else
        event = $scope.events[turn]
        return null unless event?.messages?
        list = event.messages

      item = _.find list, (log)->
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

  hogan_click = (e)->
    hogan_click_event = e
    $scope.$apply ->
      $scope.pageY = e.pageY
      eval $(e.target).attr('hogan-click')
    $(window).scroll()

  foreground = (e)->
    $scope.$apply ->
      logid = $(e.target).find("[name]").attr('name')
      item  = _.find $scope.anchors, (o)-> logid = o.logid
      item?.z = Date.now()

  # use in interpolate
  $('body').on  'click', '.drag',  foreground
  $('body').on  'click', '[hogan-click]', hogan_click
