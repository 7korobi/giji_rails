HOGAN_EVENT = ($scope, $filter)->
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
    , DELAY.lento,
      leading: true
      trailing: false

  inner = (cmd, val)->
    item = $(hogan_click_event.target)
    if 0 > item.html().indexOf cmd
      item.html("#{val} ⇠ #{cmd}")
    else
      item.html("#{val}")

  add_diary = (anchor, turn, name)->
    $scope.diary.add.anchor anchor, turn, name

  pool_hand = ->
    $scope.pool_hand()

  close = (event_id)->
    item = _.remove $scope.floats, (event)->
      event.event_id == event_id

  potof = (key)->
    drop = _.remove $scope.floats, (float)->
      float.event_id == key

    float = new EventFloat $scope.pageY
    float.event_id = key
    float.set_url = ->
      $scope.potof_only _.filter $scope.potofs, ((o)-> o.key == key)
      $scope.mode.value = "talk_all_open"
      $scope.page.value = 1
      $scope.floats = []

    order =
      if "desc" == $scope.msg_styles.order
        (o)-> - o.updated_at
      else
        (o)-> + o.updated_at
    is_mob_open = $scope.story?.is_mob_open()

    list = $scope.event.messages
    list = _.filter list, Lib.message_filter is_mob_open, $scope.modes.regexp, $scope.modes.view
    list = _.filter list, (o)-> "#{o.csid}-#{o.face_id}" == key
    list = _.sortBy list, order
    float.messages = list
    $scope.floats.push float

  external = (id, uri, protocol, host, path)->
    drop = _.remove $scope.floats, (float)->
      float.event_id == uri

    float = new EventFloat $scope.pageY
    float.event_id = uri
    float.messages.push
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
    $scope.floats.push float

  attention = (key, turn)->
    [float] = _.remove $scope.floats, (float)->
      float.event_id == "anker"

    float ||= new EventFloat $scope.pageY
    float.event_id = "anker"
    float.set_url = ->
      $scope.hide_potofs.value = []
      $scope.search.value = key
      $scope.mode.value = "talk_all_open"
      $scope.page.value = 1
      $scope.set_turn turn
      $scope.floats = []

    list = $scope.events[turn].messages
    list = $filter('filter')(list, key)

    order =
      if "desc" == $scope.msg_styles.order
        (o)-> - o.updated_at
      else
        (o)-> + o.updated_at
    float.messages = _.union float.messages, list
    float.messages = _.sortBy float.messages, order
    $scope.floats.push float

  popup_apply = (item, turn)->
    [float] = _.remove $scope.floats, (float)->
      float.event_id == "anker"

    float ||= new EventFloat $scope.pageY
    float.event_id = "anker"
    float.set_url = ->
      $scope.hide_potofs.value = []
      $scope.search.value = item.key
      $scope.mode.value = "talk_all_open"
      $scope.page.value = 1
      $scope.set_turn turn
      $scope.floats = []

    order =
      if "desc" == $scope.msg_styles.order
        (o)-> - o.updated_at
      else
        (o)-> + o.updated_at
    float.messages = _.union float.messages, [item]
    float.messages = _.sortBy float.messages, order

    $scope.floats.push float

  popup = (turn, ank)->
    popup_find = (turn)->
      if turn < 0
        list = []
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

      event.search_with_refresh ->
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
  $('#outframe').on  'click', '.drag',  foreground
  $('#outframe').on  'click', '[hogan-click]', hogan_click
