angular.module("giji", ['ngTouch','ngCookies','ngAnimate'])
.config ($locationProvider, $sceProvider)->
  $locationProvider.html5Mode false
  $sceProvider.enabled false

.run ($templateCache, $compile, $interpolate, $cookies)->
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

