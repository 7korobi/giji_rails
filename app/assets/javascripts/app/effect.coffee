angular.module("giji.directives").directive "accordion", [->
  restrict: "C"
  link: ($scope, elm, attr, ctrl)->
    elm.find("dd").hide()
    elm.on 'click', 'dt', ->
      $(this).parents('dl').find("dd").hide()
      $(this).next().show 'fast'
]

EFFECT = ($scope)->
  $(window).resize ->
    return unless $scope.navi? && $scope.width?
    height = win.height
    width  = win.width

    switch $scope.navi.value
      when 'info'
        if $scope.potofs?
          if $scope.potofs_is_small
            small = 300
          else
            small = 460

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
        content  = "contentframe"
        outframe = "outframe"

      when 800
        small    or= (  798 - 770)/2 + 189
        info_left  = (width - 770)/2 + 189
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

    $("#contentframe")[0].className = content
    $("#outframe")[0].className = outframe
    $("#sayfilter").css
      width: info_width
