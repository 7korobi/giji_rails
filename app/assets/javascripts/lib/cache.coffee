CACHE = ($scope)->
  $scope.event_merge = (event)->
    if $scope.events? && event?.messages? && event?.turn?
      cache = $scope.events[event.turn]
      if cache?
        event.merge
          name: cache.name
          link: cache.link
    else
      null

  $scope.event_cache = (event)->
    event = $scope.event_merge event
    if 0 < event?.messages.length
      $scope.events[event.turn] = event
    else
      null

