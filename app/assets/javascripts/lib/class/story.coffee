class StorySummary
  init: ($scope)->
    @rating_url = "#{URL.file}/images/icon/cd_#{@rating}.png"

    event_config = _.filter @card.config, (o)->  SOW.events[o]
    role_config = _.filter @card.config, (o)-> ! SOW.events[o] && ! SOW.specials[o]
    role_wins = _.map role_config, (o)->
      SOW.gifts[o]?.win || SOW.roles[o]?.win || null
    win_config = _.filter role_wins, (o)-> o

    @card.discard_names = Lib.countup.config(@card.discard).join '、'
    @card.config_names = Lib.countup.config(@card.config).join '、'
    @card.role_names  = Lib.countup.config(role_config).join '、'
    @card.win_names  = Lib.countup.win(win_config).join('、')

    if 0 < event_config.length
      @card.event_names   = Lib.countup.config(event_config).join '、'
    else
      @card.event_names   = Lib.countup.config(@card.event).join '、'

    if @upd?
      @upd.time_text = "#{@upd.hour.pad(2)}時#{@upd.minute.pad(2)}分"
      @upd.interval_text = "#{@upd.interval * 24}時間"

    if @announce?
      @announce.rating = OPTION.rating[@rating].caption

    if @type?
      @type.game or= 'TABULA'
      @type.roletable_text = SOW.roletable[@type.roletable]
      @type.game_rule    = SOW.game_rule[@type.game]
      @type.vote_text  = SOW.vote[@type.vote]
      @type.mob_text = SOW.mob[@type.mob]
      @type.saycnt = SOW.saycnt[@type.say]
      if 1 == @type.saycnt?.RECOVERY
        @type.recovery = ' （発言の補充はありません。）'
        @type.recovery = ' （発言の補充があります。）' if 1 < @upd.interval
      @is_wbbs = 'wbbs' == @type.start


class Story extends StorySummary
  init: ($scope)->
    super
    @option_helps = _.map @options, (o)-> SOW.options[o].help
    @comment = $scope.text_decolate @comment
