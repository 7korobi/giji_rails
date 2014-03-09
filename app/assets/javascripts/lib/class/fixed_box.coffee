class FixedBox
  @list = {}

  constructor: (dx, dy, fixed_box)->
    @dx = dx
    @dy = dy
    @box = fixed_box
    
    if @box
      @box.css
        left: 0
        top:  0
      win.on_resize(=> @resize())
      win.on_scroll(=> @scroll())

  resize: ()->
    if @box && head.browser.power != "simple"
      width  = win.width  - @box.width()
      height = win.height - @box.height()

      @left = @dx + width if @dx < 0
      @left = @dx         if   0 < @dx
      @top = @dy + height if @dy < 0
      @top = @dy          if   0 < @dy

      if 1.5 < win.zoom

        @box.css
          display: "none"
      else
        @box.css
          display: ""
    else
      @box.css
        display: "none"

  scroll: ()->
    win.left = window.pageXOffset
    win.top  = window.pageYOffset

    win.left = win.max.left if win.max.left < win.left
    win.top  = win.max.top  if win.max.top  < win.top
    win.left = 0            if                win.left  < 0
    win.top  = 0            if                win.top   < 0

    if @box && head.browser.power != "simple"
      @box.to_z_front()

      if 0 == @dx
        @box.css
          position: "fixed"
          left: ""
          width: @box.parent().width() 
      else
        @box.css
          position: "fixed"

      left = @left + win.left
      top  = @top
      @translate(left, top)
    else
      @box.css
        display: "none"

  translate: (left, top)->
    if head.csstransitions
      transform  = "translate(#{left}px, #{top}px)"
      if head.browser.webkit
        @box.css "-webkit-transform",  transform

      if head.browser.mozilla
        @box.css "-moz-transform",  transform

      if head.browser.ie
        @box.css "-ms-transform",  transform

      if head.browser.opera
        @box.css "-o-transform",  transform

      @box.css "transform",  transform

    else
      @box.animate
        left: left + "px"
        top:  top  + "px"
      ,
        duration: 'fast'
        easing: 'swing'
        queue: false

FixedBox.push = ($, dx, dy, key)->
  FixedBox.list[key] or= new FixedBox dx, dy, $(key)
