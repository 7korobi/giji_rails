start = ->
  # jqm
  $(document).live "mobileinit", ()->
    $.mobile.hashListeningEnabled = false
    $.mobile.loadingMessage = false
    $.mobile.ajaxEnabled = false


  $ ->
    pushState= (nextPage)->
      window.history.pushState null, null, nextPage

    popState = (event) ->
      location.pathname

  do_resize = ->
    $(window).resize()
  do_resize.delay   10
  do_resize.delay  100
  do_resize.delay 1000


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

  if  head.browser.ie
    start.delay 100
    bootstrap()
  else
    start.delay 1
    bootstrap()
