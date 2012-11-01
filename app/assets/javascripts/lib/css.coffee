angular.module("giji.directives").directive "theme", ["$compile", ($compile)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    width = OPTION.css.width
    width.options.current_type = Number
    theme = OPTION.css.themes[attr.theme]

    move = ()->
      value = "#{$scope.theme.value}#{$scope.width.value}"
      date  = new Date
      css = "#{URL.resource}/stylesheets/#{value}.css"
      if css != $("#giji_css").attr 'href'
        $("#giji_css").attr 'href', css

      $scope.h1 =
        type:  OPTION.head_img[value][ (date / 60*60*12).ceil() % 2]
        width: OPTION.css.h1.widths[String($scope.width.value)]
      $scope.h1.path = "#{URL.resource}/images/banner/title#{$scope.h1.width}#{$scope.h1.type}.jpg"
      $scope.boot()

    Navi.push $scope, 'width', width
    Navi.push $scope, 'theme', theme

    $scope.width.watch.push move
    $scope.theme.watch.push move

    elm.css
      "text-align": "right"
      "font-size":  "100%"
    GIJI.template $compile, $scope, elm, "navi/css"
]
