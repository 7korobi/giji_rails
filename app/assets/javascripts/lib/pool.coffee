POOL = ($scope)->
  message_timer =  60 * 1000
  message_first =  25 * 1000
  ajax_timer = 5 * 60 * 1000

  apply = ->
    pool_ajax()
    popover = $('a[title]')
    popover.each (idx, dom)->
      $(dom).attr "data-content", $(dom).attr("title")
      $(dom).attr "title", ''
      $(dom).attr "rel", 'popover'
    $('[rel="popover"]').popover()

    $scope.$apply()

  refresh = ->
    apply()
    refresh.delay message_timer

  pool_start = ->
    apply.delay message_first
    refresh.delay message_timer

  do_pool_ajax = ->
    if $scope.event?.is_news
      $scope.get_news $scope.event, =>
        $scope.init()
        $scope.$apply()
  pool_ajax = do_pool_ajax.throttle ajax_timer

  $scope.pool = ()->
    $scope.get_news $scope.event, =>
      $scope.init()
      $scope.boot()

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

  adjust = ->
    $(window).scroll()

  $scope.adjust = ->
    adjust()
    adjust.delay   160
    adjust.delay   800
    adjust.delay  4000

  $scope.boot = ->
    $scope.top.count()
    $scope.face.scan()
    apply.delay message_first

    $scope.adjust()

  $scope.init = ->
    if $scope.event?
      INIT $scope
      $scope.do_sort_potofs()
    else
      INIT $scope
    $scope.face.scan()
    $scope.top.count()

    apply.delay message_first

  # onload event
  pool_start()
