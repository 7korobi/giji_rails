class EventFloat
  constructor: (pageY)->
    @messages = []
    @slide pageY

  slide: (pageY)->
    @z = Date.now()
    @top = pageY + 24

  set_url: ->
    location.hash = @link.hash
    for key, navi of Browser.real.list
      navi.popstate()



