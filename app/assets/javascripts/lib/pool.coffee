POOL = ($scope, $filter)->
  message_timer =  60 * 1000
  message_first =  25 * 1000
  ajax_timer = 5 * 60 * 1000

  apply = ->
    $scope.$apply()

  $scope.init = ->
    INIT $scope, $filter
    if $scope.event?
      $scope.do_sort_potofs()
      $scope.set_turn($scope.event.turn)

    _.delay apply, message_first

  refresh = ->
    apply()
    _.delay refresh, message_timer

  pool_start = ->
    _.delay apply, message_first
    _.delay refresh, message_timer

  do_pool_ajax = ->
    if $scope.event?.is_news
      $scope.get_news $scope.event, =>
        $scope.init()
        $scope.$apply()
  pool_ajax = _.throttle do_pool_ajax, ajax_timer

  pool_button = ()->
    $scope.get_news $scope.event, =>
      $scope.init()
      $scope.boot()
  $scope.pool_nolimit = pool_button
  $scope.pool = _.throttle pool_button, message_first

  $scope.top =
    focus: false
    news_size: 0
    id: "IX99999"
    count: ->
      if $scope.event?
        top_idx = -1
        for o, top_idx in $scope.event.messages
          break if $scope.top.id == o.logid
        
        news_size = $scope.event.messages.length - 1 - top_idx
        $scope.top.focus = 0 < top_idx && 0 < news_size
        $scope.top.news_size = news_size

  adjust = ->
    $(window).resize()

  $scope.adjust = ->
    adjust()
    _.delay adjust,  160
    _.delay adjust,  800
    _.delay adjust, 4000

  $scope.boot = ->
    _.delay apply, 2000
    $scope.adjust()

  # onload event
  $scope.init()
  pool_start()
