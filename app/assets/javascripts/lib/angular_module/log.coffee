draw_templates = ($compile, $scope, elm, attr)->
  logs = []
  oldDOM = elm[0]

  if oldDOM.insertAdjacentHTML
    addHtml = (dom, html)-> dom.insertAdjacentHTML('beforeEnd', html)
    closeHtml = (dom)->
  else
    html_cache = ""
    addHtml = (dom, html)-> html_cache += html
    closeHtml = (dom)-> dom.replaceHTML = html_cache

  (newVal, oldVal)->
    logs = newVal || []
    now = new Date
    data = {}
    if attr.data?
      for key,val of attr.data
        data[key] = val

    newDOM = oldDOM.cloneNode(false)
    for log in logs
      template = attr.template(log, now)

      unless template
        console.log "can't show log!"
        console.log log
        continue

      data[attr.target] = log
      addHtml newDOM, template.render data
    closeHtml newDOM

    oldDOM.parentNode.replaceChild newDOM, oldDOM
    oldDOM = newDOM

    elm = $(oldDOM)
    for angular_elm in elm.find("[template]")
      $compile(angular_elm)($scope)
    attr.last() if attr.last?


filters_common_last = ($scope, $filter)->
  page = $scope.page
  filter_filter = $filter 'filter'

  Navi.push $scope, 'search',
    options:
      current: ""
      location: 'hash'
      is_cookie: false

  page.filter 'search.value', (search, list)->
    $scope.search_input = search
    filter_filter list, search

  page.paginate 'msg_styles.row', (row, list)->
    page_per = Number(row)
    if $scope.event?.is_news
      page_per = 50
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
    list = _.filter list, Lib.message_filter is_mob_open, $scope.modes.regexp, $scope.modes.view

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

  page.filter 'info_at.value', (now, list)->
    $scope.event.unread_count = 0
    if now && $scope.event?
      _.filter list, (o)->
        if now < o.updated_at
          ++$scope.event.unread_count unless o.logid == "IX99999"
          return true
        return o.updated_at < 9999
    else
      list

  $scope.$watch 'event.is_news', $scope.deploy_mode_common


angular.module("giji").directive "stories", ($parse, $compile, $filter)->
  initialize = ($scope, $filter, target, from)->
    PageNavi.push $scope, 'page',  OPTION.page.page
    $scope.page.filter_by from
    $scope.page.filter_to target
    StorySummary.navi $scope
    filters_common_last $scope, $filter
    $scope.page.start()

  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    initialize $scope, $filter, attr.stories, attr.from
    initialize = ->

    logs = []
    draw =
      draw_templates $compile, $scope, elm,
        target: "story"
        template: (log)->
          log.__proto__ = StorySummary.prototype
          if $scope.stories_is_small
            HOGAN["hogan/sow/story_summary_small"]
          else
            HOGAN["hogan/sow/story_summary"]
        last: ->
          $scope.go.top() if attr.scroll
    $scope.$watch "stories_is_small", ()->
      draw logs
    $scope.$watchCollection attr.stories, (newVal)->
      logs = newVal
      draw logs


angular.module("giji").directive "logs", ($parse, $compile, $filter)->
  initialize = ($scope, $filter, target, from)->
    PageNavi.push $scope, 'page',  OPTION.page.page
    if from
      Message.navi $scope
      filters_if_event $scope, target, from
    filters_common_last $scope, $filter
    $scope.page.filter 'msg_styles.order', (key, list)->
      order =
        if "desc" == key
          (o)-> - o.updated_at
        else
          (o)-> + o.updated_at
      _.sortBy list, order


    from_value = $parse from
    $scope.page.last_updated_at = ()->
      last = _.last from_value $scope
      if last?
        last.updated_at

    $scope.page.start()
    $scope.timer ||= new Timer (log, now)->
      log.init_timer $scope, now
      log_elm = $("." + log._id)
      log_elm.find("[cancel_btn]").html log.cancel_btn
      log_elm.find("[time]"      ).html log.time

  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    initialize $scope, $filter, attr.logs, attr.from
    initialize = ->

    scrollTo = ->
      if $scope.event?
        if $scope.event.is_news && $scope.event.is_progress
          for mode, is_show of $scope.form_show
            for form_text in $scope.form.texts
              if is_show and mode == form_text.jst
                $scope.go.form()
                return
      $scope.go.top()

    draw =
      draw_templates $compile, $scope, elm,
        data:
          story: $scope.story
          event: $scope.event
        target: "message"
        template: (log, now)->
          log.__proto__ = Message.prototype
          log.init_timer($scope, now)
          log.init_view($scope, now)
          HOGAN["hogan/" + log.template]
        last: ->
          $scope.timer.start()
          $scope.floats = []
          scrollTo() if attr.scroll && $scope.scroll
          $scope.scroll = true

    $scope.$watchCollection attr.logs, draw

angular.module("giji").directive "drag", ->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    $scope.$watch "#{attr.drag}.z",   (z)->   elm.css "z-index": z
    $scope.$watch "#{attr.drag}.top", (top)-> elm.css "top":     top
    $scope.$watch "attr.drag", (event) ->
      if event?
        elm.css
          "z-index": event.z
          "top":     event.top

