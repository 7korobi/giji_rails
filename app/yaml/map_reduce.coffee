### basic ###
map = ->
  emit @face_id,
    list: [@story_id]

reduce = (k, vs) ->
  res = list: []
  vs.forEach (v) ->
    res.list = res.list.concat(v.list)

  res

### potofs countup 
  MapReduce::Face.generate
###
map = ->
  return if -1 < deny_stories.indexOf @story_id
  return if -1 < deny_sow_auth_ids.indexOf @sow_auth_id
  deploy = (v, field)->
    res[field] ||= 
      all: 1
      max: 1
      max_is: v
      value: {}
    res[field].value[v] = 1

  res = {}

  folder = @story_id?.split("-")?[0]
  if @role?
    for v in @role
      deploy(v || "mob", "role")
      role = SOW.roles[v]
      if role?.win?
        win = SOW.groups[role.win]?.name
  win ||= "その他"

  deploy(win,    "win")
  deploy(folder,   "folder") if folder?
  deploy(@story_id,  "story_id")
  deploy(@sow_auth_id, "sow_auth_id")
  emit @face_id, res


reduce = (k, vs)->
  counter = (v, field)->
    o = res[field] ||= 
      all: 0
      max: 0
      max_is: null
      value: {}

    if v[field]?
      for k, count of v[field].value
        o.value[k] ||= 0
        o.value[k] += count
        o.all += count
        if o.max < o.value[k]
          o.max = o.value[k]
          o.max_is = k

  res = {}

  for v in vs
    counter v, "win"
    counter v, "folder"
    counter v, "story_id"
    counter v, "role"
    counter v, "sow_auth_id"
  res

final = (k, res)->
  res.face_id = k

  if res.wins?
    res.wins = res.win.keys.map (k)->
      [k, res.win.value[k]]


### map_reduce_message_by_story countup 
  MapReduce::Message.generate
###
map = ->
  for logid_head, logs of @value
    emit logid_head, logs

reduce = (k, vs) ->
  counter = (v, field)->
    base = logs[field] ||= {}
    values = v[field]
    for field_id, vv of values
      res = base[field_id] ||= 
        date:
          min: vv.date.min
          max:  vv.date.max
        max: 0
        all: 0
        count: 0
      res.date.min = vv.date.min if res.date.min > vv.date.min
      res.date.max = vv.date.max if res.date.max < vv.date.max
      res.max = vv.max if res.max < vv.max
      res.all += vv.all
      res.count += vv.count

  logs = {}
  for v in vs
    counter(v, "all")
    counter(v, "face_id")
    counter(v, "sow_auth_id")

  logs


### events-messages countup 
  MapReduce::MessageByStory.generate
###
map =  ->
  return unless @messages
  return if -1 < deny_stories.indexOf @story_id

  counter = (v, logs, field)->
    key  = v[field]
    base = logs[field] ||= {}
    res  = base[key] ||= 
      date:
        min: v.date
        max: v.date
      max: 0
      all: 0
      count: 0

    res.date.min = v.date if res.date.min > v.date
    res.date.max = v.date if res.date.max < v.date
    res.count += 1
    if v.log?
      res.max = v.log.length if res.max < v.log.length
      res.all += v.log.length

  emits = {}
  for v in @messages
    unless -1 < deny_sow_auth_ids.indexOf v.sow_auth_id
      logid_head = v.logid.substring(0,2)
      logs = emits[logid_head] ||= {}

      counter(v, logs, "all")
      counter(v, logs, "face_id")
      counter(v, logs, "sow_auth_id")

  emit @story_id, emits

reduce = (k, vs) ->
  counter = (v, logs, field)->
    base = logs[field] ||= {}
    values = v[field]
    for field_id, vv of values
      res = base[field_id] ||= 
        date:
          min: vv.date.min
          max:  vv.date.max
        max: 0
        all: 0
        count: 0
      res.date.min = vv.date.min if res.date.min > vv.date.min
      res.date.max = vv.date.max if res.date.max < vv.date.max
      res.max = vv.max if res.max < vv.max
      res.all += vv.all
      res.count += vv.count

  emits = {}
  for v in vs
    for logid_head, vv of v
      logs = emits[logid_head] ||= {}
      counter(vv, logs, "all")
      counter(vv, logs, "face_id")
      counter(vv, logs, "sow_auth_id")

  emits
