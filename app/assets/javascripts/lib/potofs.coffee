POTOFS = ($scope)->
  $scope.face =
    hide:   []
    potofs: []
    others: []
    all:    []
    scan: ->
      if $scope.potofs?
        $scope.face.potofs = $scope.potofs.map $scope.potof_key
      if $scope.event?.messages?
        log_faces = $scope.event.messages.map $scope.potof_key
        $scope.face.all = ($scope.face.all.concat(log_faces)).unique()
      if $scope.face.potofs?
        $scope.face.others = $scope.face.all.subtract $scope.face.potofs
        $scope.face.others.remove '-_none_'
        $scope.face.others.remove $scope.potof_key({})

  # potofs support
  calc_potof = ->
    hides = $scope.potofs.filter((o)-> o.is_hide ).map $scope.potof_key
    hides.add $scope.face.others if $scope.others_hide
    $scope.face.hide = hides

  $scope.other_toggle = ->
    $scope.others_hide = ! $scope.others_hide
    calc_potof()

  $scope.potof_only = (potofs)->
    $scope.others_hide = potofs != $scope.potofs
    only = potofs.map $scope.potof_key
    for potof in $scope.potofs
      potof.is_hide = ! only.any $scope.potof_key potof

    calc_potof()

  $scope.potof_toggle = (select_potof)->
    select_face = $scope.potof_key select_potof
    for potof in $scope.potofs
      if select_face == $scope.potof_key potof
        potof.is_hide = ! potof.is_hide
    calc_potof()

  $scope.potofs_toggle = ->
    $scope.potofs_is_small = ! $scope.potofs_is_small
    $scope.boot()

  $scope.secret_toggle = ->
    $scope.secret_is_open = ! $scope.secret_is_open
    $scope.boot()

  head_mode =
    said_num:    'deny'
    stat_at:     'deny'
    role_names:  'deny'
    select_name: 'deny'
  head_order =
    stat_type:   'count'
    win_name:    'count'
    role_names:  'count'
    select_name: 'count'
  $scope.potofs_sortBy = (tgt, reverse)->
    return unless $scope.potofs
    for potof in $scope.potofs
      potof[tgt] or= ""
    $scope.potofs = $scope.potofs.sortBy tgt, reverse

    groups = $scope.potofs_groups = $scope.potofs.groupBy tgt
    keys = groups.keys()
    for key in keys
      if 'deny' != head_mode[tgt] && groups[key]?
        has_head = true
        has_head and= (groups[key].length < $scope.potofs.length)
        has_head and= ((head_mode[tgt] || 0) < groups[key].length)
      else
        has_head = false

      groups[key].has_head = has_head
      groups[key].head =
        if has_head
          key
        else
          ""
    orders =
      basic: (key)-> groups[key].head
      count: (key)-> groups[key].length
    order = orders[head_order[tgt] || 'basic']
    $scope.potofs_keys = keys.sortBy order, reverse

