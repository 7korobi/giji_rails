angular.module("giji.directives").directive "accordion", [->
  restrict: "C"
  link: ($scope, elm, attr, ctrl)->
    elm.find("dd").hide()
    elm.find("dt").append('<div style="line-height:0; text-align:right; margin:-0.5ex 0 0.5ex 0;">↨</div>')
    elm.on 'click', 'dt', ->
      $(this).parents('dl').find("dd").hide()
      $(this).next().show 'fast'
]

angular.module("giji.directives").directive "navi", ["$compile", ($compile)->
  effect = ($scope)->
    resize_naviitems = ->
      return unless $scope.navi? && $scope.width?
      width = win.width
      height = win.height
      content = "contentframe"
      outframe = "outframe"
      switch $scope.width.value
        when 800
          lim_left   = (  778 - 770)/2 + 187
          info_left  = (width - 770)/2 + 187 - 60
          if  lim_left < info_left
            content = "contentframe_navileft"
            outframe = "outframe_navimode"
            info_left = (width - 770)/2 + 187 - 10
          else
            content = "contentframe"
            outframe = "outframe"
            info_left = (width - 580)/2
        when 480
          info_left = width - 476
      info_right = width - info_left - 110


      calculate = (key, params)->
        element = $(".sayfilter #navi_#{key}")
        return if element.length == 0

        buttons = FixedBox.list["#buttons"]
        if buttons?
          max_width = buttons.left - 8
        else
          max_width = width - 40

        gap = 0
        if key == 'calc'
          small = info_right
        if key == 'diary'
          small = info_right

        if key == 'head'
          small = 100
        if key == 'events'
          small = 125
        if key == 'filter'
          small = 150
        if key == 'info'
          small = 185
        if key == 'switch'
          small = 185
        if key == 'link'
          small = 185
        if key == 'login'
          small = 185
        if key == 'page'
          small = max_width

        switch $scope.width.value
          when 480
            if      small < info_left
              info_width  = info_left
              params.is_fullwidth = false
            else
              info_width = small
              params.is_fullwidth = true

          when 800
            if     small  < info_left
              info_width  = info_left
              params.is_fullwidth = false
            else
              info_width = small
              params.is_fullwidth = true

        unless params.is_fullwidth
          if head.browser.mozilla
            gap = 5
          if head.browser.opera
            gap = 5
          if head.browser.ie
            gap = 5
          if head.browser.webkit && 480 == $scope.width.value
            gap = -10
        
        if params.show
          element.css
            width: info_width - gap
            display: ""
        else
          element.css
            display: "none"

      for k,v of $scope.navi.of
        calculate k, v
      for k,v of static_navis
        calculate k, v
      for k,v of extra_navis
        calculate k, $scope.navi.of[v.parent]

      $("#topviewer").css
        width: info_right
      $("#sayfilter").css
        width: info_left
      $("#contentframe")[0].className = content
      $("#outframe")[0].className = outframe

    _.delay ->
      win.on_resize resize_naviitems
    , 100
  extra_navis = {}
  static_navis = {}

  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    attr_id = "navi_#{attr.navi}"
    elm.attr("id", attr_id)

    if ! $scope.navi
      ArrayNavi.push $scope, 'navi',
        options:
          current: []
          location: 'hash'
          is_cookie: false
        button: {}
      $scope.navi.watch.push ->
        $scope.adjust()
      effect($scope)

    if attr.name?
      $scope.navi.select.push
        name: attr.name
        val:  attr.navi
    else
      static_navis[attr.navi] =
        show: true
    $scope.navi.popstate()

    if attr.child?
      for child in attr.child.split(",")
        extra_navis[child] =
          parent: attr.navi
]
