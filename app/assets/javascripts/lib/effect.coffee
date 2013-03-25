angular.module("giji.directives").directive "accordion", [->
  restrict: "C"
  link: ($scope, elm, attr, ctrl)->
    elm.find("dd").hide()
    elm.on 'click', 'dt', ->
      $(this).parents('dl').find("dd").hide()
      $(this).next().show 'fast'
]

EFFECT = ($scope)->
  win.zoom_start = ->
    $scope.navi.value = []
    $scope.$apply()

  $(window).resize ->
    return unless $scope.navi? && $scope.width?
    height = win.height
    width  = win.width

    content  = "contentframe"
    outframe = "outframe"

    calculate = (key, show)->
      return unless show
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

      $("#sayfilter #navi_#{key}").css
        width: info_width

    $scope.navi.show.keys calculate
    calculate "head", true

    $("#contentframe")[0].className = content
    $("#outframe")[0].className = outframe
