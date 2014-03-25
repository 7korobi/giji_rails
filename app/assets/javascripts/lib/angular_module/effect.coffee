angular.module("giji").directive "adjust", ($compile, $timeout)->
  win.info = {}
  action_queue = []
  resize_page = ($scope)->
    do_resize = ->
      return unless $scope.navi? && $scope.styles?.width?

      width = win.width
      height = win.height

      msg_width = OPTION.css.h1.widths[$scope.styles.width]
      win.info.width =
        switch $scope.styles.width
          when "center-msg", "large-msg"
            (width - msg_width)/2
          else
            width - msg_width

      buttons = FixedBox.list["#buttons"]
      if buttons?
        win.info.width_max = buttons.left - 8
      else
        win.info.width_max = width - 40

    action_queue.push do_resize

  effect = ($scope, adjust, element)->
    do_resize = ->
      return unless $scope.navi? && $scope.styles?.width?

      switch adjust
        when 'left'
          small = 185
        when 'full'
          small = win.info.width_max

      if small < win.info.width
        info_width = win.info.width
      else
        info_width = small

      element.css
        width: info_width

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
      return unless $scope.navi? && $scope.styles?.width?

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
