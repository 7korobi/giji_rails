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

  $scope.messages_merge = (old_base, new_base)->
    guard = (key)-> false
    filter = (o)-> o.logid
    target = 'messages'
    if old_base? && new_base?
      olds = old_base[target]
      news = new_base[target]

    if news? && olds? && news[0]?
      base_id = filter news[0]
      idx = olds.findIndex (o)-> filter(o) == base_id
      $scope.gon_merge old_base, new_base, target, idx, guard, filter

  $scope.form_text_merge = (old_base, new_base)->
    guard = (key)-> ["text","action","style","target"].any key
    filter = (o)-> o.jst + o.switch
    target = 'texts'
    $scope.gon_merge old_base, new_base, target, 0, guard, filter

  $scope.potofs_merge = (old_base, new_base)->
    guard = (key)-> false
    filter = (o)-> o.pno
    target = 'potofs'
    $scope.gon_merge old_base, new_base, target, 0, guard, filter


  $scope.gon_merge = (old_base, new_base, target, idx, guard, filter)->
    if old_base? && new_base?
      olds = old_base[target]
      news = new_base[target]

    if news? && olds? && news[0]?
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
            return if guard(key)
            old_item[0][key] = o
        else
          olds.push new_item[0]
      new_base[target] = old_base[target]

