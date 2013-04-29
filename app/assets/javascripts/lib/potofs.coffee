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
  calc_potof = (hide)->
    $scope.hide_potofs.value = hide

  potof_toggle = (select_face)->
    hide = $scope.hide_potofs.value.clone()
    if hide.any(select_face)
      hide.remove(select_face)
    else
      hide.add(select_face)

    calc_potof hide

  $scope.potof_only = (potofs)->
    all  = $scope.potofs.map $scope.potof_key
    only = potofs.map $scope.potof_key
    hide = all.subtract(only)
    hide.add("others") if potofs != $scope.potofs

    calc_potof hide

  $scope.other_toggle = ->
    potof_toggle "others"

  $scope.potof_toggle = (select_potof)->
    potof_toggle $scope.potof_key select_potof

  $scope.potofs_toggle = ->
    $scope.potofs_is_small = ! $scope.potofs_is_small
    $scope.adjust()

  $scope.secret_toggle = ->
    if $scope.secret_is_open = ! $scope.secret_is_open
      $scope.mode_d = "all"
    $scope.adjust()

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


  potofs_sortBy = (tgt, reverse)->
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
    $scope.adjust()

  potofs_sortBy 'stat_at',   true
  potofs_sortBy 'stat_type', true

  Navi.push $scope, 'potofs_order', OPTION.page.potofs

  $scope.sort_potofs = (tgt, zero)->
    $scope.potofs_reverse = (tgt == @tgt)
    $scope.potofs_order.value = tgt
    @tgt = $scope.potofs_reverse || tgt

  do_sort = ->
    potofs_sortBy $scope.potofs_order.value, $scope.potofs_reverse

  $scope.$watch 'potofs_reverse', do_sort
  $scope.$watch 'potofs_order.value', do_sort
