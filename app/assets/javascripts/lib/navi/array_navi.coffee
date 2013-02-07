class ArrayNavi extends Navi
  constructor: ($scope, key, def)->
    super

  popstate: ()->
    l = Object.fromQueryString(location[@params.location].replace(/^[#?]/,""))[@key] if location[@params.location]
    c = document.cookie.match(@chk)?[2] if @params.is_cookie?
    @value = []
    (l or c).split(",").each (o)->
      return if @select?.all((o)=> @value != o.val)
      @value.push @params.current_type o

  move: (newVal)->
    if newVal?
      newVal = @params.current_type newVal
      if @value.any newVal
        @value = [newVal]
      else
        @value.push newVal
    else
      @value

  choice: ->
    @select.find (o)=> o.val == @value[0]

  choices: ->
    @value.map (value)=>
      @select.find (o)-> o.val == value

