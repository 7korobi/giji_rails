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

jQuery ->
  FixedBox.push  1,-1, '#sayfilter'
  FixedBox.push -8,-8, '#buttons'

  if  head.browser.ie
    start.delay 100
  else
    start.delay 1

  angular.bootstrap "html", ["giji"]

