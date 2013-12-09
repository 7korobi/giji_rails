angular.module("giji", [])
.config ($locationProvider, $sceProvider)->
  $locationProvider.html5Mode true
  $sceProvider.enabled false

.run ($templateCache, $compile)->
  for templateUrl, text of JST
    $templateCache.put templateUrl, text
  return