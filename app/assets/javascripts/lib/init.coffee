
INIT = ($scope)->
  return unless gon?

  cache_events   = $scope.events
  cache_event    = $scope.event

  # autoload news merge
  if gon.event?.is_news && 0 < cache_event?.messages?.length
    msgs  = cache_event.messages
    news  = gon.event.messages
    idx   = msgs.findIndex (log)-> log.logid == news[0].logid
    cache = msgs.length - 1
    last  = idx + news.length - 1

    for i in [idx..last]
      if msgs[i]?
        msgs[i].merge news[i - idx]
        msgs[i].anchor = null
      else
        msgs[i] = news[i - idx]

  gon.keys (key, news)->
    $scope[key] = news

  # events join legacy cache
  if cache_events?
    for cache in cache_events
      $scope.event_cache cache

  # events join new one-day log
  if ! gon.event?.is_news && ! gon.event?.is_deny_messages
    $scope.event_cache $scope.event

  if gon.event?.is_news
    $scope.event.merge $scope.events[$scope.event.turn]

  $scope.stories_is_small = true
  $scope.potofs_is_small  = true

  gon_story = (story)->
    story.card.discard_names = $scope.countup(story.card.discard).join '、'
    story.card.event_names   = $scope.countup(story.card.event).join '、'
    story.card.config_names  = $scope.countup(story.card.config).join '、'
    story.option_helps = story.options.map (o)-> SOW.options[o].help
    story.comment = $scope.text_decolate story.comment

    if story.upd?
      story.upd.time_text = "#{story.upd.hour}時#{story.upd.minute}分"
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

  if gon.stories?
    for story in gon.stories
      gon_story story

  if gon.story?
    $scope.title = gon.story.name
    gon_story gon.story

  if gon.potofs?
    live_potofs = gon.potofs.filter (o)->
      o.deathday < 0

    potofs = gon.potofs.map (potof)->
      if potof.bonds?
        potof.bonds = potof.bonds.map (pid)->
          gon.potofs[pid]
      if potof.pseudobonds?
        potof.pseudobonds = potof.pseudobonds.map (pid)->
          gon.potofs[pid]

      if potof.role?
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

          win_juror || win_love || win_zombie || win_by_role(SOW.gifts) || win_by_role(SOW.roles) || "NONE"
        potof.win = win_check potof, gon.story
        if ["PAN WOLF RP PRETENSE PERJURY XEBEC CRAZY"].find gon.story.folder
          potof.win = 'WOLF' if potof.win == 'EVIL'

        if gon.story.is_finish
          if gon.story? && gon.event? && ["WOLF", "ALLSTAR", "ULTIMATE", "CABALA"].find gon.story.folder
            is_dead_lose = 1 if ["LIVE_TABULA", "LIVE_MILLERHOLLOW"].find gon.story.type.game
            is_dead_lose = 1 if "LONEWOLF" == potof.win
            is_dead_lose = 1 if "HUMAN"    == potof.win && "TROUBLE" == gon.story.type.game
            is_dead_lose = 1 if "HATER"    == potof.win && ! potof.role.find "HATEDEVIL"
            is_lone_lose = 1 if "LOVER"    == potof.win && ! potof.role.find "LOVEANGEL"
            potof.win_result = "敗北"
            potof.win_result = "勝利" if gon.event.winner == "WIN_" + potof.win
            potof.win_result = "勝利" if gon.event.winner != "WIN_HUMAN"  && "EVIL" == potof.win
            potof.win_result = "勝利" if "victim" == potof.live && "DISH" == potof.win
            potof.win_result = "敗北" if is_lone_lose && gon.potofs.any (o)-> o.live != 'live' && o.bonds.find potof.pno
            potof.win_result = "敗北" if is_dead_lose && 'live' != potof.live
            potof.win_result = "参加" if "NONE" == potof.win
          else
            potof.win_result = "参加"
        potof.win_result = "" if "suddendead" == potof.live


        potof.win_name = SOW.wins[potof.win]?.name
        potof.role_names  = potof.role.map $scope.rolename

      if potof.select?
        potof.select_name = $scope.rolename potof.select

      potof.live or= ""
      potof.live_name = SOW.live[ potof.live ] || " "
      potof.auth = potof.sow_auth_id

      potof.bond_names       = potof.bonds.map       (o)-> o.name
      potof.pseudobond_names = potof.pseudobonds.map (o)-> o.name

      potof.stat_type = SOW.live_caption[ potof.live ] || " "
      if potof.deathday < 0
        potof.stat_at = " "
      else
        potof.stat_at = "#{potof.deathday}日"
      potof.stat = "#{potof.stat_at} #{potof.live_name}"

      potof.text = []
      potof.text.push " <i class='icon-check'></i>"       if 'pixi' == potof.sheep
      potof.text.push " <i class='icon-heart'></i>"       if 'love' == potof.love
      potof.text.push " <i class='icon-thumbs-down'></i>" if 'hate' == potof.love
      if potof.rolestate?
        rolestate = potof.rolestate
        SOW.maskstates.keys (mask, text)->
          potof.text.push " #{text}" if 0 == (rolestate & mask)
          rolestate |= mask

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
      potof

    $scope.potofs = potofs
    $scope.sum =
      actaddpt: (live_potofs.sum (o)-> o.point.actaddpt)

  # for face_ids
  if gon.potofs?
    $scope.face_id.potofs = $scope.potofs.map (o)-> o.face_id

  if $scope.event?.messages?
    $scope.face_id.all = $scope.event.messages.map((o)-> o.face_id).unique()
    if $scope.face_id.potofs?
      $scope.face_id.others = $scope.face_id.all.subtract $scope.face_id.potofs

  if gon.pages?
    PageNavi.push $scope, 'page'
      options:
        current: 1
        location: 'search'
        is_cookie: false

    $scope.page.length = gon.pages.length
