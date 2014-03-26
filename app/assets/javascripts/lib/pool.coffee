POOL = ($scope, $filter, $timeout)->
  apply = ->
#    $scope.$apply()

  $scope.init = ->
    INIT $scope, $filter, $timeout
    if $scope.event?
      $scope.do_sort_potofs()
      $scope.set_turn($scope.event.turn)

    $timeout apply, DELAY.msg_delete

  refresh = ->
    $timeout refresh, DELAY.msg_minute

  pool_start = ->
    $timeout apply,   DELAY.msg_delete
    $timeout refresh, DELAY.msg_minute

  pool_button = ()->
    $scope.event.get_news $scope.event, =>
      $scope.init()
  $scope.pool_nolimit = pool_button
  $scope.pool_hand = _.debounce pool_button, DELAY.msg_delete,
    leading: true
    trailing: false

  adjust = ->
    $(window).resize()
    $(window).scroll()

  $scope.adjust = ->
    adjust()
    _.delay adjust, DELAY.presto
    _.delay adjust, DELAY.andante

  # onload event
  $scope.init()
  pool_start()
