class ArrayNavi extends Navi
  constructor: ($scope, key, def)->
    super

  popstate: ()->
    l = Object.fromQueryString(location[@params.location].replace(/^[#?]/,""))[@key] if location[@params.location]
    c = document.cookie.match(@chk)?[2] if @params.is_cookie?
    value = []
    (l or c or "").split(",").each (o)=>
      return if @select?.all((s)=> o != s.val)
      value.push @params.current_type o
    @value = value
    @value = @params.current if @value.length < 1

  blank: ()->
    @value = []

  value_add: (newVal)->
    @value = @value.clone().remove(newVal).add newVal

  value_del: (newVal)->
    @value = @value.clone().remove newVal

  move: (newVal)->
    if newVal?
      newVal = @params.current_type newVal
      if @value.any newVal
        @value_del newVal
      else
        @value_add newVal
    else
      @value

  _move: ()->
    @hide = (@value.length < 1)
    if @select?
      for o in @select
        @of[o.val] = o
        if @value.any o.val
          o.class = @params.class
          o.show = true
        else
          o.class = null
          o.show = false

  choice: ->
    @select.find (o)=> o.val == @value[0]

  choices: ->
    @value.map (value)=>
      @select.find (o)-> o.val == value


ArrayNavi.push = ($scope, key, def)->
  navi = Navi.list[key] = new ArrayNavi $scope, key, def
  eval "$scope.#{key} = navi"
