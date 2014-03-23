class Message
  init_data: (new_base)->
    @turn = new_base.turn

    if @logid?
      @key = "#{@logid},#{@turn}"

    if @date?
      @updated_at = @date
      delete @date
    @updated_at = new Date @updated_at

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
      @timestamp = $scope.timestamp @updated_at

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

  init_timer: ($scope, now)->
    return unless @updated_at
    return unless "M" == @subid || "S" == @subid

    $scope.timer.cache @
    @cancel_btn =
      if @logid? && "q" == @logid[0] && ((now - @updated_at) < DELAY.msg_delete)
        $scope.timer.add_next @updated_at, DELAY.msg_delete
        """<span cancel_btn>なら削除できます。<a hogan-click='cancel_say("#{@logid}")()' class="btn btn-danger click glyphicon glyphicon-trash"></a></span>"""
      else
        ""
    @time = $scope.set_time @
