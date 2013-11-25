angular.module "giji", [], ($locationProvider)->
  $locationProvider.html5Mode true
.config ($sceProvider)->
  $sceProvider.enabled false 
