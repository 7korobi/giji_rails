CACHE = ($scope)->
  $scope.merge = (old_base, new_base, target)->
    return unless old_base? && new_base?
    func = merge[target] || merge_by.copy
    func old_base, new_base, target


  merge.potofs = (old_base, new_base, target)=>
    guard = -> false
    filter = (o)-> o.pno
    merge_by.simple old_base, new_base, target, guard, filter

    clear(new_base, @cache.potofs)
    cache = find(new_base, @cache.potofs)
    merge_by.copy cache, old_base, target if cache


  merge.event = ->
  merge.events = (old_base, new_base, target)=>
    guard = ["messages"].any
    filter = (o)-> o.turn
    merge_by.simple old_base, new_base, target, guard, filter

    new_event = new_base.event
    old_event = find(new_base, old_base[target])

    return unless old_event? && new_event?
    new_event.keys (key, o)->
      old_event[key] = o unless guard(key)

    merge.messages old_event, new_event

    old_base.event ||= old_event


  merge.form = (old_base, new_base, target)->
    guard = ["texts"].any
    filter = (o)-> o.turn

    old_base[target] ||= new_base[target]
    merge.form_texts(old_base.form, new_base.form)

    clear(new_base, @cache.potofs)
    cache = find(new_base, @cache.form)
    merge_by.copy cache, old_base, target if cache


  merge.messages = (old_base, new_base)->
    guard = (key)-> false
    filter = (o)-> o.logid
    target = 'messages'

    return unless new_base?.messages?
    new_base.messages.each (message)->
      message.turn = new_base.turn

    merge_by.news old_base, new_base, target, guard, filter


  merge.form_texts = (old_base, new_base)->
    guard = ["ver","text","action","style","target"].any
    filter = (o)-> o.jst + o.switch
    target = 'texts'

    return unless old_base? && new_base?
    merge_by.simple old_base, new_base, target, guard, filter


  merge_by =
    copy: (old_base, new_base, target)->
      old_base[target] = new_base[target]

    simple: (old_base, new_base, target, guard, filter)->
      olds = old_base[target]
      news = new_base[target]

      return unless news?
      unless olds?
        old_base[target] = news
        return

      olds_head = []
      old_base[target] = olds_head
      concat_merge(olds, news, olds_head, guard, filter)

    news: (old_base, new_base, target, guard, filter)->
      olds = old_base[target]
      news = new_base[target]

      return unless news?
      unless olds?
        old_base[target] = news
        return

      if news? && news[0]?
        base_id = filter news[0]
        idx = olds.findIndex (o)-> filter(o) == base_id
      else
        idx = 0

      if 0 == idx 
        olds_head = []
      else
        olds_head = olds[0..idx - 1]

      old_base[target] = olds_head
      concat_merge(olds, news, olds_head, guard, filter)


  @cache =
    potofs: []
    forms:  []

  clear = (new_base, field)->
    if field? && new_base?.events?
      for event in new_base.events
        if event.turn?
          field[event.turn] ||= {}

  find = (new_base, field)->
    turn = new_base?.event?.turn
    if turn? && field?
      field[turn]
    else
      null

  concat_merge = (olds, news, olds_head, guard, filter)->
    old_hash = olds.groupBy filter

    for new_item in news
      key = filter new_item
      old_item = old_hash[key]?[0]

      if old_item?
        new_item.keys (key, o)->
          old_item[key] = o unless guard(key)
        new_item = old_item

      olds_head.push new_item



