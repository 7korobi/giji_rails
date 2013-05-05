CACHE = ($scope)->
  $scope.merge = (old_base, new_base, target)->
    return unless old_base? && new_base?
    func = merge[target] || merge_by.copy
    func old_base, new_base, target

  merge = 
    events: (old_base, new_base, target)=>
      guard = (key)-> ["messages", "has_all_messages", "is_news"].any(key)
      filter = (o)-> o.turn

      # events section
      merge_by.simple old_base, new_base, "events", guard, filter

      # event section
      new_event = new_base.event
      old_event = find_or_create new_base, old_base.events

      return unless new_event?
      new_event.keys (key, o)->
        old_event[key] = o unless guard(key)

      old_event.has_all_messages ||= new_event.has_all_messages
      old_base.event ||= old_event

      # messages section
      merge.messages old_event, new_event


    event: ->
    messages: (old_base, new_base)->
      guard = -> false
      filter = (o)-> o.logid

      return unless new_base?.messages?
      if new_base.turn?
        new_base.messages.each (message)->
          message.turn = new_base.turn

      merge_by.news old_base, new_base, 'messages', guard, filter

    
    potofs_boxes: ->
    potofs_box: ->
    potofs: (old_base, new_base, target)=>
      guard = -> false
      filter = (o)-> o.pno

      # potofs_boxes section
      cache.load old_base, new_base, 'potofs_boxes', 'potofs_box'

      # potofs_box section
      old_base.potofs_box = find_or_create new_base, old_base.potofs_boxes

      # potofs section
      old_base.potofs_box.potofs = old_base.potofs
      merge_by.simple old_base, new_base, "potofs", guard, filter


    forms: ->
    form: (old_base, new_base, target)->
      guard = (key)-> ["texts"].any(key)
      filter = (o)-> o.turn

      # forms section
      cache.load old_base, new_base, 'forms', 'form'

      # form section
      new_form = new_base.form
      old_form = find_or_create new_base, old_base.forms

      return unless new_form?
      new_form.keys (key, o)->
        old_form[key] = o unless guard(key)

      old_base.form ||= old_form

      # form_texts section
      merge.form_texts old_form, new_base.form


    form_texts: (old_base, new_base)->
      guard = (key)-> ["ver","text","action","style","target"].any(key)
      filter = (o)-> o.jst + o.switch

      return unless old_base? && new_base?
      merge_by.simple old_base, new_base, "texts", guard, filter


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


  cache = 
    load: (old_base, new_base, target, child)=>
      guard = -> false
      filter = (o)-> o.turn
      old_base[target] ||= []
      merge_by.simple old_base, new_base, target, guard, filter

      child_item = find new_base, old_base[target]
      old_base[child] = child_item if child_item

    build: (new_base, field)->
      if field? && new_base?.events?
        for event in new_base.events
          if event.turn?
            field[event.turn] ||= 
              turn: event.turn

  find_or_create = (new_base, field)->
    cache.build new_base, field

    turn = find_turn new_base
    if turn? && field? && field[turn]
      field[turn]
    else
      {}

  find_turn = (new_base)->
    new_base?.event?.turn

  concat_merge = (olds, news, olds_head, guard, filter)->
    old_hash = olds.groupBy filter

    for new_item in news
      key = filter new_item
      old_item = old_hash[key]?[0]

      if old_item?
        new_item.keys (key, o)->
          old_item[key] = o unless guard key
        new_item = old_item

      olds_head.push new_item



