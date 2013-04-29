
FILTER = ($scope, $filter)->
  has_messages = false
  has_messages or= $scope.event?.messages?
  has_messages or= $scope.messages_raw?
  has_messages or= $scope.stories?
  return unless has_messages

  row = OPTION.page.row
  row.options.current_type = Number

  Navi.push     $scope, 'row',   row
  Navi.push     $scope, 'order', OPTION.page.order
  PageNavi.push $scope, 'page',  OPTION.page.page

  page = $scope.page

  filter_filter = $filter 'filter'

  if $scope.stories?
    page.filter_by 'stories'
    page.filter_to 'stories_find'

    game_rule =
      options: OPTION.page.game_rule.options
      button:
        ALL: "- すべて -"


    SOW.game_rule.keys (key,o)->
      game_rule.button[key] = o.CAPTION

    Navi.push $scope, 'folder',   OPTION.page.folder
    Navi.push $scope, 'game_rule', game_rule

    page.filter 'folder.value', (key, list)->
      if 'ALL' == $scope.folder.value
        list
      else
        list.filter (o)->
          o.folder == $scope.folder.value

    page.filter 'game_rule.value', (key, list)->
      if 'ALL' == $scope.game_rule.value
        list
      else
        list.filter (o)->
          o.type.game == $scope.game_rule.value

  if $scope.messages_raw?
    page.filter_by 'messages_raw'
    page.filter_to 'messages'

  if $scope.event?.messages?
    page.filter_by 'event.messages'
    page.filter_to 'messages'
    page.filter 'event.is_news'

    deploy_mode_common = ()->
      $scope.mode_current = 'talk_all_open'
      unless $scope.event.is_news
        $scope.mode_current = 'talk_open'

      $scope.mode_common = [
        {name: '情報', value: 'info_open_player'}
        {name: 'メモ', value: 'memo_all_open_last_player'}
        {name: '議事', value: $scope.mode_current}
      ]
      
    deploy_mode_common()

    mode_params = GIJI.modes.groupBy('val')

    Navi.push $scope, 'search',
      options:
        current: ""
        location: 'hash'
        is_cookie: false

    Navi.push $scope, 'mode',
      options:
        current: $scope.mode_current
        location: 'hash'
        is_cookie: false
      select: GIJI.modes

    $scope.modes = $scope.mode.choice()

    modes_change = (oldVal, newVal)->
      if "info" == $scope.modes.face
        $scope.modes.last = false
        $scope.modes.view = "open"
      if "memo" == $scope.modes.face
        $scope.modes.open = true
      if "open" == $scope.modes.view
        $scope.modes.open = true
      if "all" != $scope.modes.view
        if "memo" == $scope.modes.face
          $scope.modes.view = "open"
      $scope.mode.value = [ 
        $scope.modes.face
        $scope.modes.view
        'open'   if $scope.modes.open
        'last'   if $scope.modes.last
        'player' if $scope.modes.player
      ].unique().compact(true).join("_")
    $scope.$watch 'modes.face',   modes_change
    $scope.$watch 'modes.view',   modes_change
    $scope.$watch 'modes.open',   modes_change
    $scope.$watch 'modes.last',   modes_change
    $scope.$watch 'modes.player', modes_change

    page.filter 'mode.value', (key, list)->
      $scope.modes = $scope.mode.choice().clone()
      $scope.form_show = $scope.modes.form

      is_mob_open = false
      if $scope.story?
        is_mob_open = true if 'alive' == $scope.story.type.mob
        is_mob_open = true if $scope.story.turn == 0
        is_mob_open = true if $scope.story.is_epilogue

      if is_mob_open
        talk_news_regexp = /^[qcaAmIVS][SX]/
        talk_open_regexp = /^[qcaAmIVS][^M]/
        memo_open_regexp = /^([qcaAmIMVS][MX])|([AMam]S)/
      else
        talk_news_regexp = /^[qcaAmIS][SX]/
        talk_open_regexp = /^[qcaAmIS][^M]/
        memo_open_regexp = /^([qcaAmIMS][MX])|([AMam]S)/

      # bdefghjklnoprstuvwxyzBCDEFHJKLNORUYZ
      mode_filters_memo = 
      mode_filters =
        info: /^[aAm]|(vilinfo)/
        memo_all:  /^(.M)|([AMam]S)/
        memo_open: memo_open_regexp
        talk_all:   /^[^S][^M]\d+/
        talk_think: /^[qcaAmIiTVG][^M]\d+/
        talk_clan:  /^[qcaAmIi\-WPX][^M]\d+/
        talk_all_open:   /^.[^M]\d+/
        talk_think_open: /^[qcaAmIiTVGS][^M]\d+/
        talk_clan_open:  /^[qcaAmIi\-WPXS][^M]\d+/
        talk_all_last:   /^[^S][SX]/
        talk_think_last: /^[qcaAmIiTVG][SX]/
        talk_clan_last:  /^[qcaAmIi\-WPX][SX]/
        talk_all_open_last:   /^.[SX]/
        talk_think_open_last: /^[qcaAmIiTVGS][SX]/
        talk_clan_open_last:  /^[qcaAmIi\-WPXS][SX]/
        talk_open:      talk_open_regexp
        talk_open_last: talk_news_regexp

      filter = mode_filters[$scope.modes.regexp]
      list = list.filter (o)->
        o.logid.match filter
      if $scope.modes.last
        result = []
        order   = (o)-> [GIJI.message.order[o.mestype] || 8, o.date || (new Date)]
        list.groupBy($scope.potof_key).keys (key, list)->
          result.push list.last()
        result.sortBy(order)
      else
        list

    page.filter 'hide_potofs.value', (hide_ids, list)->
      hide_faces = hide_ids.clone()
      if hide_faces.any 'others'
        hide_faces.add($scope.face.others)
      faces = $scope.face.all.subtract hide_faces
      list.filter (o)->
        faces.some $scope.potof_key(o)

  page.filter 'search.value', (search, list)->
    filter_filter list, search

  page.paginate 'row.value', (page_per, list)->
    if $scope.event?.is_news
      to   = list.length
      from = to - page_per
      from = 0 if from < 0
      $scope.event.is_rowover = (0 < from)
      $scope.page.value = $scope.page.length

    else
      $scope.page.value = $scope.page.length if $scope.page.value > $scope.page.length
      $scope.page.value = 1 if $scope.page.value < 1
      page_no = $scope.page.value
      to   =  page_no      * page_per + OPTION.page.pile
      from = (page_no - 1) * page_per

    list.to(to).from(from)

  page.filter 'order.value', (key, list)->
    for log in list
      log.text = $scope.text_decolate log.log

    $scope.anchors = []
    if "desc" == key
      list.reverse()
    else
      list

  scrollTo = ()->
    $('div.popover').remove()
    doIt = ->
      if $scope.top.id?
        target = $(".message_filter.#{$scope.top.id}")

      if target?.offset()?
      else
        target = $(".inframe")

      $(window).scrollTop  target.offset().top - 20
    doIt.delay 500

  $scope.$watch 'event_is_news', deploy_mode_common
  $scope.$watch 'modes.face',    scrollTo
  $scope.$watch 'order.value',   scrollTo
  $scope.$watch 'event.turn',    scrollTo
  $scope.$watch 'page.value',    scrollTo
  $scope.$watch 'page.value',    $scope.boot
