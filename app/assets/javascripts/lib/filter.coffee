
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
    mode_current = 'talk_all'
    unless $scope.event.is_news
      mode_current = 'talk_open'

    is_mob_open = false
    if $scope.story?
      is_mob_open = true if 'alive' == $scope.story.type.mob
      is_mob_open = true if $scope.story.turn == 0
      is_mob_open = true if $scope.story.is_epilogue

    if is_mob_open
      talk_news_regexp = /^[qcaAmSIV][SX]/
      talk_open_regexp = /^[qcaAmSIV][^M]/
      memo_open_regexp = /^([qcaAmSIMV][MX])|([AMam]S)/
    else
      talk_news_regexp = /^[qcaAmSI][SX]/
      talk_open_regexp = /^[qcaAmSI][^M]/
      memo_open_regexp = /^([qcaAmSIM][MX])|([AMam]S)/

    mode_filters =
      memo_hist_all:  /^(.M)|([AMam]S)/
      memo_hist: memo_open_regexp
      memo_all:  /^(.M)|([AMam]S)/
      memo_open: memo_open_regexp
      talk_all:   /^.[^M]/
      talk_think: /^[qcaAmSIiTVG][^M]/
      talk_clan:  /^[qcaAmSIi\-WPX][^M]/
      talk_open:   talk_open_regexp
      talk_newest: talk_news_regexp

    mode_params = GIJI.modes.groupBy('val')

    Navi.push $scope, 'face_only'
      options:
        current: ""
        location: 'hash'
        is_cookie: false

    $scope.face_only.watch.push (face_id)->
      if face_id
        $scope.face.hide = $scope.face.all.subtract [face_id]
        if $scope.potofs?
          for potof in $scope.potofs
              potof.is_hide = face_id != potof.face_id

    Navi.push $scope, 'search'
      options:
        current: ""
        location: 'hash'
        is_cookie: false

    Navi.push $scope, 'mode'
      options:
        current: mode_current
        location: 'hash'
        is_cookie: false
      select: GIJI.modes

    page.filter 'mode.value', (key, list)->
      $scope.form_show = $scope.mode.choice().form

      filter = mode_filters[key]
      list = list.filter (o)->
        o.logid.match filter
      if mode_params[key][0].newest
        result = []
        order   = (o)-> [GIJI.message.order[o.mestype] || 8, o.date || (new Date)]
        list.groupBy($scope.potof_key).keys (key, list)->
          result.push list.last()
        result.sortBy(order)
      else
        list

    page.filter 'face.hide', (hide_ids, list)->
      faces = $scope.face.all.subtract $scope.face.hide
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

  page.refresh = ()->
    $('div.popover').remove()
    if $scope.event?.is_news && $scope.page.item_last?
      target = $("a[name=#{$scope.page.item_last.logid}]")

    if target?.offset()?
    else
      target = $(".inframe")

    $(window).scrollTop  target.offset().top - 20
    $scope.boot()

