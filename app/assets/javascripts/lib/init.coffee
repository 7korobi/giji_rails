INIT_FACE = (new_base)->
  if new_base.story_ids?
    new_base.story_id_of_folders = _.groupBy new_base.story_ids, ([k,count])->
      k.split("-")?[0]

  if new_base.wins?
    new_base.role_of_wins = _.groupBy new_base.roles, ([k,count])->
      role = SOW.gifts[k] || SOW.roles[k] || {group: "OTHER"}
      SOW.groups[role.group].name

INIT_MESSAGES = (new_base)->
  return unless new_base?.messages?
  if new_base.turn?
    for message in new_base.messages
      message.turn = new_base.turn
      if message.plain?
        if message.plain.type?
          message.mesicon = SOW_RECORD.CABALA.mestypeicons[message.plain.type] 
          message.mestype = SOW_RECORD.CABALA.mestypes[message.plain.type]
          message.order = GIJI.message.order[message.mestype] || 8
        if message.plain.updated_at?
          message.updated_at = Date.create(1000 * message.plain.updated_at) 
      if message.date?
        message.updated_at = Date.create(message.date) 
      message.updated_at ||= new Date


INIT_STORY = ($scope, story)->
  event_config = _.filter story.card.config, (o)->  SOW.events[o]
  role_config = _.filter story.card.config, (o)-> ! SOW.events[o] && ! SOW.specials[o]
  role_wins = _.map role_config, (o)->
    SOW.gifts[o]?.win || SOW.roles[o]?.win || null
  win_config = _.filter role_wins, (o)-> o

  story.card.discard_names = $scope.countup_config(story.card.discard).join '、'
  story.card.config_names = $scope.countup_config(story.card.config).join '、'
  story.card.role_names  = $scope.countup_config(role_config).join '、'
  story.card.win_names  = $scope.countup_win(win_config).join('、') 

  if 0 < event_config.length 
    story.card.event_names   = $scope.countup_config(event_config).join '、'
  else
    story.card.event_names   = $scope.countup_config(story.card.event).join '、'

  story.option_helps = _.map story.options, (o)-> SOW.options[o].help
  story.comment = $scope.text_decolate story.comment
  story.rating_url = "#{URL.file}/images/icon/cd_#{story.rating}.png"

  if story.announce?
    story.announce.rating = OPTION.rating[story.rating].caption

  if story.upd?
    story.upd.time_text = "#{story.upd.hour.pad(2)}時#{story.upd.minute.pad(2)}分"
    story.upd.interval_text = "#{story.upd.interval * 24}時間"

  if story.type?
    story.type.game or= 'TABULA'
    story.type.roletable_text = SOW.roletable[story.type.roletable]
    story.type.game_rule    = SOW.game_rule[story.type.game]
    story.type.vote_text  = SOW.vote[story.type.vote]
    story.type.mob_text = SOW.mob[story.type.mob]
    story.type.saycnt = SOW.saycnt[story.type.say]
    if 1 == story.type.saycnt?.RECOVERY
      story.type.recovery = ' （発言の補充はありません。）'
      story.type.recovery = ' （発言の補充があります。）' if 1 < story.upd.interval
    story.is_wbbs = 'wbbs' == story.type.start
  story


INIT_POTOFS = ($scope, gon)->
  if gon.potofs?
    for potof in gon.potofs
      if potof.bonds?
        bonds =  _.map potof.bonds, (pno_or_pl)->
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
            winner = gon.event?.winner || gon.events?.last()?.winner

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
              potof.win_result = "敗北" if is_lone_lose && _.any gon.potofs (o)-> o.live != 'live' && _.any o.bonds, potof.pno
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
        potof.timer.entried     = -> $scope.lax_time Date.create potof.timer.entrieddt
        potof.timer.entry_limit = -> $scope.lax_time Date.create potof.timer.limitentrydt

      potof.summary = ->
        switch $scope.potofs_order.value
          when 'said_num'
            "✎#{potof.said}"
          when 'stat_at', 'stat_type'
            potof.stat
          when 'win_result', 'win_name','role_names'
            potof.role_names.join('、')
          when 'select_name'
            if potof.select_name
              potof.select_name + "を希望"
            else
              ""
          when 'text'
            potof.text.join('')
      potof



INIT = ($scope, $filter)->
  return unless gon?

  INIT_POTOFS $scope, gon

  if gon.stories?
    for story in gon.stories
      INIT_STORY $scope, story

  if gon.story?
    INIT_STORY $scope, gon.story


  for key, news of gon
    $scope.merge $scope, gon, key
  $scope.merge_turn $scope, gon


  if $scope.potofs?
    live_potofs = _.filter $scope.potofs, (o)->
      o.deathday < 0

    $scope.potofs.mob = ->
      _.filter $scope.potofs, (o)-> "mob" == o.live
    $scope.sum =
      actaddpt: 
        _.reduce live_potofs, (sum, o)-> 
          sum + o.point.actaddpt
        , 0

    potofs_hash = 
      others: "他の人々"
    for potof in $scope.potofs
      key = $scope.potof_key potof
      potofs_hash[key] = potof.name

    unless $scope.hide_potofs?
      ArrayNavi.push $scope, 'hide_potofs',
        options:
          class: 'btn-inverse'
          current: []
          location: 'hash'
          is_cookie: true
        button: potofs_hash

  if $scope.pages?
    unless $scope.page?
      PageNavi.push $scope, 'page', OPTION.page.page_search

    $scope.page.length = gon.pages.length

  has_messages = false
  has_messages or= $scope.event?.messages?
  has_messages or= $scope.messages_raw?
  has_messages or= $scope.stories?
  if has_messages
    row = OPTION.page.row
    row.options.current_type = Number
    unless $scope.row?
      Navi.push     $scope, 'row',   row
    unless $scope.order?
      Navi.push     $scope, 'order', OPTION.page.order
    unless $scope.page?
      FILTER($scope, $filter)


