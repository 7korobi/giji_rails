if navigator.userAgent.toLowerCase().indexOf('android') != -1
  head.browser?.android = true
if navigator.userAgent.toLowerCase().indexOf('iphone') != -1
  head.browser?.iphone = true
if navigator.userAgent.toLowerCase().indexOf('ipad') != -1
  head.browser?.iphone = true
head.useragent = navigator.userAgent


win =
  top:    0
  left:   0
  width:  0
  height: 0
  accel:   0
  gravity: 0
  rotate:  0
  max:
    top:  0
    left: 0
  zoom:  1
  _zoom: 1

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
    $(window).on 'scroll', cb.throttle(100)
  on_resize: (cb)->
    if window.onorientationchange? && ! head.browser.android
      $(window).on 'orientationchange', cb.throttle(100)
    else
      $(window).on 'resize', cb.throttle(100)


if history?.pushState?
  popstate = (e)->
    Navi.popstate()
  $(window).on 'popstate', popstate.throttle(100)

  win.history = (title, href, hash)->
    href || href = location.href.replace /#.*/, ""
    history.replaceState null, title, href + hash
else
  win.history = (title, href, hash)->
    location.hash = hash


(->
  win.on_scroll win.refresh
  win.on_resize win.refresh

  dummy = ()->
  if ontouchstart?
    $(window).on 'touchstart', dummy.throttle(100)
    $(window).on 'touchmove', dummy.throttle(100)
    $(window).on 'touchend', dummy.throttle(100)
  else
    $(window).on 'mousedown', dummy.throttle(100)
    $(window).on 'mouseup', dummy.throttle(100)
    $(window).on 'mousemove', dummy.throttle(100)

  scan_motion = (e)->
    win.accel   = e.originalEvent.acceleration
    win.gravity = e.originalEvent.accelerationIncludingGravity
    win.rotate  = e.originalEvent.rotationRate
  $(window).on 'devicemotion', scan_motion.throttle(100)
).delay(500)
