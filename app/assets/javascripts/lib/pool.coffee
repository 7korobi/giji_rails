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
  $scope.pool_hand = _.debounce pool_button, message_first,
    leading: true
    trailing: false

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
