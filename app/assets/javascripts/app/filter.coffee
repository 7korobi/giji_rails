
FILTER = ($scope)->
  has_messages =  $scope.event?.messages?  ||  $scope.messages_raw?
  return unless has_messages

  anime = ()->
    if ! head.browser.ie && $scope.event?.is_news && $scope.page.item_last?
      target = $("a[name=#{$scope.page.item_last.logid}]")

    if target?.offset()?
    else
      target = $(".inframe")

    do_adjust = -> $scope.adjust()
    do_scroll = -> $(window).scrollTop  target.offset().top - 20
    do_adjust.delay 100
    do_scroll.delay 300
    $(window).resize()

  $ ->
    anime()

  Navi.push $scope, 'row'
    options:
      current: 50
      is_cookie: true
      current_type: Number
    button: GIJI.rows

  Navi.push $scope, 'order'
    options:
      current: 'asc'
      is_cookie: true
    button: GIJI.orders

  PageNavi.push $scope, 'page'
    options:
      current: 1
      is_cookie: false

  page = $scope.page
  page.filter_to 'messages'

  if $scope.messages_raw?
    page.filter_by 'messages_raw'

  if $scope.event?.messages?
    page.filter_by 'event.messages'
    page.filter 'event.is_news'
    mode_current = 'open'
    mode_current = 'all' if $scope.event.is_news

    mode_filters =
      memo: /^(.M)|([AM]S)/
      all:  /^.[^M]/
      mob:  /^[qcAmSIiVG][^M]/
      clan: /^[qcAmSIiWPX][^M]/
      open: /^[qcAmSI][^M]/

    Navi.push $scope, 'mode'
      options:
        on: 'hash'
        current: mode_current
        is_cookie: false
      button: GIJI.modes

    page.filter 'mode.value', (key, list)->
      filter = mode_filters[key]
      list.filter (o)->
        o.logid.match filter

    page.filter 'face_id.hide', (face_ids, list)->
      face_ids = $scope.face_id.all.subtract $scope.face_id.hide
      list.filter (o)->
        face_ids.some o.face_id

  page.paginate 'row.value', (page_per, list)->
    if $scope.event?.is_news
      to   = list.length
      from = to - page_per
      from = 0 if from < 0
      $scope.event.is_rowover = (0 < from)
      $scope.page.value = $scope.page.length

    else
      $scope.page.value = $scope.page.length if $scope.page.value > $scope.page.length
      page_no = $scope.page.value
      to   =  page_no      * page_per - 1
      from = (page_no - 1) * page_per

    list.to(to).from(from)

  page.filter 'order.value', (key, list)->
    $scope.anchors = []
    $('div.popover').remove()
    anime(100)

    if "desc" == key
      list.reverse()
    else
      list

  ###
  mode default
    open => pastlog
    all  => preview, news

  gon.event.messages ->  $scope.page.filters[0].value in $scope.event.messages
  $scope.face_ids    ->  $scope.page.filters[1].value in $scope.~~~~~~~~~~
  $scope.mode.value  ->  $scope.page.filters[2].value in $scope.page.items
    $scope.page.items = $scope.page.filters[2]
  $scope.page.value  ->  $scope.page.filters[3].value =
    $scope.messages
    $scope.anchors
    (HTML) | filter
  ###
