INIT_POTOF = ($scope, potof, gon)->
  if potof.bonds?
    bonds = _.map potof.bonds, (pno_or_pl)->
      gon.potofs[pno_or_pl] || pno_or_pl
    potof.bonds = _.compact bonds
  if potof.pseudobonds?
    pseudobonds = _.map potof.pseudobonds, (pno_or_pl)->
      gon.potofs[pno_or_pl] || pno_or_pl
    potof.pseudobonds = _.compact pseudobonds

  if potof.role?
    potof.win_result = "参加"
    if gon.story?
      win_check = (potof, story)->
        win_by_role = (list)->
          for role in potof.role
            win = list[role]?.win
            return win if win
          null

        zombie = 0x040
        win_zombie = 'WOLF' if ('TROUBLE' == story.type.game) && 0 == (potof.rolestate & zombie)
        win_juror = 'HUMAN' if ('juror' == story.type.mob) && ('mob' == potof.live)
        win_love = SOW.loves[potof.love]?.win

        win = win_juror || win_love || win_zombie || win_by_role(SOW.gifts) || win_by_role(SOW.roles) || "NONE"
        win = GIJI.folders[story.folder].evil if win == 'EVIL'
        win

      potof.win = win_check potof, gon.story

      if gon.story.is_finish
        winner = gon.event?.winner || gon.events? && _.last(gon.events)?.winner

        if gon.story? && gon.event? && ! GIJI.folders[gon.story.folder].role_play
          is_dead_lose = 1 if _.include ["LIVE_TABULA", "LIVE_MILLERHOLLOW", "SECRET"], gon.story.type.game
          is_dead_lose = 1 if "LONEWOLF" == potof.win
          is_dead_lose = 1 if "HUMAN"    == potof.win && "TROUBLE" == gon.story.type.game
          is_dead_lose = 1 if "HATER"    == potof.win && ! _.include potof.role, "HATEDEVIL"
          is_lone_lose = 1 if "LOVER"    == potof.win && ! _.include potof.role, "LOVEANGEL"
          potof.win_result = "敗北"
          potof.win_result = "勝利" if winner == "WIN_" + potof.win
          potof.win_result = "勝利" if winner != "WIN_HUMAN"  && winner != "WIN_LOVER" && "EVIL" == potof.win
          potof.win_result = "勝利" if "victim" == potof.live && "DISH" == potof.win
          potof.win_result = "敗北" if is_lone_lose && _.any gon.potofs, (o)-> o.live != 'live' && _.any o.bonds, potof.pno
          potof.win_result = "敗北" if is_dead_lose && 'live' != potof.live
          potof.win_result = "参加" if "NONE" == potof.win
    potof.win_result = "" if "suddendead" == potof.live

    potof.win_name = SOW.wins[potof.win]?.name
    potof.role_names = potof.role.map $scope.name.config
  else
    potof.role_names = []

  if potof.select?
    potof.select_name = $scope.name.config potof.select

  potof.live or= ""
  potof.live_name = SOW.live[ potof.live ] || " "
  potof.auth = potof.sow_auth_id

  potof.bond_names       = _.map potof.bonds,       (o)-> o.name
  potof.pseudobond_names = _.map potof.pseudobonds, (o)-> o.name

  potof.stat_type = SOW.live_caption[ potof.live ] || " "
  if potof.deathday < 0
    potof.stat_at = " "
  else
    potof.stat_at = "#{potof.deathday}日"
  potof.stat = "#{potof.stat_at} #{potof.live_name}"

  potof.text = []
  if potof.rolestate?
    rolestate = potof.rolestate
    for mask in SOW.maskstate_order
      if 0 == (rolestate & mask)
        text = SOW.maskstates[mask]
        potof.text.push "#{text} " if text
        rolestate |= mask
  potof.text.push "☑" if 'pixi' == potof.sheep
  potof.text.push "♥" if 'love' == potof.love
  potof.text.push "☠" if 'hate' == potof.love
  potof.text.push "<s>♥</s>" if 'love' == potof.pseudolove
  potof.text.push "<s>☠</s>" if 'hate' == potof.pseudolove

  potof.said = ""
  potof.said_num = 0
  if 0 < potof.point.saidcount
    potof.said_num += potof.point.saidcount
    potof.said     += " #{potof.point.saidcount}回"
  if 0 < potof.point.saidpoint
    potof.said_num += potof.point.saidpoint
    potof.said     += " #{potof.point.saidpoint}pt"

  if potof.timer?
    potof.timer.entried     = -> $scope.lax_time Date.create @entrieddt
    potof.timer.entry_limit = -> $scope.lax_time Date.create @limitentrydt

  potof.summary = ->
    switch $scope.potofs_order.value
      when 'said_num'
        "✎#{@said}"
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
  potof