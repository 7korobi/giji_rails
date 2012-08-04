start = ->
  GIJI.box.window.resize()

bootstrap = ->
  angular.bootstrap "html"

jQuery ->
  GIJI.box =
    contentframe: $('#contentframe')
    sayfilter: $("#sayfilter")
    outframe: $("#outframe")
    window: $(window)

  GIJI.box.window.resize ->
    GIJI.box.window.scroll()

  window.onorientationchange = ->
    GIJI.box.window.resize()

  GIJI.box.window.scroll ->
    GIJI.box.outframe.height GIJI.box.contentframe.height()

  start()

if  "Microsoft Internet Explorer" == navigator.appName
  jQuery ->
    start.delay 2000
    bootstrap.delay 1000
else
  jQuery ->
    start.delay 1000
    bootstrap()

GIJI.turns = []
GIJI.templates = {}

app = angular.module '', []
app.config ($interpolateProvider)->

CGI = ($scope, $interpolate)->
  $scope.location = window.location
  if window.onhashchange?
    window.onhashchange = =>
      $scope.$digest()

  $scope.$watch 'location.hash', (oldVal, newVal)->
    console.log [oldVal, newVal, $scope]

  $scope.link = GIJI.link

  if JST?
    for key,val of JST
      GIJI.templates[key] = $interpolate(val)

  if gon?.messages?
    $scope.messages = gon.messages

  Navi.push $scope, 'width'
    options:
      on: 'hash'
      current: 800
      current_type: Number
      is_cookie: true
    button:
      "480": "480"
      "800": "800"

  Navi.push $scope, 'theme'
    options:
      on: 'hash'
      current: 'wa'
      is_cookie: true
    button:
      cinema: '煉瓦'
      night: '月夜'
      star: '蒼穹'
      wa:  '和の国'

  move = ()->
    value = "#{$scope.theme._value}#{$scope.width._value}"
    date    = new Date
    $scope.css = "#{URL.rails}/stylesheets/#{value}.css"

    $scope.h1 =
      type: OPTION.head_img[value][ (date / 60*60*12).ceil() % 2]
    switch $scope.width._value
      when 480
        $scope.h1.width = 458
      when 800
        $scope.h1.width = 580
    $scope.h1.path = "#{URL.rails}/images/banner/title#{$scope.h1.width}#{$scope.h1.type}.jpg"
    GIJI.box.window.resize()

  $scope.width._watch.push move
  $scope.theme._watch.push move

  GIJI.box.window.resize ->
    width = GIJI.box.window.width()

    switch $scope.width._value
      when 480
        small = 122 + 80 + 20
        if      small < width - 462
          info_width  = width - 462
        else
          info_width  = width
      when 800
        info_right  = (width - 770)/2
        if       200  <  width - 770
          info_width  = info_right + 190
        else
          info_width  = width

    GIJI.box.sayfilter.width info_width
