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

  add_diary: ->
    $scope.diary.add.anchor @

  init_data: (new_base)->
    @turn = new_base.turn

    if @logid?
      @key = "#{@logid},#{@turn}"

    if @date?
      @updated_at = @date
      delete @date
    @updated_at = Date.create @updated_at

    switch @subid
      when "B"
        @mestype = "TSAY"
      when "M"
        key = "#{@mestype}:#{@csid}/#{@face_id}"
        if (! new_base.last_memo[key]) || new_base.last_memo[key].updated_at < @updated_at
          new_base.last_memo[key] =
            log:        @log
            updated_at: @updated_at

  init_view: ($scope, now)->
    if @updated_at
      @cancel_btn =
        if @logid? && "q" == @logid[0] && ((now - @updated_at) < 25 * 1000)
          """なら削除できます。<a hogan-click='cancel_say("#{@logid}")()' class="btn btn-danger click glyphicon glyphicon-trash"></a>"""
        else
          ""
      @timestamp = @updated_at.format('({dow}) {TT}{hh}時{mm}分', 'ja')
      @time = $scope.lax_time @updated_at

    if ! @template? && @logid? && @mestype? && @subid?
      template = null
      for style in MESSAGE.template
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
