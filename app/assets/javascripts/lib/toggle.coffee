TOGGLE = ($scope)->
  # stories support
  $scope.stories_toggle = ->
    $scope.stories_is_small = ! $scope.stories_is_small
    $scope.adjust()
