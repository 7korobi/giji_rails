CACHE = ($scope)->

  $scope.events_merge = (old_base, new_base, event)->
    guard = (key)-> ["messages"].any key
    filter = (o)-> o.turn
    target = 'events'

    if old_base? && new_base?
      olds = old_base[target]
      news = new_base[target]

    # events merge event
    if event?.messages?
      event.messages.each (message)->
        message.turn = event.turn

      if news?
        new_item = news[event.turn]
        if new_item?
          new_item.keys (key, o)->
            event[key] = o unless guard(key)
          event.keys (key, o)->
            new_item[key] = o unless guard(key)

      if olds?
        old_item = olds[event.turn]
        $scope.messages_merge old_item, event
    gon_merge old_base, new_base, target, 0, guard, filter

  $scope.messages_merge = (old_base, new_base)->
    return unless old_base? && new_base?

    guard = (key)-> false
    filter = (o)-> o.logid
    target = 'messages'
    olds = old_base[target]
    news = new_base[target]

    if olds?
      if news? && news[0]?
        base_id = filter news[0]
        idx = olds.findIndex (o)-> filter(o) == base_id
        gon_merge old_base, new_base, target, idx, guard, filter
    else
      old_base[target] = news

  $scope.form_texts_merge = (old_base, new_base)->
    return unless old_base?.form? && new_base?.form?
    unless new_base.event?.is_news 
      new_base.form = old_base.form
      return

    guard = (key)-> ["ver","text","action","style","target"].any key
    filter = (o)-> o.jst + o.switch
    target = 'texts'

    gon_merge old_base.form, new_base.form, target, 0, guard, filter

  $scope.potofs_merge = (old_base, new_base)->
    guard = (key)-> false
    filter = (o)-> o.pno
    target = 'potofs'
    gon_merge old_base, new_base, target, 0, guard, filter


  gon_merge = (old_base, new_base, target, idx, guard, filter)->
    return unless old_base? && new_base?
    olds = old_base[target]
    news = new_base[target]

    return unless news? && olds?
    olds_tail = olds[idx..]
    if idx < 1
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



