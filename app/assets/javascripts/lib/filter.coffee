FILTER = ($scope, $filter)->
  PageNavi.push $scope, 'page',  OPTION.page.page
  page = $scope.page
  filter_filter = $filter 'filter'

  if $scope.stories?
    page.filter_by 'stories'
    page.filter_to 'stories_find'

    filters = [
      { target: "rating",       key: ((o)-> o.rating), text: ((key)-> OPTION.rating[key]?.caption) }
      { target: "roletable",    key: ((o)-> o.type.roletable), text: ((key)-> SOW.roletable[key]) }
      { target: "game_rule",    key: ((o)-> o.type.game), text: ((key)-> SOW.game_rule[key]?.CAPTION) }
      { target: "potof_size",   key: ((o)-> String _.last o.vpl), text: ((key)-> key + "人") }
      { target: "card_event",   key: ((o)-> o.card.event_names || "(なし)"), text: String }
      { target: "card_win",     key: ((o)-> o.card.win_names || "(なし)"), text: String }
      { target: "card_role",    key: ((o)-> o.card.role_names || "(なし)"), text: String }
      { target: "upd_time",     key: ((o)-> o.upd.time_text),     text: String }
      { target: "upd_interval", key: ((o)-> o.upd.interval_text), text: String }
    ]
    for filter in filters  
      keys = _.chain( $scope.stories ).map(filter.key).uniq().sort().value()
      navigator = 
        options: OPTION.page[filter.target].options
        button:
          ALL: "- すべて -"
      if keys.length > 1
        for key in keys
          navigator.button[key] = filter.text(key)

      Navi.push $scope, filter.target, navigator
      page.filter "#{filter.target}.value", (key, list)->
        if 'ALL' == $scope[filter.target].value
          list
        else
          _.filter list, (o)->
            filter.key(o) == $scope[filter.target].value

    Navi.push $scope, 'folder',   OPTION.page.folder
    page.filter 'folder.value', (key, list)->
      if 'ALL' == $scope.folder.value
        list
      else
        _.filter list, (o)->
          o.folder == $scope.folder.value

  if $scope.messages_raw?
    page.filter_by 'messages_raw'
    page.filter_to 'messages'
    page.filter 'messages_raw.length'

  if $scope.event?.messages?
    page.last_updated_at = ()->
      _ref = $scope.event.messages
      if _ref?
        _.last(_ref)?.updated_at
    page.filter_by 'event.messages'
    page.filter_to 'messages'
    page.filter 'event.turn'
    page.filter 'event.is_news'
    page.filter 'page.last_updated_at()'

    $scope.deploy_mode_common()

    mode_params = _.groupBy GIJI.modes, 'val'

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

    $scope.modes = $.extend {}, $scope.mode.choice()

    modes_change = (oldVal, newVal)->
      if "info" == $scope.modes.face
        $scope.modes.last = false
        $scope.modes.view = "open"
        $scope.navi.value_add("link")
      if "memo" == $scope.modes.face
        $scope.modes.open = true
        if "all" != $scope.modes.view
          $scope.modes.view = "open"
      if "open" == $scope.modes.view
        $scope.modes.open = true

      mode = _.compact _.uniq [ 
        $scope.modes.face
        $scope.modes.view
        'open'   if $scope.modes.open
        'last'   if $scope.modes.last
        'player' if $scope.modes.player
      ]
      $scope.mode.value = mode.join("_")
      $scope.mode_select = _.filter $scope.mode.select, (o)->
        o.face == $scope.modes.face

      $scope.mode_cache[$scope.modes.face] = $scope.mode.value
      $scope.deploy_mode_common()

    $scope.$watch 'modes.face',   modes_change
    $scope.$watch 'modes.view',   modes_change
    $scope.$watch 'modes.open',   modes_change
    $scope.$watch 'modes.last',   modes_change
    $scope.$watch 'modes.player', modes_change

    page.filter 'mode.value', (key, list)->
      $scope.modes = $.extend {}, $scope.mode.choice()
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

      list = _.filter list, (o)->
        o.logid.match(mode_filter) || add_filter(o)

      if $scope.modes.last
        result = []
        order  = (o)-> o.order || o.updated_at
        for key, sublist of _.groupBy list, $scope.potof_key
          result.push _.last _.sortBy sublist, order
        _.sortBy result, order
      else
        list

    page.filter 'hide_potofs.value', (hide_faces, list)->
      if _.include hide_faces, 'others'
        hide_faces = hide_faces.concat $scope.face.others
      faces = _.difference $scope.face.all, hide_faces
      _.filter list, (o)->
        _.some faces, (face)-> face == $scope.potof_key(o)

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

    list.slice from, to

  page.filter 'order.value', (key, list)->
    list.reverse() if "desc" == key
    list

  do_scrollTo = ()->
    $scope.anchors = []
    $scope.go.messages();

  scrollTo = _.debounce do_scrollTo, 500

  form_show = ->
    $scope.anchors = []
    if $scope.modes?
      $scope.form_show = {}
      for key in $scope.modes.form 
        $scope.form_show[key] = true
  
  $scope.$watch page.to_key,     scrollTo
  $scope.$watch 'mode.value',    form_show
  $scope.$watch 'event.is_news', form_show
  $scope.$watch 'event.is_news', $scope.deploy_mode_common
