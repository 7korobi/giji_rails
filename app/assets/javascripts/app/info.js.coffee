class Info
  constructor: (base)->
    base.info = @
    @outframe = Client.outframe
    @contentframe = $('#contentframe')
    @sayfilter = $("#sayfilter")
    # @notepad = $("#notepad")
    # @notepad.after "<div id=\"notepad_after\" style=\"height:55px\"></div>"

    $(window).scroll @scroll
    $(window).resize @resize    
  
  float: =>
    unless cookie.layoutfilter > 0
      @outframe[0].className = "outframe_navimode"
      @contentframe[0].className = "contentframe_navileft"

      @sayfilter[0].className = "sayfilterleft"
      @sayfilter[0].style.position = "absolute"
      @sayfilter[0].style.height = "auto"

  resize: =>
    width = Client.width()
    fold = false

    $('.drag').css(left: @contentframe.offset().left)
    @sayfilter.to_z_front()

    switch Client.css.width
      when 480
        small = 122 + 80 + 20
        if      small < width - 462
          info_width  = width - 462
        else if small < width - 462 + 110
          info_width  = width - 462 + 110
          fold = 110
        else
          info_width  = width
      when 800
        if       200  <  width - 770
          info_width  = (width - 770)/2 + 190
        else if  -10  <  width - 770
          info_width  = (width - 770)/2 + 190 + 116
          fold = 120
        else
          info_width  = width

    @sayfilter.width info_width
    Client.navi.resize(fold)

  scroll: =>
    @sayfilter[0].style.top = "#{$(window).scrollTop()}px"
    @sayfilter[0].style.left = 0
