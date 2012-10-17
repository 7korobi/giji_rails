
CSS = ($scope)->
  width = OPTION.css.width
  width.options.current_type = Number

  if 'PAN' == gon?.folder
    theme = OPTION.css.themes.pan
  else
    theme = OPTION.css.themes.giji

  move = ()->
    value = "#{$scope.theme.value}#{$scope.width.value}"
    date  = new Date
    $scope.css = "#{URL.resource}/stylesheets/#{value}.css"
    $("#giji_css").attr 'href', $scope.css

    $scope.h1 =
      type:  OPTION.head_img[value][ (date / 60*60*12).ceil() % 2]
      width: OPTION.css.h1.widths[String($scope.width.value)]
    $scope.h1.path = "#{URL.resource}/images/banner/title#{$scope.h1.width}#{$scope.h1.type}.jpg"
    $scope.boot()

  if window.opera
    $scope.width =
      value: 800
    $scope.theme =
      value: 'cinema'
  else
    Navi.push $scope, 'width', width
    Navi.push $scope, 'theme', theme

    $scope.width.watch.push move
    $scope.theme.watch.push move

