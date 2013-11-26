POTOFS = ($scope)->
  $scope.face =
    hide:   []
    potofs: []
    others: []
    all:    []
    scan: ->
      if $scope.potofs?
        $scope.face.potofs = _.map $scope.potofs, $scope.potof_key
      if $scope.event?.messages?
        log_faces = _.map $scope.event.messages, $scope.potof_key
        $scope.face.all = _.uniq $scope.face.all.concat(log_faces)
      if $scope.face.potofs?
        all = _.without $scope.face.all, '-_none_', $scope.potof_key({})
        $scope.face.others = _.difference all, $scope.face.potofs
      $scope.do_sort_potofs()

  # potofs support
  calc_potof = (hide)->
    $scope.hide_potofs.value = hide

  potof_toggle = (select_face)->
    hide = $scope.hide_potofs.value
    hide = if _.include hide, select_face
      _.without hide, select_face
    else
      hide.concat select_face

    calc_potof hide

  $scope.potof_only = (potofs)->
    all  = _.map $scope.potofs, $scope.potof_key
    only = _.map potofs, $scope.potof_key
    hide = _.difference all, only
    hide.push("others") if potofs != $scope.potofs

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
    group = (o)-> 
      if o[tgt] instanceof Array
        o[tgt][0]
      else
        o[tgt]
    list = _.sortBy $scope.potofs, group
    list.reverse() if reverse
    $scope.potofs = list

    groups = $scope.potofs_groups = _.groupBy $scope.potofs, group
    keys = _.uniq _.map $scope.potofs, group
    for key in keys
      if 'deny' != head_mode[tgt] && groups[key]?
        has_head = true
        has_head and= (groups[key].length < $scope.potofs.length)
        has_head and= ((head_mode[tgt] || 0) < groups[key].length)
      else
        has_head = false

      groups[key].has_head = has_head
      groups[key].head = key
    orders =
      basic: (key)-> groups[key].head
      count: (key)-> groups[key].length
    order = orders[head_order[tgt] || 'basic']
    items = _.sortBy(keys, order)
    items.reverse() if reverse
    $scope.potofs_keys = items

  potofs_sortBy 'stat_at',   true
  potofs_sortBy 'stat_type', true

  Navi.push $scope, 'potofs_order', OPTION.page.potofs

  $scope.sort_potofs = (tgt, zero)->
    $scope.potofs_reverse = (tgt == @tgt)
    $scope.potofs_order.value = tgt
    @tgt = $scope.potofs_reverse || tgt

  $scope.do_sort_potofs = ->
    potofs_sortBy $scope.potofs_order.value, $scope.potofs_reverse
    $scope.adjust()

  $scope.$watch 'potofs_reverse', $scope.do_sort_potofs
  $scope.$watch 'potofs_order.value', $scope.do_sort_potofs
