class EventFloat
  constructor: (pageY)->
    @messages = []
    @slide pageY

  slide: (pageY)->
    @z = Date.now()
    @top = pageY + 24

  url: ->
    @link

