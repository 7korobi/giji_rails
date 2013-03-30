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

  move: (newVal)->
    if newVal?
      newVal = @params.current_type newVal
      if @value.any newVal
        @value = [newVal]
      else
        @value = @value.concat [newVal]
    else
      @value

  _move: ()->
    @hide = (@value.length < 1)
    if @select?
      for o in @select
        if @value.any o.val
          o.class = 'btn-success'
          @show[o.val] = true
        else
          o.class = null
          @show[o.val] = false

  choice: ->
    @select.find (o)=> o.val == @value[0]

  choices: ->
    @value.map (value)=>
      @select.find (o)-> o.val == value


ArrayNavi.push = ($scope, key, def)->
  navi = Navi.list[key] = new ArrayNavi $scope, key, def
  eval "$scope.#{key} = navi"
