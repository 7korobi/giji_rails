angular.module("giji.directives").directive "theme", ["$compile", ($compile)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    font  = OPTION.css.font
    width = OPTION.css.width
    width.options.current_type = Number
    theme = OPTION.css.themes[attr.theme]

    move = ()->
      value = "#{$scope.theme.value}#{$scope.width.value}"
      date  = new Date

      css = "#{URL.resource}/stylesheets/#{value}.css"
      if css != $("#giji_css").attr 'href'
        $("#giji_css").attr 'href', css

      css_font = "#{URL.resource}/stylesheets/font/#{$scope.font.value}.css"
      if css_font != $("#giji_css_font").attr 'href'
        $("#giji_css_font").attr 'href', css_font

      $scope.h1 =
        type:  OPTION.head_img[value][ (date / 60*60*12).ceil() % 2]
        width: OPTION.css.h1.widths[String($scope.width.value)]
      $scope.h1.path = "#{URL.resource}/images/banner/title#{$scope.h1.width}#{$scope.h1.type}.jpg"
      $scope.boot()

    Navi.push $scope, 'width', width
    Navi.push $scope, 'theme', theme
    Navi.push $scope, 'font',  font

    $scope.width.watch.push move
    $scope.theme.watch.push move
    $scope.font .watch.push move

    GIJI.template $compile, $scope, elm, "navi/css"
]
