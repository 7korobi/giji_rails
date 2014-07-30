class Browser
  constructor: (@location, @cookies)->
    @list = {}
    @location ||=
      search: ""
      hash: ""
    @cookies ||= {}

    do_set_url = =>
      url = @to_url()
      if url.search && url.search != @location.search
        @location.search = url.search

      if url.hash && url.hash != @location.hash
        @location.hash = url.hash
    @set_url = _.debounce do_set_url, DELAY.andante

  location_val: (target, find_key)->
    for key_value_pair in @location[target].replace(/^[#?]/,"").split('&')
      [key, value] = key_value_pair.split('=')
      return value if key == find_key

  set_cookie: ->
    for _, navi of @list
      options = navi.params
      value = navi.move()
      if value? && options.is_cookie
        @cookies[navi.key] = value

  to_url: (append)->
    data =
      search: []
      hash: []

    scanner = (location, key, value)->
      if value?
        cmd = "#{key}=#{value}"
        data[location]?.push cmd

    for _, navi of @list
      scanner(navi.params.location, navi.key, navi.move())
    for location, navi of append
      for key, value of navi
        scanner(location, key, value)

    url = {}
    if data.search.length
      url.search = "?" + (data.search || []).join("&")

    if data.hash.length
      url.hash = "#" +  (data.hash || []).join("&")
    url

