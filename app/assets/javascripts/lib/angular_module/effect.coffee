angular.module("giji").directive "adjust", ($compile, $timeout)->
  win.info = {}
  action_queue = []
  resize_page = ($scope)->
    do_resize = ->
      return unless $scope.navi? && $scope.css.width?

      width = win.width
      height = win.height
      content = "contentframe"
      outframe = "outframe"

      switch $scope.css.width.value
        when 800
          lim_left   = (  778 - 770)/2 + 187
          win.info.width  = (width - 770)/2 + 187 - 60
          if  lim_left < win.info.width
            content = "contentframe_navileft"
            outframe = "outframe_navimode"
            win.info.width = (width - 770)/2 + 187 - 10
          else
            content = "contentframe"
            outframe = "outframe"
            win.info.width = (width - 580)/2
        when 480
          win.info.width = width - 476

      buttons = FixedBox.list["#buttons"]
      if buttons?
        win.info.width_max = buttons.left - 8
      else
        win.info.width_max = width - 40

      $("#topframe")[0]?.className     = content
      $("#contentframe")[0]?.className = content
      $("#outframe")[0]?.className = outframe

    action_queue.push do_resize

  effect = ($scope, adjust, element)->
    do_resize = ->
      return unless $scope.navi? && $scope.css.width?

      switch adjust
        when 'left'
          small = 185
        when 'full'
          small = win.info.width_max

      if small < win.info.width
        info_width = win.info.width
      else
        info_width = small

      gap = 0
      if head.browser.mozilla
        gap = 5
      if head.browser.opera
        gap = 5
      if head.browser.ie
        gap = 5
      if head.browser.webkit && 480 == $scope.css.width.value
        gap = -10

      element.css
        width: info_width - gap

    action_queue.push do_resize

  $timeout ->
    win.on_resize ->
      for action in action_queue
        action()
  , 100

  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    resize_page($scope)
    resize_page = ->
    effect $scope, attr.adjust, elm

angular.module("giji").directive "navi", ($compile, $timeout)->
  effect = ($scope, params)->
    do_resize = ->
      return unless $scope.navi? && $scope.css.width?

      if params.show
        params.element.css
          display: ""
      else
        params.element.css
          display: "none"

    $timeout ->
      win.on_resize do_resize
    , 100 
   
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    attr_id = "navi_#{attr.navi}"
    elm.attr("id", attr_id)

    if ! $scope.navi?.select?
      ArrayNavi.push $scope, 'navi',
        options:
          current: []
          location: 'hash'
          is_cookie: false
        button: {}
      $scope.navi.watch.push ->
        $scope.adjust()

    if attr.name?
      params =
        name: attr.name
        val:  attr.navi
        element: elm
      effect($scope, params)
      $scope.navi.select.push params
    $scope.navi.popstate()
