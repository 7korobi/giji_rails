RAILS = ($scope, $filter, $sce, $cookies, $http, $timeout)->
  submit = (param, cb)->
    $scope.post $scope.form.uri, param, ->
      $scope.init()
      cb() if cb
  $scope.submit = _.throttle submit, DELAY.lento


  MODULE   $scope, $filter, $sce, $cookies, $http, $timeout
