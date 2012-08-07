start = ->
  $(window).resize()

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

  $("#contentframe")[0].className = "contentframe_navileft"
  $("#outframe")[0].className = "outframe_navimode"

  $(window).resize ->
    $(window).scroll()

  $(window).scroll ->
    $("#outframe").height $("#contentframe").height()

  start()

if  "Microsoft Internet Explorer" == navigator.appName
  jQuery ->
    start.delay 1000
    bootstrap.delay 1000
else
  jQuery ->
    start.delay 1000
    bootstrap()





