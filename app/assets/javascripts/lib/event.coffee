if navigator.userAgent.toLowerCase().indexOf('android') != -1
  head.browser?.android = true
head.useragent = navigator.userAgent


win =
  top:    0
  left:   0
  width:  0
  height: 0
  zoom:   0
  accel:   0
  gravity: 0
  rotate:  0
  max:
    top:  0
    left: 0
  _zoom: 0

  refresh: ()->
    win.height = window.innerHeight || $(window).height()
    win.width = window.innerWidth || $(window).width()

    base_width = document.body.clientWidth || win.width
    win.zoom = base_width / win.width

    $("#outframe").height $("#contentframe").height() + win.height / 2
    win.max =
      top:  $('body').height() - win.height
      left: $('body').width()  - win.width

    win.zoom_start() if win.zoom != 1 && win._zoom == 1
    win.zoom_end()   if win.zoom == 1 && win._zoom != 1
    win._zoom = win.zoom

  zoom_start: ->
  zoom_end: ->

  history: (title, href, hash)->

$(window).on 'resize', -> win.refresh()
$(window).on 'scroll', -> win.refresh()

if onorientationchange?
  $(window).on 'orientationchange', -> win.refresh()

if ontouchstart?
  $(window).on 'touchstart', ->
  $(window).on 'touchmove', ->
  $(window).on 'touchend', ->
else
  $(window).on 'mousedown', ->
  $(window).on 'mouseup', ->
  $(window).on 'mousemove', ->

$(window).on 'devicemotion', (e)->
  win.accel   = e.originalEvent.acceleration
  win.gravity = e.originalEvent.accelerationIncludingGravity
  win.rotate  = e.originalEvent.rotationRate

if history?.pushState?
  $(window).on 'popstate', (e)->
    Navi.popstate()

  win.history = (title, href, hash)->
    href || href = location.href.replace location.hash, ""
    history.replaceState null, title, href + hash
else
  win.history = (title, href, hash)->
    location.hash = hash
