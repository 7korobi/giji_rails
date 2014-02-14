FORM = ($scope, $sce)->
  $scope.stories_is_small = true

  calc_length = (text)->
    return 0 unless text?
    # countup sjis byte size
    ascii = text.match(/[\x01-\xff]/g)  or []
    other = text.match(/[^\x01-\xff]/g) or []
    ascii.length + other.length * 2

  calc_point = (size)->
    point  = 20
    point += (size - 50)/14 if 50 < size
    point.floor()

  valid = (f, cb)->
    f.valid = true
    text = f.text.replace(/\n$/g, '\n ')
    if f.max
      lines = text.split("\n").length
      size  = calc_length(text)
      point = calc_point(size, lines) 
      f.lines = 5

      cb(size, lines)
      f.valid = false if f.max.size < size
      f.valid = false if f.max.line < lines
      if f.valid
        f.error = ""
        if 'point' == f.max.unit
          mark = "#{point}pt "
        else
          mark = ""
      else
        f.error = "cautiontext"
        mark = "⊘"
      $sce.trustAsHtml "#{mark} #{size}<sub>/#{f.max.size}字</sub>  #{lines}<sub>/#{f.max.line}行</sub>"
    else
      ""
  
  submit = (f, param)->
    if f
      $scope.errors?[f.cmd] = null
      f.is_delete = true
      switch f.cmd
        when "wrmemo"
          f.is_preview = false
        when "write"
          f.is_preview = false
          f.text = ""
        when "action"
          f.text = ""
          f.target = "-1"
          f.action = "-99"
        else 
    $scope.submit param, ->

  preview = (text)->
    if text?
      $scope.preview_decolate text.escapeHTML().replace(/&#x2f;/g,"/").replace(/\n/g, "<br>")
    else
      ""

  $scope.error = (f)->
    list = $scope.errors?[f?.cmd]
    list ||= []
    list.join("<br>")

  $scope.text_valid = (f)->
    valid f, (size, lines)->
      f.valid = false if calc_length(f.text.replace /\s/g, '') < 4
      switch f.cmd
        when "wrmemo"
          f.valid = true if f.text == ""
        else

  $scope.action_valid = (f)->
    valid f, (size, lines)->
      f.valid = false if f.target == "-1" && f.action != "-99"
      if size < 1 
        f.valid = false if f.target ==  "-1"
        f.valid = false if f.action == "-99"
      else
        f.valid = false if calc_length(f.text.replace /\s/g, '') < 4

  $scope.preview_action = (f)->
    text =
      if 0 < f.text?.length
        preview f.text.replace(/\n$/g, '\n ')
      else
        $scope.option(f.actions, f.action).name.replace(/\(.*\)$/,"")
    target =
      if -1 < f.target
        $scope.option(f.targets, f.target).name
      else
        ""
    "#{f.shortname}は、#{target}#{text}"

  $scope.option = (list, key)->
    find = _.find list, (o)-> o.val == key
    if find?
      find
    else
      {}

  $scope.entry = (f, valid)->
    return if f.disabled
    if valid && f.is_preview
      param =
        cmd:  'entry'
        turn: $scope.event.turn
        vid:  $scope.story.vid
        csid_cid:  f.csid_cid
        role:      f.role
        mes:       f.text.replace(/\n$/g, '\n ')
        entrypwd:  f.password
        target:    -1
        monospace: 0
      param.monospace = SOW.monospace[f.style] if SOW.monospace[f.style]
      submit f, param
    else
      f.ver.commit() if f.ver?
      f.is_preview = valid
      f.preview = preview f.text.replace(/\n$/g, '\n ')

  $scope.write = (f, valid)->
    return if f.disabled
    f.ver.commit() if f.ver?

    if valid && f.is_preview
      param =
        cmd: f.cmd
        safety: "on"
        turn: $scope.event.turn
        vid:  $scope.story.vid
        mes:  f.text.replace(/\n$/g, '\n ')
        monospace: 0
      param.monospace = SOW.monospace[f.style] if SOW.monospace[f.style]
      param[f.switch] = "on"  if  f.switch
      param.target = f.target if f.target?
      submit f, param
    else
      f.is_preview = valid
      f.preview = preview f.text.replace(/\n$/g, '\n ')

  $scope.action = (f, valid)->
    return if f.disabled
    if valid
      param =
        cmd: "action"
        turn: $scope.event.turn
        vid:  $scope.story.vid
        target:     f.target
        actionno:   f.action
        actiontext: f.text
        monospace: 0
      submit f, param

  $scope.vote_change = (f)->
    if $scope.errors?
      $scope.errors[f.cmd] = ["#{f.title}をクリックしましょう。"]

  $scope.vote = (f)->
    return if f.disabled
    param =
      cmd: f.cmd
      vid:  $scope.story.vid
      target:    f.target1
      target2:   f.target2
    switch f.cmd
      when 'vote'
        param.entrust = ''
      when 'entrust'
        param.entrust = 'on'
    submit f, param

  $scope.commit = (f)->
    return if f.disabled
    param =
      cmd: f.cmd
      vid:  $scope.story.vid
      commit: f.commit
    submit f, param

  $scope.confirm = (f)->
    return if f.disabled
    if f.jst == "target"
      return unless $scope.form.command_targets?.length
      f.target = $scope.form.command_target
      target_name = $scope.option($scope.form.command_targets, $scope.form.command_target).name

    if target_name
      $scope.form.confirm = "#{target_name} - #{f.title}"
    else
      $scope.form.confirm = f.title

    param = _.omit f, [
      '$$hashKey'
      'is_delete'
      'targets'
      'title'
      'jst'
    ]
    param.vid = $scope.story.vid

    $scope.confirm_cancel = ->
      $scope.form.confirm = null
    $scope.confirm_complete = ->
      $scope.form.confirm = null
      submit f, param
      for f in $scope.form.texts
        f.is_delete = true
