CACHE = ($scope)->
  $scope.set_turn = (turn)->
    if $scope.events?[turn]?
      $scope.event = $scope.events[turn]
    if $scope.forms?[turn]?
      $scope.form = $scope.forms[turn]
    $scope.face.scan()

  $scope.merge_turn = (old_base, new_base)->
    return unless old_base? && new_base?
    turn = find_turn new_base
    if turn
      $scope.set_turn turn

  $scope.merge = (old_base, new_base, target)->
    return unless old_base? && new_base?

    # into epilogue reset(event section)
    wary_messages old_base, new_base

    func = merge[target] || merge_by.copy
    func old_base, new_base, target

  merge = 
    config: (old_base, new_base, target)=>
      merge_by.copy old_base, new_base, target
      $scope.deploy_config()

    face: (old_base, new_base, target)=>
      INIT_FACE new_base.face
      merge_by.copy old_base, new_base, target

    events: (old_base, new_base, target)=>
      guard = (key)-> ["messages", "has_all_messages"].any(key)
      filter = (o)-> o.turn

      # events section
      for new_event in new_base.events
        INIT_MESSAGES new_event
      merge_by.simple old_base, new_base, "events", guard, filter

      # event section
      new_event = new_base.event
      old_event = find_or_create new_base, old_base.events

      return unless new_event?
      new_event.keys (key, o)->
        old_event[key] = o unless guard(key)

      old_event.has_all_messages ||= new_event.has_all_messages

      # messages section
      merge._messages old_event, new_event

      # potofs section
      merge._potofs old_event, new_base
      old_base.potofs = old_event.potofs

      # bad data initial protection
      old_base.event ||= old_event

    event: ->
    _messages: (old_base, new_base)->
      guard = null
      filter = (o)-> o.logid

      INIT_MESSAGES new_base
      merge_by.news old_base, new_base, 'messages', guard, filter


    _potofs: (old_base, new_base)->
      guard = null
      filter = (o)-> o.pno
      return unless new_base?.potofs?

      if new_base.turn?
        new_base.potofs.each (potof)->
          potof.turn = new_base.turn

      merge_by.simple old_base, new_base, "potofs", guard, filter

    forms: ->
    form: (old_base, new_base)->
      guard = (key)-> ["texts"].any(key)
      filter = (o)-> o.turn

      # forms section
      cache.load old_base, new_base, 'forms', 'form'

      # form section
      new_form = new_base.form
      old_form = old_base.form

      return unless new_form?
      new_form.keys (key, o)->
        old_form[key] = o unless guard(key)

      old_base.form ||= old_form

      # form_texts section
      merge.form_texts old_form, new_base.form


    form_texts: (old_base, new_base)->
      guard = (key)-> ! ["count","targets","votes"].any(key)
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

      old_base[target] = concat_merge(olds, news, guard, filter)

    news: (old_base, new_base, target, guard, filter)->
      olds = old_base[target]
      news = new_base[target]

      return unless news?
      unless olds?
        old_base[target] = news
        return

      old_base[target] = concat_merge(olds, news, guard, filter)


  cache = 
    load: (old_base, new_base, target, child)=>
      guard = -> false
      filter = (o)-> o.turn

      old_base[target] ||= []
      merge_by.simple old_base, new_base, target, guard, filter

      if new_base?.events?
        old_base[child] = find_or_create new_base, old_base[target]
      else
        old_base[child] = old_base[target][0] ||= {}

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

  concat_merge = (olds, news, guard, filter)->
    olds_head = olds.filter (o)->
      ! o.is_delete
    old_hash = olds_head.groupBy filter

    if guard?
      for new_item in news
        key = filter new_item
        old_item = old_hash[key]?[0]
        if old_item?
          olds_head.remove old_item
          new_item.keys (key, o)->
            old_item[key] = o unless guard key
          new_item = old_item
        olds_head.push new_item
    else
      for new_item in news
        key = filter new_item
        old_item = old_hash[key]?[0]
        if old_item?
          olds_head.remove old_item

        olds_head.push new_item
    olds_head

  wary_messages = (old_base, new_base)->
    do_wary = ->
      for old_event in old_base.events
        old_event.has_all_messages = false
    if old_base.form?.login? && new_base.form?.login?
      do_wary() if new_base.form.login.uid != old_base.form.login.uid
    if old_base.event? && old_base.events?
      do_wary() if new_base.event.is_epilogue && ! old_base.event.is_epilogue



