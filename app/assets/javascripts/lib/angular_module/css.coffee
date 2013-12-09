angular.module("giji").directive "theme", ($compile)->
  restrict: "A"
  templateUrl: "navi/css"
  link: ($scope, elm, attr, ctrl)->
    font  = OPTION.css.font
    width = OPTION.css.width
    width.options.current_type = Number
    theme = OPTION.css.themes[attr.theme]

    move = ()->
      value = "#{$scope.css.theme.value}#{$scope.css.width.value}"
      date = new Date
      css = "#{URL.file}/stylesheets/#{value}.css"

      if css != $("#giji_css").attr 'href'
        $("#giji_css").attr 'href', css

      css_font = "#{URL.file}/stylesheets/font/#{$scope.css.font.value}.css"
      if css_font != $("#giji_css_font").attr 'href'
        $("#giji_css_font").attr 'href', css_font

      $scope.h1 =
        type:  OPTION.head_img[value][ (date / 60*60*12).ceil() % 2]
        width: OPTION.css.h1.widths[String($scope.css.width.value)]
      $scope.h1.path = "#{URL.file}/images/banner/title#{$scope.h1.width}#{$scope.h1.type}.jpg"
      $scope.adjust()

    $scope.css = {}
    Navi.push $scope, 'css.width', width
    Navi.push $scope, 'css.theme', theme
    Navi.push $scope, 'css.font',  font

    $scope.css.width.watch.push move
    $scope.css.theme.watch.push move
    $scope.css.font .watch.push move
