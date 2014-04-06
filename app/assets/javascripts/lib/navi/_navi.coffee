
class Navi
  @list = {}
  move: (newVal)->
    @value = @params.current_type newVal if newVal?
    @value

  choice: ->
    _.assign {}, _.find @select, (o)=> o.val == @value

  popstate: ()->
    l = @browser.location_val @params.location, @key
    c = @browser.cookies[@key] if @params.is_cookie?
    val = @params.current_type l or c or ""
    reject = @select? && _.every @select, (o)-> val != o.val

    @value = if reject then "" else val
    @value or= @params.current_type @params.current

  constructor: (@scope, @key, def, @browser)->
    @browser.list[@key] = @
    @params = def.options
    @params.current_type  or= String
    @params.class_select  or= 'btn-success'
    @params.class_default or= 'btn-default'

    @of = {}
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

      @browser.set_cookie()
      @browser.set_url()

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

Navi.push = ($scope, key, def)->
  navi = new Navi $scope, key, def, Browser.real
  eval "$scope.#{key} = navi"

