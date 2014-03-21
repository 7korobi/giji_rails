angular.module("giji").directive "log", ($compile, $sce)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    log = $scope.$eval attr.log
    log.__proto__ = Message.prototype
    log.init_view($scope)

    GIJI.template $scope, elm, log.template

angular.module("giji").directive "drag", ->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    $scope.$watch attr.drag, (log) ->
      elm.css
        "z-index": log.z
        "top":     log.top


