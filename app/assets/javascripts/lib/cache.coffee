CACHE = ($scope)->

  $scope.events_join = (event)->
    event = $scope.events_merge event
    if 0 < event?.messages.length
      $scope.events[event.turn] = event
    else
      null

  $scope.events_merge = (event)->
    if $scope.events? && event? && event.messages? && event.turn?
      cache = $scope.events[event.turn]
      if cache?
        event.merge
          name: cache.name
          link: cache.link
    else
      null

  $scope.event_merge = (olds, news)->
    filter = (o)-> o.logid
    base_id = filter news[0]
    idx = olds.findIndex (o)-> filter(o) == base_id
    $scope.gon_merge olds, news, idx, [], filter

  $scope.form_merge = (olds, news)->
    filter = (o)-> o.jst + o.switch
    guards = ["text","action","style","target"]
    $scope.gon_merge olds, news, 0, guards, filter

  $scope.gon_merge = (olds, news, idx, guards, filter)->
    if news[0]
      old_hash = olds[idx..].groupBy filter
      new_hash = news.groupBy filter

      old_hash.keys (key, old_item)->
        new_item = new_hash[key]
        unless new_item?
          olds.remove (o)-> old_item[0] == o

      new_hash.keys (key, new_item)->
        old_item = old_hash[key]
        if old_item?
          new_item[0].keys (key, o)->
            return if guards.any key
            old_item[0][key] = o
        else
          olds.push new_item[0]

