(($) ->
  isMouseDown = false
  currentElement = null
  dropCallbacks = {}
  dragCallbacks = {}
  bubblings = {}
  lastMouseX = undefined
  lastMouseY = undefined
  lastElemTop = undefined
  lastElemLeft = undefined
  dragStatus = {}
  holdingHandler = false

  $.getMousePosition = (e) ->
    posx = 0
    posy = 0
    e = window.event  unless e
    if e.pageX or e.pageY
      posx = e.pageX
      posy = e.pageY
    else if e.clientX or e.clientY
      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
    x: posx
    y: posy

  $.updatePosition = (e) ->
    pos = $.getMousePosition e
    spanX = pos.x - lastMouseX
    spanY = pos.y - lastMouseY
    $(currentElement).css  "top", lastElemTop  + spanY
    $(currentElement).css "left", lastElemLeft + spanX

  $.updatePositionX = (e)->
    pos = $.getMousePosition e
    spanX = pos.x - lastMouseX
    $(currentElement).css "left", lastElemLeft + spanX

  $.updatePositionY = (e)->
    pos = $.getMousePosition e
    spanY = pos.y - lastMouseY
    $(currentElement).css  "top", lastElemTop + spanY

  $(document).mousemove (e) ->
    if isMouseDown and dragStatus[currentElement.id] isnt "false"
      dragStatus[currentElement.id](e)
      dragCallbacks[currentElement.id] e, currentElement  unless dragCallbacks[currentElement.id] is `undefined`
      false

  $(document).mouseup (e) ->
    if isMouseDown and dragStatus[currentElement.id] isnt "false"
      isMouseDown = false
      dropCallbacks[currentElement.id] e, currentElement  unless dropCallbacks[currentElement.id] is `undefined`
      false

  $.fn.ondrag = (callback) ->
    @each ->
      dragCallbacks[@id] = callback

  $.fn.ondrop = (callback) ->
    @each ->
      dropCallbacks[@id] = callback

  $.fn.dragOff = ->
    @each ->
      dragStatus[@id] = "off"

  $.fn.dragOn = ->
    @each ->
      dragStatus[@id] = $.updatePosition
  $.fn.dragOnY = ->
    @each ->
      dragStatus[@id] = $.updatePositionY

  $.fn.setHandler = (handlerId) ->
    @each ->
      draggable = @
      bubblings[@id] = true
      $(draggable).css "cursor", ""
      dragStatus[draggable.id] = "handler"
      $("#" + handlerId).css "cursor", "move"
      $("#" + handlerId).mousedown (e) ->
        holdingHandler = true
        $(draggable).trigger "mousedown", e

      $("#" + handlerId).mouseup (e) ->
        holdingHandler = false

  $.fn.easydrag = (allowBubbling) ->
    @each ->
      @id = "easydrag" + (new Date().getTime())  if `undefined` is @id or not @id.length
      bubblings[@id] = (if allowBubbling then true else false)
      $(@).css "cursor", "move"
      $(@).mousedown (e) ->
        return bubblings[@id]  if (dragStatus[@id] is "off") or (dragStatus[@id] is "handler" and not holdingHandler)
        $(@).css "position", "absolute"
        $(@).to_z_front()
        isMouseDown = true
        currentElement = @
        pos = $.getMousePosition(e)
        lastMouseX = pos.x
        lastMouseY = pos.y
        lastElemTop = @offsetTop
        lastElemLeft = @offsetLeft

        dragStatus[@id](e)
        bubblings[@id]

  $.fn.to_z_front = ->
    order = new Date().getTime()
    $(@).css "z-index", order
    order

) jQuery
