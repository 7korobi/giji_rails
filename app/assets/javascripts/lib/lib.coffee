LIB = ($scope)->
  CSS      $scope
  POOL     $scope

  $scope.boot = (func)->
    $(window).resize()
    $scope.adjust()

  $scope.boot.delay   80
  $scope.boot.delay  400
  $scope.boot.delay 2000

