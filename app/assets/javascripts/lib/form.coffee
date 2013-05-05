FORM = ($scope)->
  $scope.stories_is_small = true

  length = (text, unit)->
    return 0 unless text?
    switch unit
      when 'point'
        # countup sjis byte size
        ascii = text.match(/[\x01-\xff]/g)  or []
        other = text.match(/[^\x01-\xff]/g) or []
        ascii.length + other.length * 2
      else
        text.length

  valid = (f, cb)->
    f.valid = true
    if f.max
      size = length(f.text, f.max.unit)
      cb(size)
      f.valid = false if f.max.size < size
      f.valid = false if f.max.line < f.text.lines().length
      if f.valid
        f.error = ""
        mark = ""
      else
        f.error = "cautiontext"
        mark = "⊘"
      "#{mark} #{size} / #{f.max.size}"
    else
      ""

  $scope.text_valid = (f)->
    valid f, (size)->
      f.valid = false if size < 4

  $scope.action_valid = (f)->
    valid f, (size)->
      if size < 1 
        f.valid = false if f.target ==  "-1"
        f.valid = false if f.action == "-99"

  $scope.preview_action = (f)->
    text =
      if 0 < f.text?.length
        f.text
      else
        $scope.option(f.actions, f.action).name.replace(/\(.*\)$/,"")
    target =
      if -1 < f.target
        $scope.option(f.targets, f.target).name
      else
        ""
    "#{f.shortname}は、#{target}#{text}"

  $scope.preview = (f)->
    if f.text?
      lines = f.text.escapeHTML().lines()
      lines.join "<br>"
    else
      ""

  $scope.option = (list, key)->
    find = list.find (o)-> o.val == key
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
        mes:       f.text
        entrypwd:  f.password
        target:    -1
        monospace: 0
      param.monospace = SOW.monospace[f.style] if SOW.monospace[f.style]
      $scope.submit param
    else
      f.ver.commit() if f.ver?
      f.is_preview = valid

  $scope.write = (f, valid)->
    return if f.disabled
    f.ver.commit() if f.ver?

    if valid && f.is_preview
      param =
        cmd: f.cmd
        safety: "on"
        turn: $scope.event.turn
        vid:  $scope.story.vid
        target:    f.target
        mes:       f.text
        monospace: 0
      param.monospace = SOW.monospace[f.style] if SOW.monospace[f.style]
      param[f.switch] = "on"  if  f.switch

      $scope.submit param
      f.text = ""
      f.is_preview = false
    else
      f.is_preview = valid

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
      $scope.submit param
      f.text = ""
      f.target = "-1"
      f.action = "-99"

  $scope.vote = (f)->
    return if f.disabled
    param =
      cmd: f.cmd
      vid:  $scope.story.vid
      target:    f.target1
      target2:   f.target2

    $scope.submit param

  $scope.commit = (f)->
    return if f.disabled
    param =
      cmd: f.cmd
      vid:  $scope.story.vid
      commit:    f.commit

    $scope.submit param

  $scope.confirm = (f)->
    return if f.disabled
    if f.targets
      target_name = $scope.option(f.targets, f.target).name
    if target_name
      $scope.form.confirm = "#{target_name} - #{f.title}"
    else
      return if f.targets?
      $scope.form.confirm = f.title

    param =
      cmd: f.cmd
      vid:  $scope.story.vid
      target:    f.target
      target2:   f.target2

    $scope.confirm_cancel = ->
      $scope.form.confirm = null
    $scope.confirm_complete = ->
      $scope.form.confirm = null
      $scope.submit param
