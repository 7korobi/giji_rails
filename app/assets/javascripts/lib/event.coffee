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

  on_scroll: (cb)->
    $(window).on 'scroll', cb.debounce(100)
  on_resize: (cb)->
    if window.onorientationchange? && ! head.browser.android
      $(window).on 'orientationchange', cb.debounce(100)
    else
      $(window).on 'resize', cb.debounce(100)

win.on_scroll win.refresh
win.on_resize win.refresh

dummy = ()->
if ontouchstart?
  $(window).on 'touchstart', dummy.debounce(100)
  $(window).on 'touchmove', dummy.debounce(100)
  $(window).on 'touchend', dummy.debounce(100)
else
  $(window).on 'mousedown', dummy.debounce(100)
  $(window).on 'mouseup', dummy.debounce(100)
  $(window).on 'mousemove', dummy.debounce(100)

scan_motion = (e)->
  win.accel   = e.originalEvent.acceleration
  win.gravity = e.originalEvent.accelerationIncludingGravity
  win.rotate  = e.originalEvent.rotationRate
$(window).on 'devicemotion', scan_motion.debounce(100)

if history?.pushState?
  popstate = (e)->
    Navi.popstate()
  $(window).on 'popstate', popstate.debounce(100)

  win.history = (title, href, hash)->
    href || href = location.href.replace location.hash, ""
    history.replaceState null, title, href + hash
else
  win.history = (title, href, hash)->
    location.hash = hash
