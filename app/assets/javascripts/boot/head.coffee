if head.browser?
  b = head.browser
  b.power = "pc"
  if navigator.userAgent.toLowerCase().indexOf('windows') != -1
    b.win = true

  if navigator.userAgent.toLowerCase().indexOf('macintosh') != -1
    b.mac = true

  if navigator.userAgent.toLowerCase().indexOf('android') != -1
    b.android = true
    b.power = "simple"

  for key in ['crios','silk','mercury','iphone','ipad']
    if navigator.userAgent.toLowerCase().indexOf(key) != -1
      b.power = "mobile"

  for key in ['safari','iphone','ipad']
    if navigator.userAgent.toLowerCase().indexOf(key) != -1
      b.iphone = true
  b[b.power] = true
head.useragent = navigator.userAgent

_.assign DELAY, DELAY.option[head.browser.power]

