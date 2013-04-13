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
    id: "IX99999"
    count: ->
      if $scope.event?
        top_idx = $scope.event.messages.findIndex (o)-> $scope.top.id == o.logid
        news_size = $scope.event.messages.length - 1 - top_idx
        if $scope.story? && 0 < top_idx && 0 < news_size
          $("title").text "(#{news_size}) #{$scope.title}"

  pool = ->
    href = location.href
    if $scope.event?.is_news
      $scope.get href, =>
        INIT $scope
        $scope.boot()
        $scope.$apply()

        pool.delay ajax_timer
  pool.delay ajax_timer

  $scope.pool_start = ->
    apply.delay message_first
    refresh.delay message_timer

  $scope.adjust = ->
    popover = $('a[title]')
    popover.each (idx, dom)->
      $(dom).attr "data-content", $(dom).attr("title")
      $(dom).attr "title", ''
      $(dom).attr "rel", 'popover'
    $('[rel="popover"]').popover()

    $(window).resize()

  $scope.boot = (func)->
    $scope.top.count()
    $scope.face.scan()
    if $scope.story?
      $scope.title = "#{$scope.subtitle} #{$scope.story.name}"
    else
      $scope.title = "人狼議事"

    $scope.adjust.delay    80
    $scope.adjust.delay   400
    $scope.adjust.delay  2000
    $scope.adjust.delay 10000
