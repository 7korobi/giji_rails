class Potof
  is_mob: -> "mob" == @live
  is_live: -> @deathday < 0
  key: -> Potof.key @

  summary: (order)->
    switch order
      when 'said_num'
        """<span class="glyphicon glyphicon-pencil"></span>#{@said}"""
      when 'stat_at', 'stat_type'
        @stat
      when 'win_result', 'win_name','role_names'
        @role_names.join('、')
      when 'select_name'
        if @select_name
          @select_name + "を希望"
        else
          ""
      when 'text'
        @text.join('')

  init_win: ->
    return unless @role?
    return unless @story?
    return unless @event?

    win_by_role = (list)=>
      for role in @role
        win = list[role]?.win
        return win if win
      null

    zombie = 0x040
    win_zombie = 'WOLF' if ('TROUBLE' == @story.type.game) && 0 == (@rolestate & zombie)
    win_juror = 'HUMAN' if ('juror' == @story.type.mob) && ('mob' == @live)
    win_love = SOW.loves[@love]?.win

    @win = win_juror || win_love || win_zombie || win_by_role(SOW.gifts) || win_by_role(SOW.roles) || "NONE"
    @win = GIJI.folders[@story.folder].evil if win == 'EVIL'
    @win_name = SOW.wins[@win]?.name

    @win_result = "参加"
    if "suddendead" == @live
      @win_result = ""
      return

    if @story.is_finish
      winner = @event.winner || events? && _.last(events)?.winner
      if ! GIJI.folders[@story.folder].role_play
        is_dead_lose = 1 if _.include ["LIVE_TABULA", "LIVE_MILLERHOLLOW", "SECRET"], @story.type.game
        is_dead_lose = 1 if "LONEWOLF" == @win
        is_dead_lose = 1 if "HUMAN"    == @win && "TROUBLE" == @story.type.game
        is_dead_lose = 1 if "HATER"    == @win && ! _.include @role, "HATEDEVIL"
        is_lone_lose = 1 if "LOVER"    == @win && ! _.include @role, "LOVEANGEL"
        @win_result = "敗北"
        @win_result = "勝利" if winner == "WIN_" + @win
        @win_result = "勝利" if winner != "WIN_HUMAN"  && winner != "WIN_LOVER" && "EVIL" == @win
        @win_result = "勝利" if "victim" == @live && "DISH" == @win
        @win_result = "敗北" if is_lone_lose && _.any @potofs, (o)-> o.live != 'live' && _.any o.bonds, @pno
        @win_result = "敗北" if is_dead_lose && 'live' != @live
        @win_result = "参加" if "NONE" == @win

  init_bonds: ->
    finder = (pno)=> @potofs[pno]
    if @bonds?
      @bonds = _.compact _.map @bonds, finder
      @bond_names = _.map @bonds, (o)-> o.name
    if @pseudobonds?
      @pseudobonds = _.compact _.map @pseudobonds, finder
      @pseudobond_names = _.map @pseudobonds, (o)-> o.name

  init_stat: ->
    @key = Potof.key(@)
    @live or= ""
    @live_name = SOW.live[ @live ] || " "
    @stat_type = SOW.live_caption[ @live ] || " "
    @auth = @sow_auth_id
    if @deathday < 0
      @stat_at = " "
    else
      @stat_at = "#{@deathday}日"
    @stat = "#{@stat_at} #{@live_name}"

  init_role: ->
    if @role?
      @role_names = @role.map Lib.name.config
    else
      @role_names = []

    if @select?
      @select_name = Lib.name.config @select

  init_text: ->
    @text = []
    if @rolestate?
      rolestate = @rolestate
      for mask in SOW.maskstate_order
        if 0 == (rolestate & mask)
          text = SOW.maskstates[mask]
          @text.push "#{text} " if text
          rolestate |= mask
    @text.push "☑" if 'pixi' == @sheep
    @text.push "♥" if 'love' == @love
    @text.push "☠" if 'hate' == @love
    @text.push "<s>♥</s>" if 'love' == @pseudolove
    @text.push "<s>☠</s>" if 'hate' == @pseudolove

  init_said: ->
    @said = ""
    @said_num = 0
    if 0 < @point.saidcount
      @said_num += @point.saidcount
      @said     += " #{@point.saidcount}回"
    if 0 < @point.saidpoint
      @said_num += @point.saidpoint
      @said     += " #{@point.saidpoint}pt"

  init_timer: ($scope)->
    if @timer?
      @timer.entrieddt    = new Date @timer.entrieddt
      @timer.limitentrydt = new Date @timer.limitentrydt
      @timer.entried     = -> $scope.lax_time @entrieddt
      @timer.entry_limit = -> $scope.lax_time @limitentrydt

Potof.key = (o)->
  csid = (o.csid || '*').split('_')[0]
  face_id = o.face_id || '*'
  "#{csid}-#{face_id}"

