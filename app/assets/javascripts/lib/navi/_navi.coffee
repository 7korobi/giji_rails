
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
    _.find @select, (o)=> o.val == @value

  popstate: ()->
    l = @location_val(@key)
    c = document.cookie.match(@chk)?[2] if @params.is_cookie?
    @value = @params.current_type l or c or ""
    @value = "" if @select? && _.every @select, (o)=> @value != o.val
    @value or= @params.current_type @params.current

  constructor: ($scope, key, def)->
    @scope = $scope
    @params = def.options
    @params.current_type or= String
    @params.class or= 'btn-success'

    @of = {}
    @key = key
    @watch = []
    if def.button?
      @select = []
      for key, val of def.button
        @select.push
          name: val
          val:  @params.current_type key
    else
      @select = def.select

    @chk = ///
      (^|\s)#{key}=([^;]+)
    ///
    @popstate()

    @scope.$watch "#{@key}.value", (value,oldVal)=>
      @_move()

      for func in @watch
        func @value

      list = {}
      for _, navi of Navi.list
        options = navi.params
        if navi.value
          cmd = "#{navi.key}=#{navi.value}"

          if options.location?
            list[options.location] or= []
            list[options.location].push cmd

          if options.is_cookie
            expire = new Date().advance OPTION.cookie.expire
            document.cookie = "#{cmd}; expires=#{expire.toGMTString()}; path=/"


      if list.search
        val_search = "?" + list.search.join "&"
        if location.search != val_search
          location.search = val_search

      if list.hash
        val_hash   = "#" + list.hash.join   "&"  if list.hash
        if location.hash != val_hash
          win.history null, null, val_hash

  _move: ()->
    if @select?
      for o in @select
        @of[o.val] = o
        if o.val == @value
          o.class = @params.class
          o.show = true
        else
          o.class = null
          o.show = false


Navi.popstate = ()->
  for navi in Navi.list
    navi.popstate()

Navi.push = ($scope, key, def)->
  navi = Navi.list[key] = new Navi $scope, key, def
  eval "$scope.#{key} = navi"

