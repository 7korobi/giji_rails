CACHE = ($scope)->
  $scope.set_turn = (turn)->
    event = _.find $scope.events, (o)-> o.turn == turn
    form  = _.find $scope.forms,  (o)-> o.turn == turn
    $scope.event = event if event?
    $scope.form  = form  if form?
    $scope.face.scan()

  $scope.merge_turn = (old_base, new_base)->
    return unless old_base? && new_base?
    turn = find_turn new_base
    if turn
      $scope.set_turn turn

  $scope.merge = (old_base, new_base, target)->
    return unless old_base? && new_base?

    # into epilogue reset(event section)
    if new_base.event? && old_base.event?
      $scope.wary_messages() if new_base.event.is_epilogue && ! old_base.event.is_epilogue

    func = merge[target] || merge_by.copy
    func old_base, new_base, target

  merge = 
    news: (old_base, new_base, target)=>
      for o in new_base.news
        o.is_news = Date.create('3days ago') < Date.create(o.date)
      merge_by.copy old_base, new_base, target
      
    config: (old_base, new_base, target)=>
      merge_by.copy old_base, new_base, target
      $scope.deploy_config()

    face: (old_base, new_base, target)=>
      INIT_FACE new_base.face
      merge_by.copy old_base, new_base, target

    events: (old_base, new_base, target)=>
      guard = (key)-> _.include ["messages", "has_all_messages"], key
      filter = (o)-> o.turn

      # events section
      for new_event in new_base.events
        INIT_MESSAGES new_event
      merge_by.simple old_base, new_base, "events", guard, filter

      # event section
      new_event = new_base.event
      old_event = find_or_create new_base, old_base, "events"

      return unless new_event?
      for key, o of new_event
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
      if new_base.has_all_messages
        old_base.messages = []

      merge_by.news old_base, new_base, 'messages', guard, filter
      merge_by.copy old_base, new_base, 'last_memo'

      order  = (o)-> o.order || o.updated_at
      old_base.messages = _.sortBy old_base.messages, order

    _potofs: (old_base, new_base)->
      guard = null
      filter = (o)-> o.pno
      return unless new_base?.potofs?

      if new_base.turn?
        for potof in new_base.potofs
          potof.turn = new_base.turn

      merge_by.simple old_base, new_base, "potofs", guard, filter

    forms: ->
    form: (old_base, new_base)->
      guard = (key)-> _.include ["texts"], key
      filter = (o)-> o.turn

      # forms section
      cache.load old_base, new_base, 'forms', 'form'

      # form section
      new_form = new_base.form
      old_form = old_base.form

      return unless new_form?

      INIT_FORM new_base.form
      for key, o of new_form
        old_form[key] = o unless guard(key)

      old_base.form ||= old_form

      # form_texts section
      merge._form_texts old_form, new_base.form


    _form_texts: (old_base, new_base)->
      guard = (key)-> ! _.include ["count","targets","votes"], key
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

      old_base[child] = find_or_create new_base, old_base, target

    build: (new_base, field)->
      if field? && new_base?.events?
        for event in new_base.events
          if event.turn?
            field[event.turn] ||= 
              turn: event.turn

  find_or_create = (new_base, old_base, field_name)->
    field = old_base[field_name]
    cache.build new_base, field

    turn = find_turn new_base
    if turn? && field? && field[turn]
      field[turn]
    else
      {}

  find_turn = (new_base)->
    if new_base?.event?
      return new_base.event.turn
    if old_base?.event?
      return old_base.event.turn

  concat_merge = (olds, news, guard, filter)->
    olds_head = _.filter olds, (o)->
      ! o.is_delete
    old_hash = _.groupBy olds_head, filter

    if guard?
      for new_item in news
        key = filter new_item
        old_item = old_hash[key]?[0]
        if old_item?
          olds_head = _.without olds_head, old_item
          for key, o of new_item
            old_item[key] = o unless guard key
          new_item = old_item
        olds_head.push new_item
    else
      for new_item in news
        key = filter new_item
        old_item = old_hash[key]?[0]
        if old_item?
          olds_head = _.reject olds_head, (o)->
            filter(old_item) == filter(o)
        olds_head.push new_item
    olds_head

  $scope.wary_messages = ()->
    if $scope.events?
      for event in $scope.events
        event.has_all_messages = false




