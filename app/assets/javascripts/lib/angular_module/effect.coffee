angular.module("giji").directive "navi", ($compile, $timeout)->
  effect = ($scope)->
    resize_naviitems = ->
      return unless $scope.navi? && $scope.css.width?
      width = win.width
      height = win.height
      content = "contentframe"
      outframe = "outframe"
      switch $scope.css.width.value
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

      calculate = (key, params)->
        element = params.element 
        return unless element

        in_fixed_box = $(".sayfilter").find(element).length

        if params.show
          style = 
            display: ""
        else
          style =
            display: "none"

        if in_fixed_box
          buttons = FixedBox.list["#buttons"]
          if buttons?
            max_width = buttons.left - 8
          else
            max_width = width - 40

          gap = 0
          switch key
            when 'page'
              small = max_width
            else
              small = 185

          switch $scope.css.width.value
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
            if head.browser.webkit && 480 == $scope.css.width.value
              gap = -10
          
          style.width = info_width - gap

        element.css style

      for k,v of $scope.navi.of
        calculate k, v
      for k,v of static_navis
        calculate k, v

      $("#sayfilter").css
        width: info_left
      $("#contentframe")[0]?.className = content
      $("#outframe")[0]?.className = outframe

    $timeout ->
      win.on_resize resize_naviitems
    , 100
  static_navis = {}

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
      effect($scope)

    if attr.name?
      $scope.navi.select.push 
        name: attr.name
        val:  attr.navi
        element: elm

    else
      static_navis[attr.navi] =
        show: true
        element: elm
    $scope.navi.popstate()
