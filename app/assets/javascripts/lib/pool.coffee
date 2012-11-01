POOL = ($scope)->
  scroll_timer  =        200
  message_timer =  60 * 1000
  message_first =  25 * 1000
  ajax_timer = 5 * 60 * 1000

  scroll = ->
    FixedBox.list.keys (key, box)->
      box.scroll()

    scroll.delay scroll_timer
  scroll.delay scroll_timer

  apply = ->
    $scope.$apply()
  apply.delay message_first

  refresh = ->
    $scope.$apply()

    refresh.delay message_timer
  refresh.delay message_timer

  if $scope.event?.is_news
    last_id = $scope.event.messages.last().logid

    pool = ->
      href = location.href
      $scope.get href, =>
        INIT $scope
        last_idx  = $scope.event.messages.findIndex (o)-> last_id == o.logid
        news_size = $scope.event.messages.length - last_idx
        if $scope.story? && 0 < news_size
          $scope.title = "(#{news_size}) #{$scope.story.name}"
        $scope.$apply()

        pool.delay ajax_timer
    pool.delay ajax_timer


