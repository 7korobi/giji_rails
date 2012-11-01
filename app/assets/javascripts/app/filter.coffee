
FILTER = ($scope, $filter)->
  has_messages =  $scope.event?.messages?  ||  $scope.messages_raw?
  return unless has_messages

  row = OPTION.page.row
  row.options.current_type = Number

  Navi.push     $scope, 'row',   row
  Navi.push     $scope, 'order', OPTION.page.order
  PageNavi.push $scope, 'page',  OPTION.page.page

  page = $scope.page
  page.filter_to 'messages'

  if $scope.messages_raw?
    page.filter_by 'messages_raw'

  if $scope.event?.messages?
    page.filter_by 'event.messages'
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
      talk_open_regexp = /^[qcaAmSIV][^M]/
      memo_open_regexp = /^([qcaAmSIVM][M])|([AMam]S)/
    else
      talk_open_regexp = /^[qcaAmSI][^M]/
      memo_open_regexp = /^([qcaAmSIM][M])|([AMam]S)/

    mode_filters =
      memo_all:  /^(.M)|([AMam]S)/
      memo_hist: memo_open_regexp
      memo_open: memo_open_regexp
      talk_all:   /^.[^M]/
      talk_think: /^[qcaAmSIiVG][^M]/
      talk_clan:  /^[qcaAmSIiWPX][^M]/
      talk_open:  talk_open_regexp

    Navi.push $scope, 'face_only'
      options:
        current: ""
        location: 'hash'
        is_cookie: false

    $scope.face_only.watch.push (face_id)->
      if face_id
        $scope.face_id.hide = $scope.face_id.all.subtract [face_id]
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
      filter = mode_filters[key]
      list = list.filter (o)->
        o.logid.match filter
      if 'memo_open' == key
        result = []
        list.groupBy('face_id').keys (key, list)->
          result.push list.last()
        result
      else
        list

    page.filter 'face_id.hide', (hide_ids, list)->
      face_ids = $scope.face_id.all.subtract $scope.face_id.hide
      list.filter (o)->
        face_ids.some o.face_id

    filter_filter = $filter 'filter'
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
      to   =  page_no      * page_per - 1
      from = (page_no - 1) * page_per

    list.to(to).from(from)

  page.filter 'order.value', (key, list)->
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

