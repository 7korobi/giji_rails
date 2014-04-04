class Browser
  constructor: (@name, @parent, cb)->
    @filter =
      log: new DataStream @parent?.filter.log, @
    @to_virtual()
    @list = {}

    cb(@) if cb

  to_virtual: ->
    @cookies = Browser.virtual.cookies
    @location = Browser.virtual.location

  to_real: ->
    @cookies = Browser.real.cookies
    @location = Browser.real.location

  start: ->
    @popstate()

  popstate: ->
    @each (navi)=>
      navi.popstate()

  push: (navi)->
    @list[navi.key] = navi
    navi.browser = @
    navi.popstate()
    navi.watch.push ()=>
      for key, data_stream of @filter
        Bus.refresh data_stream

  each: (cb)->
    return unless cb
    @parent.each cb if @parent?

    for _, navi of @list
      cb(navi)

  location_val: (target, find_key)->
    for key_value_pair in @location[target].replace(/^[#?]/,"").split('&')
      [key, value] = key_value_pair.split('=')
      return value if key == find_key

  set_cookie: ->
    @each (navi)=>
      if navi.value && navi.params.is_cookie
        @cookies[navi.key] = navi.value

  to_url: (append)->
    data =
      search: []
      hash: []

    scanner = (location, key, value)->
      if value
        cmd = "#{key}=#{value}"
        data[location]?.unshift cmd

    @each (navi)->
      scanner(navi.params.location, navi.key, navi.value)
    for location, navi of append
      for key, value of navi
        scanner(location, key, value)


    if data.search.length
      search = "?" + (data.search || []).join("&")
      unless @location.search == search
        @location.search = search

    if data.hash.length
      hash = "#" +  (data.hash || []).join("&")
      unless @location.hash == hash
        @location.hash = hash
      # win.history null, null, h


Browser.routes = (cb)->
  Browser.current = cb()
  for _, browser of Routes
    if Browser.current == browser
      browser.to_real()
    else
      browser.to_virtual()

Browser.virtual = {}
Browser.real = {}
