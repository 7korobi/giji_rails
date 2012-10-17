EFFECT = ($scope)->
  $('dl.accordion').find("dd").hide()
  $('dl.accordion').on 'click', 'dt', ->
    $(this).parents('dl').find("dd").hide()
    $(this).next().show 'fast'

  $scope.adjust = ->
    popover = $('a[title]')
    popover.each (idx, dom)->
      $(dom).attr "data-content", $(dom).attr("title")
      $(dom).attr "title", ''
      $(dom).attr "rel", 'popover'
    $('[rel="popover"]').popover()
    $("#outframe").height $("#contentframe").height()

  $(window).scroll ->
    hide = ->
      $scope.navi.value = 'blank'
      $scope.$apply()

    if $scope.is_shy
      hide.delay(1)

  $(window).resize ->
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
          $scope.is_shy = false
        else
          info_width  = width
          $scope.is_shy = true
        content  = "contentframe"
        outframe = "outframe"

      when 800
        small    or= (  798 - 770)/2 + 189
        info_left  = (width - 770)/2 + 189
        if     small  < info_left
          info_width  = info_left
          $scope.is_shy = false
          content  = "contentframe_navileft"
          outframe = "outframe_navimode"
        else
          info_width  = width
          $scope.is_shy = true
          content  = "contentframe"
          outframe = "outframe"

    $("#contentframe")[0].className = content
    $("#outframe")[0].className = outframe
    $("#sayfilter").css
      width: info_width
