filters_common = ($scope)->
  has_messages = false
  has_messages or= $scope.event?.messages?
  has_messages or= $scope.messages_raw?
  has_messages or= $scope.stories?
  if has_messages
    PageNavi.push $scope, 'page',  OPTION.page.page
    page = $scope.page

filters_if_event = ($scope, $filter)->



angular.module("giji").directive "stories", ($parse, $compile)->
  initialize = ($scope)->
    filters_common $scope
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


angular.module("giji").directive "logs", ($parse, $compile)->
  initialize = ($scope)->
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

    modes_apply = ->
      $scope.modes = $scope.mode.choice()
      $scope.anchors = []

      if $scope.modes.form?
        $scope.form_show = {}
        for key in $scope.modes.form
          $scope.form_show[key] = true

    modes_change = ->
      info_at = $scope.info_at
      if info_at?
        if "info" == $scope.modes.face && "all" == $scope.modes.view
          info_at.value = Number(new Date) unless info_at.value
        else
          info_at.value = ""

      switch $scope.modes.face
        when "info"
          if "all" == $scope.modes.view
            $scope.modes.last = false
          else
            $scope.modes.view = "open"
            $scope.modes.last = true
        when "memo"
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
      ]
      $scope.mode.value = mode.join("_")
      $scope.mode_select = _.filter $scope.mode.select, (o)->
        o.face == $scope.modes.face

      $scope.mode_cache[$scope.modes.face] = $scope.mode.value
      $scope.deploy_mode_common()
    modes_apply()


    if $scope.modes?
      $scope.$watch 'mode.value',   modes_apply
      $scope.$watch 'modes.open',   modes_change
      $scope.$watch 'modes.face',   modes_change
      $scope.$watch 'modes.view',   modes_change
      $scope.$watch 'modes.last',   modes_change

  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    initialize $scope
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


