FILTER = ($scope, $filter)->
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
    page.filter 'messages_raw.length'

  if $scope.event?.messages?
    page.filter_by 'event.messages'
    page.filter_to 'messages'
    page.filter 'event.turn'
    page.filter 'event.is_news'
    page.filter 'event.messages.length'

    $scope.deploy_mode_common()

    mode_params = GIJI.modes.groupBy('val')

    Navi.push $scope, 'search',
      options:
        current: ""
        location: 'hash'
        is_cookie: false

    Navi.push $scope, 'mode',
      options:
        current: $scope.mode_cache.talk
        location: 'hash'
        is_cookie: false
      select: GIJI.modes

    $scope.modes = $scope.mode.choice()

    modes_change = (oldVal, newVal)->
      if "info" == $scope.modes.face
        $scope.modes.last = false
        $scope.modes.view = "open"
        $scope.navi.value_add("link")
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

      $scope.mode_cache[$scope.modes.face] = $scope.mode.value
      $scope.deploy_mode_common()

    $scope.$watch 'modes.face',   modes_change
    $scope.$watch 'modes.view',   modes_change
    $scope.$watch 'modes.open',   modes_change
    $scope.$watch 'modes.last',   modes_change
    $scope.$watch 'modes.player', modes_change

    page.filter 'mode.value', (key, list)->
      $scope.modes = $scope.mode.choice().clone()
      is_mob_open = false
      if $scope.story?
        is_mob_open = true if 'alive' == $scope.story.type.mob
        is_mob_open = true if $scope.story.turn == 0
        is_mob_open = true if $scope.story.is_epilogue

      # bdefghjklnoprstuvwxyzBCDEFHJKLNORUYZ
      mode_filters =
        info: /^[aAm]|(vilinfo)/
        memo_all:  /^(.M)/
        memo_open: /^([qcaAmIMS][MX])/
        talk_all:   /^[^S][^M]\d+/
        talk_think: /^[qcaAmIi][^M]\d+/
        talk_clan:  /^[qcaAmIi\-WPX][^M]\d+/
        talk_all_open:   /^.[^M]\d+/
        talk_think_open: /^[qcaAmIiS][^M]\d+/
        talk_clan_open:  /^[qcaAmIi\-WPXS][^M]\d+/
        talk_all_last:   /^[^S][SX]/
        talk_think_last: /^[qcaAmIi][SX]/
        talk_clan_last:  /^[qcaAmIi\-WPX][SX]/
        talk_all_open_last:   /^.[SX]/
        talk_think_open_last: /^[qcaAmIiS][SX]/
        talk_clan_open_last:  /^[qcaAmIi\-WPXS][SX]/
        talk_open:      /^[qcaAmIS][^M]/
        talk_open_last: /^[qcaAmIS][SX]/

      if is_mob_open
        open_filters = 
          talk_think_open_last: /^[qcaAmIiVS][SX]/
          talk_think_open: /^[qcaAmIiVS][^M]\d+/
          memo_open:      /^([qcaAmIMVS][MX])/
          talk_open:      /^[qcaAmIVS][^M]/
          talk_open_last: /^[qcaAmIVS][SX]/
      else
        open_filters = {}

      add_filters = 
        clan:  (o)-> "" != o.to && o.to?
        think: (o)-> "" == o.to && o.logid.match(/^T[^M]/)

      mode_filter   = open_filters[$scope.modes.regexp]
      mode_filter ||= mode_filters[$scope.modes.regexp]
      add_filter   = add_filters[$scope.modes.view]
      add_filter ||= -> false

      list = list.filter (o)->
        o.logid.match(mode_filter) || add_filter(o)

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
    $scope.search_input = search
    filter_filter list, search

  page.paginate 'row.value', (page_per, list)->
    if $scope.event?.is_news
      $scope.page.visible = false
      to   = list.length
      from = to - page_per
      from = 0 if from < 0
      $scope.event.is_rowover = (0 < from)

    else
      $scope.page.visible = true
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

  do_scrollTo = ()->
    $('div.popover').remove()
    target = $(".message_filter.#{$scope.top.id}")

    if $scope.event?.is_news && target?.offset()?
    else
      target = $(".inframe")

    $(window).scrollTop  target.offset().top - 20
  scrollTo = do_scrollTo.debounce 500

  form_show = ->
    if $scope.modes?
      $scope.form_show = $scope.modes.form

  $scope.$watch 'mode.value',    form_show
  $scope.$watch 'event.is_news', form_show
  $scope.$watch 'event.is_news', $scope.deploy_mode_common
  $scope.$watch 'modes.face',    scrollTo
  $scope.$watch 'order.value',   scrollTo
  $scope.$watch 'event.turn',    scrollTo
  $scope.$watch 'page.value',    scrollTo
  $scope.$watch 'page.value',    $scope.boot
