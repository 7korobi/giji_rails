class ArrayNavi extends Navi
  constructor: ($scope, key, def)->
    super

  popstate: ()->
    l = @location_val(@key)
    c = document.cookie.match(@chk)?[2] if @params.is_cookie?
    value = []
    for o in  (l or c or "").split(",")
      break if @select? && _.every @select, (s)-> o != s.val
      value.push @params.current_type o
    @value = value
    @value = @params.current if @value.length < 1

  blank: ()->
    @value = []

  value_add: (newVal)->
    @value = _.without(@value, newVal)
    @value.push newVal
    @value

  value_del: (newVal)->
    @value = _.without @value, newVal

  move: (newVal)->
    if newVal?
      newVal = @params.current_type newVal
      if _.include @value, newVal
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
        if _.include @value, o.val
          o.class = @params.class
          o.show = true
        else
          o.class = null
          o.show = false

  choice: ->
    _.find @select, (o)=> o.val == @value[0]

  choices: ->
    _.map @value, (value)=>
      _.find @select, (o)-> o.val == value


ArrayNavi.push = ($scope, key, def)->
  navi = Navi.list[key] = new ArrayNavi $scope, key, def
  eval "$scope.#{key} = navi"
