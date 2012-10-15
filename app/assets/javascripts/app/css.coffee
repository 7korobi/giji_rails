CSS = ($scope)->
  width =
    options:
      current: 800
      current_type: Number
      is_cookie: true
      on: 'hash'
    button: GIJI.widths

  theme =
    options:
      is_cookie: true
      on: 'hash'
    button: {}

  if 'PAN' == gon?.folder
    theme.options.current = 'sow'
    theme.button = GIJI.themes.pan
  else
    theme.options.current = 'cinema'
    theme.button = GIJI.themes.giji

  move = ()->
    value = "#{$scope.theme.value}#{$scope.width.value}"
    date    = new Date
    $scope.css = "#{URL.resource}/stylesheets/#{value}.css"
    $("#giji_css").attr 'href', $scope.css

    $scope.h1 =
      type: OPTION.head_img[value][ (date / 60*60*12).ceil() % 2]
    switch $scope.width.value
      when 480
        $scope.h1.width = 458
      when 800
        $scope.h1.width = 580
    $scope.h1.path = "#{URL.resource}/images/banner/title#{$scope.h1.width}#{$scope.h1.type}.jpg"
    $scope.adjust()
    $(window).resize()

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

