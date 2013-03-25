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
    iframe_load = (doc)->
      $scope.form = null
      if 20 < doc.length
        $scope.replace_gon doc

        INIT $scope
        $scope.top.count()
        $scope.face.scan()
        $scope.pool_start()
        $scope.$apply()


    if head.browser.ie
      form = $("""<form id="submit_request" method="post" action="#{$scope.form.uri.escapeURL()}##{location.href}"></form>""")

    else
      iframe = $('iframe')
      if 0 == iframe.length
        dynamic_div = document.createElement 'DIV'
        dynamic_div.innerHTML = """<iframe name="submit_result" style="display: none;"></iframe>"""
        document.body.appendChild dynamic_div 

        iframe = $('iframe')
        iframe[0].contentWindow.name = "submit_result"

      iframe.load ->
        new_item = $(@).contents().find("body")
        iframe_load new_item.html()
    
      form = $("""<form id="submit_request" target="submit_result" method="post" action="#{$scope.form.uri.escapeURL()}##{location.href}"></form>""")

    param.keys (key,val)->
      return unless val?
      tag = $("""<input type="hidden" name="#{key}">""")
      tag.attr "value", val
      form.append tag

    form[0].submit()

  $scope.entry = (f, valid)->
    if valid && f.is_preview
      param =
        cmd:  'entry'
        turn: $scope.event.turn
        vid:  $scope.story.vid
        target:    -1
        monospace: f.style
        csid_cid:  f.csid_cid
        role:      f.role
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
        mes:       f.text
        monospace: 0
      param.monospace = SOW.monospace[f.style] if SOW.monospace[f.style]
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

  $scope.vote = (f)->
    param =
      cmd: f.cmd
      vid:  $scope.story.vid
      target:    f.target1
      target2:   f.target2

    $scope.submit param

  $scope.commit = (f)->
    param =
      cmd: f.cmd
      vid:  $scope.story.vid
      commit:    f.commit

    $scope.submit param

  $scope.confirm = (f)->
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
