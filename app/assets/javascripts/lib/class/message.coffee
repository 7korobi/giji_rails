class Message
  attention: ->
    base = location.href.replace(location.hash,"")
    url = Navi.to_url
      hash:
        search: @key
        hide_potofs: ""
        mode: "talk_all_open"
        page: 1

    wo = window.open()
    wo.opener = null
    wo.location.href = "#{base}#{url.hash}"

  cancel_btn: ->
    if @logid? && "q" == @logid[0] && ((new Date() - @updated_at) < 25 * 1000)
      """なら削除できます。<a href_eval='cancel_say("#{@logid}")()' class="btn btn-danger click glyphicon glyphicon-trash"></a>"""
    else
      ""

  init_view: ($scope)->
    @add_diary = ->
      $scope.diary.add.anchor @

    @time = ->
      $scope.lax_time @updated_at

    if ! @template? && @logid? && @mestype? && @subid?
      template = null
      for style in GIJI.message.template
        for target, table of style
          template or= table[@[target]]
      @template or= "message/#{template}"

    if ! @img? && @face_id? && @csid?
      @img  or= $scope.img_cid(@csid, @face_id)

    if ! @anchor? && @logid? && match_data = @logid.match(/(\D)\D+(\d+)/)
      [_, mark, num] = match_data
      anchor_ok = false
      anchor_ok ||= (mark != 'T')
      anchor_ok ||= $scope.story?.is_epilogue
      if SOW.log.anchor[mark]? && anchor_ok
        @anchor or= "#{SOW.log.anchor[mark]}#{Number(num)}"
      else
        @anchor or= ""

    if ! @text?
      @text = $scope.text_decolate @log
      delete @log
