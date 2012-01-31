class Info
  constructor: ->
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

      ###
      changeFilterCheckBoxPlList 0
      changeFilterCheckBoxTypes 0
      ###
      @sayfilter.tabs()

  resize: =>
    # @sayfilter.height Client.height()
    width = Client.width()
    small = 122 + 80
    fold = false

    switch Client.navi.mode
      when 480
        if      small < width - 462
          info_width  = width - 462
        else if small < width - 350
          info_width  = width - 350
          fold = true
        else
          info_width  = width
      when 800
        gap = 10
        if   gap < width - 770
          info_width  = 190 + (width - 770)/2
        else
          info_width  = 190
          fold = true

    @sayfilter.width info_width
    Client.navi.resize(fold)

  scroll: =>
    @sayfilter[0].style.top = "#{$(window).scrollTop()}px"
    @sayfilter[0].style.left = 0
