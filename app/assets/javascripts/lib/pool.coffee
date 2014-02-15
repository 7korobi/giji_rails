POOL = ($scope, $filter, $timeout)->
  message_timer =  60 * 1000
  message_first =  25 * 1000
  ajax_timer = 5 * 60 * 1000

  apply = ->
#    $scope.$apply()

  $scope.init = ->
    INIT $scope, $filter, $timeout
    if $scope.event?
      $scope.do_sort_potofs()
      $scope.set_turn($scope.event.turn)

    $timeout apply, message_first

  refresh = ->
    $timeout refresh, message_timer

  pool_start = ->
    $timeout apply,   message_first
    $timeout refresh, message_timer

  pool_button = ()->
    $scope.get_news $scope.event, =>
      $scope.init()
  $scope.pool_nolimit = pool_button
  $scope.pool = _.debounce pool_button, message_first, 
    leading: true
    trailing: false

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
    $(window).scroll()

  $scope.adjust = ->
    adjust()
    _.delay adjust,   80
    _.delay adjust,  400
    _.delay adjust, 2000

  # onload event
  $scope.init()
  pool_start()
