LOG_CUTTER = ($scope, $filter)->
  do_scroll_to = ->
    if $scope.event?
      if $scope.event.is_news
        for mode, is_show of $scope.form_show
          for form_text in $scope.form.texts
            if is_show and mode == form_text.jst
              return
    $scope.go.messages()

  scrollTo = _.debounce do_scroll_to,
    leading: false
    trailing: true

  $scope.$watch "search.value",    scrollTo
  $scope.$watch "page.value",      scrollTo
  $scope.$watch "msg_style.value", scrollTo
  $scope.$watch "mode.value",      scrollTo
  $scope.$watch "event.turn",      scrollTo
  $scope.$watch "event.is_news",   scrollTo


  # word search section
  $scope.$watch 'search.value', (search)->
    $scope.search_input = search
    if search
      Browser.routes -> Routes.search
    else
      Browser.routes -> Routes.event
      Bus.refresh Routes.current.filter.log
  Routes.search.filter.log.before $scope, 'search.value', (search, list)->
    $filter('filter')(list, search)
  Routes.search.push new Navi $scope, 'search',
    options:
      current: ""
      location: 'hash'
      is_cookie: false

  # ankers section
  Routes.ankers.filter.log.before $scope, 'ankers.value', (ankers, list)->
    for anker in ankers
      anker
  Routes.ankers.push new ArrayNavi $scope, 'ankers',
    options:
      current: ""
      location: 'hash'
      is_cookie: false


  # turn section
  Routes.turn.filter.log.set $scope, 'event.turn'

  # news section
  Routes.news.filter.log.set $scope, 'event.is_news'
  Routes.news.filter.log.after $scope, 'msg_styles.row', (row, list)->
    page_per = Number(row)
    to   = list.length
    from = to - page_per
    from = 0 if from < 0

    $scope.page.visible = false
    $scope.event.is_rowover = (0 < from)
    list.slice from, to



  # unread section
  Routes.unread.filter.log.before $scope, 'info_at.value', (now, list)->
    $scope.event.unread_count = 0
    if now && $scope.event?
      _.filter list, (o)->
        if now < o.updated_at
          ++$scope.event.unread_count unless o.logid == "IX99999"
          return true
        return o.logid.match(/vilinfo|potofs|status/)
    else
      list
  Routes.unread.push new Navi $scope, 'info_at',
    options:
      current: 0
      current_type: Number
      location: 'hash'
      is_cookie: false


  # pager section
  Routes.pager.filter.log.set $scope, 'page.last_updated_at()'
  Routes.pager.filter.log.after $scope, 'msg_styles.row', (row, list)->
    page_per = Number(row)
    $scope.page.paginate page_per, list

    page_no = $scope.page.value
    to   =  page_no      * page_per + OPTION.page.pile
    from = (page_no - 1) * page_per
    list.slice from, to
  Routes.pager.filter.log.after $scope, 'msg_styles.order', (key, list)->
    order =
      if "desc" == key
        (o)-> - o.updated_at
      else
        (o)-> + o.updated_at
    _.sortBy list, order

  if $scope.pages?
    Routes.pager.push new PageNavi $scope, 'page', OPTION.page.page_search
    $scope.page.length = gon.pages.length
  else
    Routes.pager.push new PageNavi $scope, 'page', OPTION.page.page


  # potofs section
  Routes.potofs.filter.log.before $scope, 'hide_potofs.value', (hide_faces, list)->
    if _.include hide_faces, 'others'
      hide_faces = hide_faces.concat $scope.face.others
    faces = _.difference $scope.face.all, hide_faces
    _.filter list, (o)->
      _.some faces, (face)-> face == Potof.key(o)

  Routes.potofs.push new ArrayNavi $scope, 'hide_potofs',
    options:
      class_select: 'inverse'
      class_default: 'plane'
      current: []
      location: 'hash'
      is_cookie: true
    button: potofs_hash


  # event section
  Message.navi $scope
  Routes.event.filter.log.before $scope, 'mode.value', (key, list)->
    is_mob_open = $scope.story?.is_mob_open()

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
      groups = _.groupBy list, (o)-> "#{o.mestype}-#{Potof.key(o)}"
      for key, sublist of groups
        result.push _.last sublist
      result
    else
      list
  $scope.$watch 'event.is_news', $scope.deploy_mode_common


