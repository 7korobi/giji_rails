$(document).live "mobileinit", ()->
  $.mobile.hashListeningEnabled = false
  $.mobile.loadingMessage = false
  $.mobile.ajaxEnabled = false


$ ->
  pushState= (nextPage)->
    window.history.pushState null, null, nextPage

  popState = (event) ->
    location.pathname


