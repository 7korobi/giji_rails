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
    document.cookie = "&#{@word}=#{to};"  if  @is_cookie 
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
