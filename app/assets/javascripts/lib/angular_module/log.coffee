scrollTo = (newVal, oldVal, $scope)->
  $scope.anchors = []

  if $scope.event?
    if $scope.event.is_news
      for mode, is_show of $scope.form_show
        for form_text in $scope.form.texts
          if is_show and mode == form_text.jst
            return
  $scope.go.messages()

filters_common = ($scope)->
  PageNavi.push $scope, 'page',  OPTION.page.page

filters_common_last = ($scope, $filter)->
  page = $scope.page
  filter_filter = $filter 'filter'

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

  page.filter 'search.value', (search, list)->
    $scope.search_input = search
    filter_filter list, search

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

  $scope.$watch "page.value",      scrollTo
  $scope.$watch "search.value",    scrollTo
  $scope.$watch "msg_style.value", scrollTo


filters_if_event = ($scope, target, from)->
  page = $scope.page

  page.filter_by from
  page.filter_to target
  page.filter 'event.turn'
  page.filter 'event.is_news'
  page.filter 'page.last_updated_at()'

  $scope.deploy_mode_common()

  mode_params = _.groupBy GIJI.modes, 'val'

  page.filter 'mode.value', (key, list)->
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
      _.some faces, (face)-> face == Potof.key(o)

  $scope.$watch 'event.is_news', $scope.deploy_mode_common
  $scope.$watch "event.turn",    scrollTo
  $scope.$watch "event.is_news", scrollTo
  $scope.$watch "mode.value",    scrollTo


angular.module("giji").directive "stories", ($parse, $compile)->
  initialize = ($scope)->
    filters_common $scope
    StorySummary.navi $scope
    filters_if_stories $scope


  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    initialize $scope
    initialize = ->

    $scope.$watchCollection attr.stories, (oldVal, stories)->
      elm.html("")
      return unless stories
      for log in logs
        template = HOGAN["hogan/" + log.template]
        unless template
          console.log "can't show log!"
          console.log log
          continue
        data.message = log
        elm.append template.render data
      for angular_elm in elm.find("[template]")
        $compile(angular_elm)($scope)


angular.module("giji").directive "logs", ($parse, $compile, $filter)->
  initialize = ($scope, $filter, target, from)->
    filters_common $scope
    if from
      Message.navi $scope
      filters_if_event $scope, target, from
    filters_common_last $scope, $filter

    from_value = $parse from
    $scope.page.last_updated_at = ()->
      last = _.last from_value $scope
      if last?
        last.updated_at

    $scope.page.start()

  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    initialize $scope, $filter, attr.logs, attr.from
    initialize = ->

    $scope.$watchCollection attr.logs, (oldVal, logs)->
      elm.html("")
      return unless logs

      now = new Date
      data =
        story: $scope.story
        event: $scope.event
      for log in logs
        log.__proto__ = Message.prototype
        log.init_view($scope, now)

        template = HOGAN["hogan/" + log.template]
        unless template
          console.log "can't show log!"
          console.log log
          continue
        data.message = log
        elm.append template.render data
      for angular_elm in elm.find("[template]")
        $compile(angular_elm)($scope)


angular.module("giji").directive "log", ($parse, $compile, $sce)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    log = $scope.$eval attr.log
    log.__proto__ = Message.prototype
    log.init_view($scope)

    GIJI.template $scope, elm, log.template

angular.module("giji").directive "drag", ->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    $scope.$watch attr.drag, (log) ->
      elm.css
        "z-index": log.z
        "top":     log.top


