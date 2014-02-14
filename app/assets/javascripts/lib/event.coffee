if head.browser?
  b = head.browser
  b.power = "pc"
  if navigator.userAgent.toLowerCase().indexOf('android') != -1
    b.android = true
    b.power = "mobile"
  if navigator.userAgent.toLowerCase().indexOf('iphone') != -1
    b.iphone = true
    b.power = "mobile"
  if navigator.userAgent.toLowerCase().indexOf('ipad') != -1
    b.iphone = true
    b.power = "mobile"
head.useragent = navigator.userAgent
$("html").addClass b.power

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

  resize_event: ()->
    if window.onorientationchange? && ! head.browser.android
      'orientationchange'
    else
      'resize'

  on_scroll: (cb, delay)->
    delay ||= 500
    $(window).on 'scroll', _.throttle(cb, delay)
    $(window).on win.resize_event(), _.throttle(cb, 5000)

  on_resize: (cb, delay)->
    delay ||= 100
    $(window).on win.resize_event(), _.throttle(cb, delay)
    $(window).on 'scroll', _.throttle(cb, 5000)

if history?.pushState?
  popstate = (e)->
    Navi.popstate()
  $(window).on 'popstate', _.throttle(popstate, 100)

  win.history = (title, href, hash)->
    href || href = location.href.replace /#.*/, ""
    history.replaceState null, title, href + hash
else
  win.history = (title, href, hash)->
    location.hash = hash


angular.module("giji").run ->
  win.on_scroll win.refresh
  win.on_resize win.refresh

  dummy = ()->
  if ontouchstart?
    $(window).on 'touchstart', _.throttle(dummy, 100)
    $(window).on 'touchmove', _.throttle(dummy, 100)
    $(window).on 'touchend', _.throttle(dummy, 100)
  else
    $(window).on 'mousedown', _.throttle(dummy, 100)
    $(window).on 'mouseup', _.throttle(dummy, 100)
    $(window).on 'mousemove', _.throttle(dummy, 100)

  scan_motion = (e)->
    win.accel   = e.originalEvent.acceleration
    win.gravity = e.originalEvent.accelerationIncludingGravity
    win.rotate  = e.originalEvent.rotationRate
  $(window).on 'devicemotion', _.throttle(scan_motion, 100)
