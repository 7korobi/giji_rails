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
    win.zoom_start = ->
      $scope.navi.value = []
      $scope.$apply()

    $(window).resize ->
      return unless $scope.navi? && $scope.width?
      height = win.height
      width  = win.width

      content  = "contentframe"
      outframe = "outframe"

      calculate = (key, params)->
        if $scope.potofs? && key == 'info'
          if $scope.secret_is_open
            if $scope.potofs_is_small
              small = 250
            else
              small = 340
          else
              small = 200

        switch $scope.width.value
          when 480
            small   or=   638 - 462
            info_left = width - 462
            if      small < info_left
              info_width  = info_left
              $scope.is_fullwidth = false
            else
              info_width = FixedBox.list["#buttons"].left - 8
              $scope.is_fullwidth = true

          when 800
            small    or= (  798 - 770)/2 + 188
            info_left  = (width - 770)/2 + 188
            if     small  < info_left
              info_width  = info_left
              $scope.is_fullwidth = false
              content  = "contentframe_navileft"
              outframe = "outframe_navimode"
            else
              info_width = FixedBox.list["#buttons"].left - 8
              $scope.is_fullwidth = true
              content  = "contentframe"
              outframe = "outframe"

        if params.show
          $("#sayfilter #navi_#{key}").css
            width: info_width
            display: ""
        else
          $("#sayfilter #navi_#{key}").css
            display: "none"

        $("#sayfilter > h4").css
          width: info_width - 8

      $scope.navi.of.keys calculate
      calculate "head", 
        show: true
      calculate "error", 
        show: true

      $("#contentframe")[0].className = content
      $("#outframe")[0].className = outframe
  navis = []

  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    elm.attr("id", "navi_#{attr.navi}")
    navis.add attr.navi

    if ! $scope.navi
      ArrayNavi.push $scope, 'navi',
        options:
          current: []
          location: 'hash'
          is_cookie: false
        button: {}
      $scope.navi.watch.push ->
        $scope.boot()
      effect($scope)

    $scope.navi.select.add
      name: attr.name
      val:  attr.navi
    $scope.navi.value = navis.clone()
]
