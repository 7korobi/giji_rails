POOL = ($scope)->
  message_timer =  60 * 1000
  message_first =  25 * 1000
  ajax_timer = 5 * 60 * 1000

  apply = ->
    $scope.$apply()

  refresh = ->
    $scope.$apply()

    refresh.delay message_timer

  $scope.pool_start = ->
    apply.delay message_first
    refresh.delay message_timer
  $scope.pool_start()

  $scope.top =
    focus: false
    news_size: 0
    id: "IX99999"
    count: ->
      if $scope.event?
        top_idx = $scope.event.messages.findIndex (o)-> $scope.top.id == o.logid
        news_size = $scope.event.messages.length - 1 - top_idx
        $scope.top.focus = 0 < top_idx && 0 < news_size
        $scope.top.news_size = news_size

  pool = ->
    href = location.href
    if $scope.event?.is_news
      $scope.get href, =>
        INIT $scope

        $scope.top.count()
        $scope.face.scan()
        apply.delay message_first

        $scope.$apply()
        pool.delay ajax_timer
  pool.delay ajax_timer

  $scope.pool = ()->
    href = location.href.replace location.hash, ""
    turn = $scope.event.turn
    href = GIJI.change_turn href, turn
    $scope.get href, =>
      is_news = $scope.event.is_news
      INIT $scope
      $scope.event.is_news = is_news
      $scope.boot()
      $scope.$apply()


  adjust = ->
    $(window).scroll()

  $scope.adjust = ->
    adjust.delay    80
    adjust.delay   400
    adjust.delay  2000
    adjust.delay 10000

  $scope.boot = (func)->
    $scope.top.count()
    $scope.face.scan()
    apply.delay message_first

    popover = $('a[title]')
    popover.each (idx, dom)->
      $(dom).attr "data-content", $(dom).attr("title")
      $(dom).attr "title", ''
      $(dom).attr "rel", 'popover'
    $('[rel="popover"]').popover()

    $scope.adjust()
