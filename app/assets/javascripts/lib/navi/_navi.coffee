
class Navi
  @list = {}

  location_val: (find_key)->
    if location[@params.location]
      hash_str = location[@params.location].replace(/^[#?]/,"")
      for key_value in hash_str.split('&')
        [key, value] = key_value.split('=')
        return decodeURIComponent value if key == find_key

  move: (newVal)->
    @value = @params.current_type newVal if newVal?
    @value

  choice: ->
    _.assign {}, _.find @select, (o)=> o.val == @value

  popstate: ()->
    l = @location_val(@key)
    c = win.cookies[@key] if @params.is_cookie?
    val = @params.current_type l or c or ""
    reject = @select? && _.every @select, (o)-> val != o.val

    @value = if reject then "" else val
    @value or= @params.current_type @params.current

  constructor: ($scope, key, def)->
    @scope = $scope
    @params = def.options
    @params.current_type  or= String
    @params.class_select  or= 'btn-success'
    @params.class_default or= 'btn-default'

    @of = {}
    @key = key
    @watch = []
    if def.button?
      @select = []
      for btn_key, btn_val of def.button
        @select.push
          name: btn_val
          val:  @params.current_type btn_key
    else
      @select = def.select

    @popstate()

    @scope.$watch "#{@key}.value", (value,oldVal)=>
      @_move()

      for func in @watch
        func @value

      Navi.set_cookie()
      list = Navi.to_url()
      if list.search && list.search != location.search
        location.search = list.search
      if list.hash && list.hash != location.hash
        location.hash = list.hash
        win.history null, null, list.hash

  _move: ()->
    if @select?
      for o in @select
        @of[o.val] = o
        if o.val == @value
          o.class = @params.class_select
          o.show = true
        else
          o.class = @params.class_default
          o.show = false


Navi.set_cookie = ()->
  for _, navi of Navi.list
    options = navi.params
    if navi.value
      cmd = "#{navi.key}=#{navi.value}"
      if options.is_cookie
        expire = new Date().advance OPTION.cookie.expire
        document.cookie = "#{cmd}; expires=#{expire.toGMTString()}; path=/"

Navi.to_hash = (append)->
  hash = {}
  scanner = (location, key, value)->
    if value
      cmd = "#{key}=#{value}"
      hash[key] = [location, cmd]

  for _, navi of Navi.list
    scanner(navi.params.location, navi.key, navi.value)
  for location, navi of append
    for key, value of navi
      scanner(location, key, value)
  hash

Navi.to_url = (append)->
  list = {}
  for key, obj of Navi.to_hash(append)
    [location, cmd] = obj
    if location?
      list[location] or= []
      list[location].push cmd

  list.search =
    if list.search
      "?" + list.search.join("&")
    else
      ""

  list.hash =
    if list.hash
      "#" + list.hash.join("&")
    else
      ""
  list

Navi.popstate = ()->
  for navi in Navi.list
    navi.popstate()

Navi.push = ($scope, key, def)->
  navi = Navi.list[key] = new Navi $scope, key, def
  eval "$scope.#{key} = navi"

