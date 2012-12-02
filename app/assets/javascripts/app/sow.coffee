GIJI.change_turn = (href, turn)->
  href.replace(/\&?rowall=\w+/,"").replace(/\&?cmd=\w+/,"").replace(/\&?turn=\d+/,"") + "&turn=#{turn}&rowall=on"

if SOW_RECORD.CABALA.events?
  SOW.events.keys (k,v)->
    v.id  = SOW_RECORD.CABALA.events.indexOf k
    v.key = k

CGI = ($scope, $filter)->
  MODULE $scope, $filter

  length = (text, unit)->
    switch unit
      when 'point'
        # countup sjis byte size
        ascii = text.match(/[\x01-\xff]/g)  or []
        other = text.match(/[^\x01-\xff]/g) or []
        ascii.length + other.length * 2
      else
        text.length

  $scope.text_valid = (f, form)->
    f.valid = true
    if f.max
      size = length(f.text, f.max.unit)
      f.valid = false if size < 4
      f.valid = false if f.max.size < size
      f.valid = false if f.max.line < f.text.lines().length
      f.valid = false unless form.$valid
      if f.valid
        f.error = ""
      else
        f.error = "cautiontext"
      "#{size} / #{f.max.size}"
    else
      ""

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

  $scope.submit = (param)->
    form = $("""<form action="#{$scope.form.uri.escapeURL()}" method="post"></form>""")
    $('body').append form

    param.keys (key,val)->
      return unless val?
      tag = $("""<input type="hidden" name="#{key}">""")
      tag.attr "value", val
      form.append tag

    form.submit()

  $scope.entry = (f, valid)->
    if valid && f.is_preview
      param =
        cmd:  'entry'
        turn: $scope.event.turn
        vid:  $scope.story.vid
        target:    -1
        monospace: f.style
        csid_cid:  f.csid_cid
        mes:       f.text
        entrypwd:  f.password
      $scope.submit param
    else
      f.is_preview = valid

  $scope.write = (f, valid)->
    if valid && f.is_preview
      param =
        cmd: f.cmd
        turn: $scope.event.turn
        vid:  $scope.story.vid
        target:    f.target
        monospace: f.style
        mes:       f.text
      param[f.switch] = "on"  if  f.switch
      $scope.submit param
    else
      f.is_preview = valid

  $scope.action = (f, valid)->
    param =
      cmd: "action"
      turn: $scope.event.turn
      vid:  $scope.story.vid
      target:     f.target
      actionno:   f.action
      actiontext: f.text
    $scope.submit param

  $scope.confirm = (f)->
    if f.targets
      target_name = $scope.option(f.targets, f.target).name
    if target_name
      $scope.form.confirm = "#{target_name} - #{f.title}"
    else
      return if f.targets?
      $scope.form.confirm = f.title

    $scope.confirm_cancel = ->
      $scope.form.confirm = null
    $scope.confirm_complete = ->
      $scope.form.confirm = null
      param =
        cmd: f.cmd
        turn: $scope.event.turn
        vid:  $scope.story.vid
        target:    f.target
      $scope.submit param
