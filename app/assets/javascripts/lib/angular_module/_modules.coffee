angular.module("giji", ['ngTouch','ngCookies'])
.config ($locationProvider, $sceProvider)->
  $locationProvider.html5Mode false
  $sceProvider.enabled false

.run ($templateCache, $compile, $interpolate, $cookies)->
  Browser.real = new Browser(document.location, $cookies)
  Event.__proto__.browser = Browser.real

  GIJI.compile = (name)->
    template = JST[name]
    $compile(template)

  GIJI.interpolate = (name)->
    template = JST[name]
    $interpolate(template)

  GIJI.template = ($scope, elm, name)->
    compiled = GIJI.compile(name)($scope)
    elm.append compiled

  for templateUrl, text of JST
    $templateCache.put templateUrl, text
  return

