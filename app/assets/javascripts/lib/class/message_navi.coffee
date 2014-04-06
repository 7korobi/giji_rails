Message.navi = ($scope)->
  Navi.push $scope, 'search',
    options:
      current: ""
      location: 'hash'
      is_cookie: false

  Navi.push $scope, 'mode',
    options:
      current: $scope.mode_cache.talk
      location: 'hash'
      is_cookie: false
    select: GIJI.modes

  modes_apply = ->
    $scope.modes = $scope.mode.choice()
    $scope.floats = []

    if $scope.modes.form?
      $scope.form_show = {}
      for key in $scope.modes.form
        $scope.form_show[key] = true

  modes_change = ->
    info_at = $scope.info_at
    if info_at?
      if "info" == $scope.modes.face && "all" == $scope.modes.view
        info_at.value = Number(new Date) unless info_at.value
      else
        info_at.value = ""

    switch $scope.modes.face
      when "info"
        if "all" == $scope.modes.view
          $scope.modes.last = false
        else
          $scope.modes.view = "open"
          $scope.modes.last = true
      when "memo"
        $scope.modes.open = true
        if "all" != $scope.modes.view
          $scope.modes.view = "open"

    if "open" == $scope.modes.view
      $scope.modes.open = true

    mode = _.compact _.uniq [
      $scope.modes.face
      $scope.modes.view
      'open'   if $scope.modes.open
      'last'   if $scope.modes.last
    ]
    $scope.mode.value = mode.join("_")
    $scope.mode_select = _.filter $scope.mode.select, (o)->
      o.face == $scope.modes.face

    $scope.mode_cache[$scope.modes.face] = $scope.mode.value
    $scope.deploy_mode_common()
  modes_apply()


  if $scope.modes?
    $scope.$watch 'mode.value',   modes_apply
    $scope.$watch 'modes.open',   modes_change
    $scope.$watch 'modes.face',   modes_change
    $scope.$watch 'modes.view',   modes_change
    $scope.$watch 'modes.last',   modes_change
