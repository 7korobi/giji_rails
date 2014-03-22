angular.module("giji").directive "logs", ($parse, $compile)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    $scope.$watchCollection attr.logs, (oldVal, logs)->
      elm.html("")
      return unless logs

      now = new Date
      data =
        story: $scope.story
        event: $scope.event
      for log in logs
        log.init_view($scope, now)

        data.message = log
        elm.append HOGAN["hogan/" + log.template].render data
      for angular_elm in elm.find("[template]")
        $compile(angular_elm)($scope)

angular.module("giji").directive "log", ($parse, $compile, $sce)->
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


