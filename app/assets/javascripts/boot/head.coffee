if head.browser?
  b = head.browser
  b.power = "pc"
  b.viewport = "width=device-width, initial-scale=1.0"

  if navigator.userAgent.toLowerCase().indexOf('windows') != -1
    b.win = true

  if navigator.userAgent.toLowerCase().indexOf('macintosh') != -1
    b.mac = true

  if navigator.userAgent.toLowerCase().indexOf('safari') != -1
    b.ios = true

  if navigator.userAgent.toLowerCase().indexOf('android') != -1
    b.android = true
    b.power = "simple"

  if navigator.userAgent.toLowerCase().indexOf('iphone') != -1
    b.viewport = "width=device-width, initial-scale=0.5"
    b.iphone = true
    b.ios = true
    b.power = "mobile"

  if navigator.userAgent.toLowerCase().indexOf('ipad') != -1
    b.ios = true
    b.power = "mobile"

  for key in ['crios','silk','mercury']
    if navigator.userAgent.toLowerCase().indexOf(key) != -1
      b.power = "mobile"

  b[b.power] = true


$("meta[name=viewport]").attr("content", head.browser.viewport)

head.useragent = navigator.userAgent

_.assign DELAY, DELAY.option[head.browser.power]

