POOL = ($scope, $filter)->
  message_timer =  60 * 1000
  message_first =  25 * 1000
  ajax_timer = 5 * 60 * 1000

  apply = ->
    popover = $('a[title]')
    popover.each (idx, dom)->
      $(dom).attr "data-content", $(dom).attr("title")
      $(dom).attr "title", ''
      $(dom).attr "rel", 'popover'
    $('[rel="popover"]').popover()

    $scope.$apply()

  $scope.init = ->
    INIT $scope, $filter
    if $scope.event?
      $scope.do_sort_potofs()
      $scope.set_turn($scope.event.turn)

    apply.delay message_first

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

  pool_button = ()->
    $scope.get_news $scope.event, =>
      $scope.init()
      $scope.boot()
  $scope.pool = pool_button.throttle message_first

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
    $(window).resize()

  $scope.adjust = ->
    adjust()
    adjust.delay   160
    adjust.delay   800
    adjust.delay  4000

  $scope.boot = ->
    apply.delay 2000
    $scope.adjust()

  # onload event
  $scope.init()
  pool_start()
