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

    FixedBox.list.keys (key, box)->
      box.scroll()

  $(window).scroll ->
    hide = ->
      if $scope.is_shy
        $scope.navi.value = 'blank'
        $scope.$apply()
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
      when 'link'
        small = 200
        scan_width = (idx, ele)->
          count = 0
          $(ele).find("> *").each (idx, ele)-> count += $(ele).width()
          small = count + 30 if small < count + 30

        $('.insayfilter [template="navi/page_filter"]').each scan_width
        $('.insayfilter [template="navi/paginate"]').each    scan_width
        small = null

    switch $scope.width.value
      when 480
        small or= 222
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
        small or= 270
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
