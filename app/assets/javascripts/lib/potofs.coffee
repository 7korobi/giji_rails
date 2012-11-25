POTOFS = ($scope)->
  $scope.face_id =
    hide:   []
    potofs: []
    others: []
    all:    []

  # potofs support
  calc_potof = ->
    hides = $scope.potofs.filter((o)-> o.is_hide ).map (o)-> o.face_id
    hides.add $scope.face_id.others if $scope.others_hide
    hides.remove '_none_'
    $scope.face_id.hide = hides

  $scope.other_toggle = ->
    $scope.others_hide = ! $scope.others_hide
    calc_potof()

  $scope.potof_href = (potof)->
    hash = location.hash
    location.href.replace hash, "##{hash}&face_only=#{potof.face_id}"

  $scope.potof_only = (potofs)->
    $scope.others_hide = potofs != $scope.potofs
    for potof in $scope.potofs
      potof.is_hide = true

    for potof in potofs
      potof.is_hide = false
    calc_potof()

  $scope.potof_toggle = (potof)->
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

