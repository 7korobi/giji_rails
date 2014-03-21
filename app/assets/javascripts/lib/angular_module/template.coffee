angular.module("giji").directive "template", ($interpolate, $compile)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    name = attr.template
    GIJI.template $scope, elm, name


angular.module("giji").directive "listup", ($compile)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    elm.addClass('ng-binding').data('$binding', attr.listup);
    $scope.$watch attr.listup, (value)->
      template = ""
      template = "<p>"+value.join("</p><p>")+"</p>" if value?
      compiled = $compile(template)($scope)
      elm.html compiled


angular.module("giji").directive "form", ($compile, $http)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    elm.addClass('ng-binding').data('$binding', attr.form);
    $scope.$watch attr.form, (value)->
      compiled = GIJI.compile("form/#{value}")($scope)
      elm.html  compiled


angular.module("giji").directive "diary", ($compile)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    form_text = $scope.$eval attr.diary
    form_text.ver = new Diary(form_text)
    form_text.ver.versions()
    form_text.ver.commit() if form_text.text
    GIJI.template $scope, elm, "form/version"


