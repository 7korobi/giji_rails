FILTER = ($scope, $filter, $timeout)->
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
      last = _.last($scope.event.messages)
      if last?
        last.updated_at
    page.filter_by 'event.messages'
    page.filter_to 'messages'
    page.filter 'event.turn'
    page.filter 'event.is_news'
    page.filter 'page.last_updated_at()'

    $scope.deploy_mode_common()

    mode_params = _.groupBy GIJI.modes, 'val'

    page.filter 'mode.value', (key, list)->
      is_mob_open = false
      if $scope.story?
        is_mob_open = true if 'alive' == $scope.story.type.mob
        is_mob_open = true if $scope.story.turn == 0
        is_mob_open = true if $scope.story.is_epilogue

      # bdefghjklnoprstuvwxyzBCDEFHJKLNORUYZ
      mode_filters =
        info_open_last: /^([aAm].\d+)|(vilinfo)/
        info_all_open: /^(..\d+)|(vilinfo)|(potofs)|(status)/
        info_all: /^(..\d+)|(potofs)|(status)/
        memo_all:  /^.M\d+/
        memo_open: /^[qcaAmIMS][MX]\d+/
        talk_all:   /^[^S][^M]\d+/
        talk_think: /^[qcaAmIi][^M]\d+/
        talk_clan:  /^[qcaAmIi\-WPX][^M]\d+/
        talk_all_open:   /^.[^M]\d+/
        talk_think_open: /^[qcaAmIiS][^M]\d+/
        talk_clan_open:  /^[qcaAmIi\-WPXS][^M]\d+/
        talk_all_last:   /^[^S][SX]\d+/
        talk_think_last: /^[qcaAmIi][SX]\d+/
        talk_clan_last:  /^[qcaAmIi\-WPX][SX]\d+/
        talk_all_open_last:   /^.[SX]\d+/
        talk_think_open_last: /^[qcaAmIiS][SX]\d+/
        talk_clan_open_last:  /^[qcaAmIi\-WPXS][SX]\d+/
        talk_open:      /^[qcaAmIS][^M]\d+/
        talk_open_last: /^[qcaAmIS][SX]\d+/

      if is_mob_open
        open_filters =
          talk_think_open_last: /^[qcaAmIiVS][SX]\d+/
          talk_think_open: /^[qcaAmIiVS][^M]\d+/
          memo_open:      /^[qcaAmIMVS][MX]\d+/
          talk_open:      /^[qcaAmIVS][^M]\d+/
          talk_open_last: /^[qcaAmIVS][SX]\d+/
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
        groups = _.groupBy list, (o)-> "#{o.mestype}-#{$scope.potof_key(o)}"
        for key, sublist of groups
          result.push _.last sublist
        result
      else
        list

    Navi.push $scope, 'info_at',
      options:
        current: 0
        current_type: Number
        location: 'hash'
        is_cookie: false

    page.filter 'hide_potofs.value', (hide_faces, list)->
      if _.include hide_faces, 'others'
        hide_faces = hide_faces.concat $scope.face.others
      faces = _.difference $scope.face.all, hide_faces
      _.filter list, (o)->
        _.some faces, (face)-> face == $scope.potof_key(o)

  page.filter 'search.value', (search, list)->
    $scope.search_input = search
    filter_filter list, search

  page.filter 'info_at.value', (now, list)->
    $scope.event.unread_count = 0
    if now && $scope.event?
      _.filter list, (o)->
        if now < o.updated_at
          ++$scope.event.unread_count unless o.logid == "IX99999"
          return true
        return o.logid.match(/vilinfo|potofs|status/)
    else
      list

  page.paginate 'msg_styles.row', (row, list)->
    page_per = Number(row)
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

  page.filter 'msg_styles.order', (key, list)->
    order =
      if "desc" == key
        (o)-> - o.updated_at
      else
        (o)-> + o.updated_at
    _.sortBy list, order

  scrollToDo = (newVal, oldVal, three)->
    $scope.anchors = []

    if $scope.event?
      if $scope.event.is_news
        for mode, is_show of $scope.form_show
          for form_text in $scope.form.texts
            if is_show and mode == form_text.jst
              return
    $scope.go.messages()

  scrollTo = _.debounce scrollToDo, DELAY.presto,
    leading: false
    trailing: true

  form_show = ->
    $scope.anchors = []
    if $scope.modes?.form?
      $scope.form_show = {}
      for key in $scope.modes.form
        $scope.form_show[key] = true

  if $scope.event?.messages?
    $scope.$watch "event.turn",    scrollTo
    $scope.$watch "event.is_news", scrollTo
    $scope.$watch "mode.value",    scrollTo
  $scope.$watch "page.value",      scrollTo
  $scope.$watch "search.value",    scrollTo
  $scope.$watch "msg_style.value", scrollTo

  $scope.$watch 'mode.value',    form_show
  $scope.$watch 'event.is_news', form_show
  $scope.$watch 'event.is_news', $scope.deploy_mode_common

  page.start()
