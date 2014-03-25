angular.module("giji").directive "potofs", ($parse, $compile)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    $scope.$watchCollection attr.potofs, (oldVal, potofs)->
      elm.html("")
      return unless logs
      data =
        story: $scope.story
        event: $scope.event
      for potof in potofs
        data.potof = potof
        elm.append HOGAN["hogan/potof/cell-#{attr.cell}"].render data
      for angular_elm in elm.find("[ng-if]")
        $compile(angular_elm)($scope)
