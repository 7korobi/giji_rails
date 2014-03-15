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
    set_last_memo(f)
    f.valid = true

    if f.max
      text = f.text.replace(/\n$/g, '\n ')
      lines = text.split("\n").length
      size  = calc_length(text)
      point = calc_point(size, lines)
      if lines > 5
        f.lines = lines
      else
        f.lines = 5

      f.valid = cb(size, lines) if cb
      if f.valid
        f.error = ""
        if 'point' == f.max.unit
          mark = "#{point}pt "
        else
          mark = ""
      else
        f.error = "cautiontext"
        mark = "⊘"
      f.valid_text = $sce.trustAsHtml "#{mark} #{size}<sub>/#{f.max.size}字</sub>  #{lines}<sub>/#{f.max.line}行</sub>"
    else
      f.valid_text = ""

  submit = (f, param)->
    if f
      $scope.errors?[f.cmd] = null
      f.is_delete = true
      switch f.cmd
        when "wrmemo"
          f.is_last_memo = false
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
      set_last_memo(f)

  preview = (text)->
    if text?
      $scope.preview_decolate text.escapeHTML().replace(/&#x2f;/g,"/").replace(/\n/g, "<br>")
    else
      ""

  preview_action = (f)->
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


  write = (f, cb)->
    return if f.disabled
    $scope.text_valid f, true
    f.ver.commit() if f.ver?

    if f.valid && f.is_preview
      cb()
    else
      f.ver.commit() if f.ver?
      f.is_preview = f.valid
      f.preview = preview f.text.replace(/\n$/g, '\n ')

  set_last_memo = (f)->
    return unless "wrmemo" == f.cmd
    unless f.text || f.is_last_memo
      log = $scope.event?.last_memo?["#{f.mestype}:#{f.csid_cid}"]?.log
      if log?
        f.text = $scope.undecolate(log) || ""
        f.ver.commit() if f.ver?
        f.is_last_memo = true
        valid(f)

  is_input = (f)->
    return false unless f.text?
    return false if calc_length(f.text.replace /\s/g, '') < 4
    true

  $scope.error = (f)->
    list = $scope.errors?[f?.cmd]
    list ||= []
    list.join("<br>")

  safe_anker = (f)->
    if f.mestype == "SAY" && ! $scope.event?.is_epilogue
      if f.text.match ///>>[\=\*\!]\d+///
        $scope.errors[f.cmd] = ["あぶない！秘密会話へのアンカーがありますよ！"]
        return false
    return true

  $scope.text_valid = (f, force)->
    if force || true # ! head.browser.simple
      valid f, (size, lines)->
        return false if f.max.size < size
        return false if f.max.line < lines

        $scope.errors[f.cmd] = []
        switch f.cmd
          when "write"
            return false if "#{$scope.potof?.pno}" != f.target && ! safe_anker(f)
            return is_input(f)
          when "action"
            f.preview = preview_action(f)
            switch f.action
              when "-99"
                break
              when "-2"
                f.target = "-1"
                f.preview = preview_action(f)
                return true
              else
                return f.target != "-1"

            if size < 1
              return false if f.target ==  "-1"
              return false if f.action == "-99"
            else
              return false unless safe_anker(f)
              return is_input(f)

          when "wrmemo"
            return true if size < 1 # メモを剥がしたコマンド
            return false unless safe_anker(f)
            return is_input(f)
        return true

  $scope.option = (list, key)->
    find = _.find list, (o)-> o.val == key
    if find?
      find
    else
      {}

  $scope.entry = (f)->
    write f, ->
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

  $scope.write = (f)->
    write f, ->
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

  $scope.action = (f)->
    f.is_preview = true
    write f, ->
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
      return unless target_name

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
