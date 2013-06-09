angular.module("giji.directives").directive "accordion", [->
  restrict: "C"
  link: ($scope, elm, attr, ctrl)->
    elm.find("dd").hide()
    elm.on 'click', 'dt', ->
      $(this).parents('dl').find("dd").hide()
      $(this).next().show 'fast'
]

angular.module("giji.directives").directive "navi", ["$compile", ($compile)->
  effect = ($scope)->
    resize_naviitems = ->
      return unless $scope.navi? && $scope.width?
      height = win.height
      width  = win.width

      content  = "contentframe"
      outframe = "outframe"
      switch $scope.width.value
        when 800
          lim_left   = (  778 - 770)/2 + 188
          info_left  = (width - 770)/2 + 188
          if  lim_left < info_left
            content  = "contentframe_navileft"
            outframe = "outframe_navimode"
          else
            content  = "contentframe"
            outframe = "outframe"

      calculate = (key, params)->
        element = $(".sayfilter #navi_#{key}")
        return if element.length == 0

        buttons = FixedBox.list["#buttons"]
        if buttons?
          max_width = buttons.left - 8
        else
          max_width = width - 40

        gap = 0
        if key == 'head'
          small = 100
        if key == 'calc'
          small = 100
        if key == 'diary'
          small = 100
        if key == 'filter'
          small = 150
        if key == 'link'
          small = 185
        if key == 'info'
          small = 185
        if key == 'switch'
          small = 185
        if key == 'page'
          small = 450

        switch $scope.width.value
          when 480
            small   or=   638 - 472
            info_left = width - 472
            if      small < info_left
              info_width  = info_left
              params.is_fullwidth = false
            else
              info_width = small
              params.is_fullwidth = true

          when 800
            small    or= (  798 - 770)/2 + 188
            info_left  = (width - 770)/2 + 188
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

      $scope.navi.of.keys calculate
      static_navis.keys   calculate
      extra_navis.keys (k,v)->
        calculate(k, $scope.navi.of[v.parent])

      $("#contentframe")[0].className = content
      $("#outframe")[0].className = outframe

    (->
      win.on_scroll resize_naviitems
      win.on_resize resize_naviitems
    ).delay 100
  extra_navis = {}
  static_navis = 
    head:
      show: true
    error:
      show: true

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

    $scope.navi.select.add
      name: attr.name
      val:  attr.navi
    if ! CGI? 
      $scope.navi.params.current.add attr.navi
    $scope.navi.popstate()

    if attr.child?
      extra_navis[attr.child] =
        parent: attr.navi
]
