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
    return unless old_base? && new_base?
    olds = old_base[target]
    news = new_base[target]

    return unless news? && olds? && news[0]?
    olds_tail = olds[idx..]
    if idx == 0
      olds_head = []
    else
      olds_head = olds[0..idx - 1]
    old_base[target] = olds_head
    new_base[target] = olds_head

    old_hash = olds.groupBy filter
    for new_item in news
      key = filter new_item
      old_item = old_hash[key]?[0]

      if old_item?
        new_item.keys (key, o)->
          old_item[key] = o unless guard(key)
        new_item = old_item

      olds_head.push new_item



