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