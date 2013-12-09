class FixedBox
  @list = {}

  constructor: (dx, dy, fixed_box, force_zoom)->
    @dx = dx
    @dy = dy
    @box = fixed_box
    @force_zoom = force_zoom

    if @box
      @box.css
        left: 0
        top:  0
      win.on_resize(=> @scroll())
      win.on_scroll(=> @scroll())

  scroll: ()->
    width  = win.width  - @box.width()
    height = win.height - @box.height()

    @left = @dx + width if @dx < 0
    @left = @dx         if   0 < @dx
    @top = @dy + height if @dy < 0
    @top = @dy          if   0 < @dy

    win.left = window.pageXOffset
    win.top  = window.pageYOffset

    win.left = win.max.left if win.max.left < win.left
    win.top  = win.max.top  if win.max.top  < win.top
    win.left = 0            if                win.left  < 0
    win.top  = 0            if                win.top   < 0

    @box.to_z_front()

    if 1 < win.zoom  or  head.browser.android  or  @force_zoom
      @box.css
        position: "absolute"

      left = @left + win.left
      top  = @top  + win.top
      @translate(left, top)
    else
      @box.css
        position: "fixed"

      left = @left + win.left
      top  = @top
      @translate(left, top)

  translate: (left, top)->
    if head.csstransitions
      transition = "all 250ms ease"
      transform  = "translate(#{left}px, #{top}px)"
      if head.browser.webkit
        @box.css "-webkit-transition", transition
        @box.css "-webkit-transform",  transform

      if head.browser.mozilla
        @box.css "-moz-transition", transition
        @box.css "-moz-transform",  transform

      if head.browser.ie
        @box.css "-ms-transition", transition
        @box.css "-ms-transform",  transform

      if head.browser.opera
        @box.css "-o-transition", transition
        @box.css "-o-transform",  transform

      @box.css "transition", transition
      @box.css "transform",  transform

    else
      @box.animate
        left: left + "px"
        top:  top  + "px"
      ,
        duration: 'fast'
        easing: 'swing'
        queue: false

FixedBox.push = ($, dx, dy, key, force_zoom)->
  FixedBox.list[key] or= new FixedBox dx, dy, $(key), force_zoom
