class Params
  constructor: (word, check)->
    @word  = word
    @match = new RegExp("&#{word}=(\\w+)",'i')
    @check = check  if  check?

  change: (to)->
    @cookie_save(to);
    uri = document.location[@on].replace(@match,'')
    document.location[@on] = "#{uri}&#{@word}=#{to}"

  cookie_save: (to)->
    span = 1000 * 3600 * 24
    now = new Date()
    now.setTime( now.getTime() + 3600 * 1000 );
    document.cookie = "&#{@word}=#{to}; expires=#{now.toGMTString()}"  if  @is_cookie 
    to

  val: ->
    path = document.location[@on].match(@match)?[1]
    return @cookie_save(path) if path?

    if @is_cookie
      cookie = document.cookie.match(@match)?[1]
      return cookie if cookie?

    return @cookie_save(@current)

  check: (val, obj)->
    val == obj[@word]

  select: (src)->
    val = @val()
    if  val?
      dst = []
      for obj in src
        dst.push obj  if  @check(val, obj)
      dst
    else
      src

  join_gui: (box, style, key, call)->
    buttons = box.find('a')
    @gui = 
      box:    box
      style:  style
      key:    key
      render: call

    for link in buttons
      link.base = @  

    buttons.click ->
      target = $(@)
      href = target.attr(@base.gui.key)
      @base.change href
      @base.render()
      false

  render: ->
    if @gui?
      @gui.box.find("a").removeClass(@gui.style)
      @gui.render()
      @gui.box.find("a[#{@gui.key}=#{@val()}]").addClass(@gui.style)
