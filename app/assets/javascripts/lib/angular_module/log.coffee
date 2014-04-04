draw_templates = ($compile, $scope, elm, attr)->
  oldDOM = elm[0]

  if oldDOM.insertAdjacentHTML
    addHtml = (dom, html)-> dom.insertAdjacentHTML('beforeEnd', html)
    closeHtml = (dom)->
  else
    html_cache = ""
    addHtml = (dom, html)-> html_cache += html
    closeHtml = (dom)-> dom.replaceHTML = html_cache

   (logs)->
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


angular.module("giji").directive "stories", ($parse, $compile, $filter)->
  initialize = ($scope)->
    Routes.pager.push new PageNavi $scope, 'page',  OPTION.page.page
    StorySummary.navi $scope
    Browser.routes -> Routes.stories

  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    initialize $scope
    initialize = ->

    draw =
      draw_templates $compile, $scope, elm,
        target: "story"
        template: (log)->
          log.__proto__ = StorySummary.prototype
          if $scope.stories_is_small
            HOGAN["hogan/sow/story_summary_small"]
          else
            HOGAN["hogan/sow/story_summary"]

    bus = new Bus
    bus.on_start -> Routes.stories.filter.log
    bus.on_end draw
    $scope.$watchCollection attr.from, bus.watch_angular()


angular.module("giji").directive "logs", ($parse, $compile, $filter)->
  initialize = ($scope, $filter, from)->
    if from
      from_value = $parse from
      $scope.page.last_updated_at = ()->
        last = _.last from_value $scope
        if last?
          last.updated_at
      Browser.routes ->
        return Routes.unread if location.hash.match /info_at=/
        return Routes.search if location.hash.match /search=/
        return Routes.ankers if location.hash.match /ankers=/
        return Routes.event

    else
      Browser.routes -> Routes.search

    $scope.timer ||= new Timer (log, now)->
      log.init_timer $scope, now
      log_elm = $("." + log._id)
      log_elm.find("[cancel_btn]").html log.cancel_btn
      log_elm.find("[time]"      ).html log.time

  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    initialize $scope, $filter, attr.from
    initialize = ->

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

    if attr.from
      $scope.deploy_mode_common()
      bus = new Bus
      bus.on_start -> Browser.current.filter.log
      $scope.$watchCollection attr.from, bus.watch_angular()

    else
      bus = new Bus
      bus.on_start -> Routes.search.filter.log
      $scope.$watchCollection attr.logs, bus.watch_angular()

    bus.on_end draw

angular.module("giji").directive "log", ($parse, $compile, $sce)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    log = $scope.$eval attr.log
    log.__proto__ = Message.prototype
    log.init_view $scope

    GIJI.template $scope, elm, log.template


angular.module("giji").directive "drag", ->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    $scope.$watch attr.drag, (log) ->
      elm.css
        "z-index": log.z
        "top":     log.top


