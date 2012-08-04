start = ->
  GIJI.box.window.resize()

bootstrap = ->
  angular.bootstrap "html"

jQuery ->
  GIJI.box =
    contentframe: $('#contentframe')
    sayfilter: $("#sayfilter")
    outframe: $("#outframe")
    buttons: $("#buttons")
    notepad: $("#notepad")
    window: $(window)

  FixedBox.push  1, 1, 'sayfilter'
  FixedBox.push -1,-1, 'buttons'

  unless document.cookie.layoutfilter > 0
    GIJI.box.contentframe[0].className = "contentframe_navileft"
    GIJI.box.outframe[0].className = "outframe_navimode"
    GIJI.box.notepad.after "<div id=\"notepad_after\" style=\"height:55px\"></div>"

  GIJI.box.window.resize ->
    GIJI.box.window.scroll()

  window.onorientationchange = ->
    GIJI.box.window.resize()

  GIJI.box.window.scroll ->
    GIJI.box.outframe.height GIJI.box.contentframe.height()

  start()

if  "Microsoft Internet Explorer" == navigator.appName
  jQuery ->
    start.delay 2000
    bootstrap.delay 1000
else
  jQuery ->
    start.delay 1000
    bootstrap()


