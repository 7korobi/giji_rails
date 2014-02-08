GIJI.jsts  = {}
GIJI.template = ($compile, $scope, elm, name)->
  template = JST[name]
  compiled = $compile(template)($scope)
  elm.append compiled

angular.module("giji").directive "template", ($interpolate, $compile)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    name = attr.template
    GIJI.template $compile, $scope, elm, name


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
      template = JST["form/#{value}"]
      compiled = $compile(template)($scope)
      elm.html  compiled


angular.module("giji").directive "diary", ($compile)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    form_text = $scope.$eval attr.diary
    form_text.ver = new Diary(form_text)
    form_text.ver.versions()
    GIJI.template $compile, $scope, elm, "form/version"


