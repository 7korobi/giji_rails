
INIT = ($scope)->
  return unless gon?

  # TODO news refresh will drop cache.
  caches = $scope.events

  # merge news
  if gon.event?.is_news
    $scope.event_merge gon.event
    if 0 < $scope.event?.messages?.length
      merge_messages = $scope.event.messages.union(gon.event.messages).unique (log)-> log.logid
      $scope.event.messages = merge_messages

  gon.keys (key, val)->
    $scope[key] = val

  # TODO news refresh will drop cache.
  for cache, idx in caches
    $scope.events[idx] = $scope.event_cache cache

  $scope.stories_is_small = true
  $scope.potofs_is_small  = true

  if gon.event?
    if ! gon.event.is_news && ! gon.event.is_deny_messages
      $scope.event_cache gon.event

  if gon.story?
    $scope.title = gon.story.name

    $scope.story.card.discard_names = $scope.countup(gon.story.card.discard).join '、'
    $scope.story.card.event_names   = $scope.countup(gon.story.card.event).join '、'
    $scope.story.card.config_names  = $scope.countup(gon.story.card.config).join '、'
    $scope.story.option_helps = gon.story.options.map (o)-> SOW.options[o].help
    $scope.story.comment = $scope.text_decolate gon.story.comment

    if $scope.story.type?
      $scope.story.type.roletable_text = SOW.roletable[$scope.story.type.roletable]
      $scope.story.type.vote_text    = SOW.vote[$scope.story.type.vote]
      $scope.story.type.mob_text   = SOW.mob[$scope.story.type.mob]
      $scope.story.type.saycnt = SOW.saycnt[$scope.story.type.say]
      if 1 == $scope.story.type.saycnt?.RECOVERY
        $scope.story.type.recovery = ' （発言の補充はありません。）'
        $scope.story.type.recovery = ' （発言の補充があります。）' if 1 < $scope.story.upd.interval
      $scope.story.is_wbbs = 'wbbs' == $scope.story.type.start

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
        win_check = (potof)->
          win_by_role = (list)->
            for role in potof.role
              win = list[role]?.win
              return win if win
            null
          SOW.loves[potof.love]?.win || win_by_role(SOW.gifts) || win_by_role(SOW.roles) || "NONE"
        potof.win = win_check potof
        potof.win_name = SOW.wins[potof.win]?.name

        potof.role_names  = potof.role.map $scope.rolename

      if potof.select?
        potof.select_name = $scope.rolename potof.select

      potof.live or= ""
      potof.auth = potof.sow_auth_id
      potof.head = SOW.live_caption[ potof.live ]

      potof.bond_names       = potof.bonds.map       (o)-> o.name
      potof.pseudobond_names = potof.pseudobonds.map (o)-> o.name
      if potof.deathday < 0
        potof.stat = SOW.live[ potof.live ]
      else
        potof.stat = "#{potof.deathday}日 #{SOW.live[ potof.live ]}"

      potof.text = []
      SOW.maskstates.keys (mask, text)->
        potof.text.push " #{text}" if 0 == potof.rolestate & mask
      potof.text.push " <i class='icon-check'></i>"       if 'pixi' == potof.sheep
      potof.text.push " <i class='icon-heart'></i>"       if 'love' == potof.love
      potof.text.push " <i class='icon-thumbs-down'></i>" if 'hate' == potof.love

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
    .sortBy (o)-> o.deathday

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
        on: 'search'
        current: 1
        is_cookie: false

    $scope.page.length = gon.pages.length
