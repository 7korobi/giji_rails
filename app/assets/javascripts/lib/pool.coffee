POOL = ($scope)->
  message_timer =  60 * 1000
  message_first =  25 * 1000
  ajax_timer = 5 * 60 * 1000

  apply = ->
    $scope.$apply()
  apply.delay message_first

  refresh = ->
    $scope.$apply()

    refresh.delay message_timer
  refresh.delay message_timer


  $scope.top =
    id: null
    gap: null
    set: ->
      $scope.top.id or= $scope.event.messages[0].logid
      $scope.top.gap or= $scope.event.messages.length
    count: ->
      top_idx = $scope.event.messages.findIndex (o)-> $scope.top.id == o.logid
      news_size = $scope.event.messages.length - top_idx - $scope.top.gap
      if $scope.story? && 0 < news_size
        $("title").text "(#{news_size}) #{$scope.story.name}"
  pool = ->
    href = location.href
    if $scope.event?.is_news
      $scope.get href, =>
        $scope.top.set()
        INIT $scope
        $scope.top.count()
        $scope.$apply()

        pool.delay ajax_timer
  pool.delay ajax_timer

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

