LIB = ($scope)->
  POOL     $scope

  $scope.adjust = ->
    popover = $('a[title]')
    popover.each (idx, dom)->
      $(dom).attr "data-content", $(dom).attr("title")
      $(dom).attr "title", ''
      $(dom).attr "rel", 'popover'
    $('[rel="popover"]').popover()

    resize = ->
      $(window).resize()
    resize.delay   20
    resize.delay  200
    resize.delay 2000

  $scope.boot = (func)->
    $scope.adjust()

  $scope.boot.delay    80
  $scope.boot.delay   400
  $scope.boot.delay  2000
  $scope.boot.delay 10000

