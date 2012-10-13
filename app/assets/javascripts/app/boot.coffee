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

  FixedBox.push  1, 1, '#sayfilter'
  FixedBox.push -8,-8, '#buttons'

  start()

if  "Microsoft Internet Explorer" == navigator.appName
  jQuery ->
    start.delay 1000
    bootstrap.delay 600
else
  jQuery ->
    start.delay  500
    bootstrap()
