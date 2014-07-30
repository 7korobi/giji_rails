class LinkNavi
  @list = {}

  choice: ->
    _.assign {}, _.find @select, (o)=> o.val == @move()

  browser_value: ()->
    l = @browser.location_val @params.location, @key
    c = @browser.cookies[@key] if @params.is_cookie?
    @params.current_type l or c or ""

  popstate: ()->
    val = @browser_value()
    reject = @select? && _.every @select, (o)-> val != o.val

    val = if reject then "" else val
    val or= @params.current_type @params.current
    @move(val)

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

  link: (target)->
    @scope.$watch target, (value,oldVal)=>
      @_move()
      for func in @watch
        func value

      @browser.set_cookie()
      @browser.set_url()

  _move: ()->
    if @select?
      for o in @select
        @of[o.val] = o
        if o.val == @move()
          o.class = @params.class_select
          o.show = true
        else
          o.class = @params.class_default
          o.show = false

LinkNavi.push = ($scope, key, def)->
  navi = new LinkNavi $scope, key, def, Browser.real
  eval "$scope.#{key} = navi"

class Navi extends LinkNavi
  constructor: (@scope, @key, def, @browser)->
    super
    @popstate()
    @link "#{@key}.value"

  move: (newVal)->
    @value = @params.current_type newVal if newVal?
    @value

Navi.push = ($scope, key, def)->
  navi = new Navi $scope, key, def, Browser.real
  eval "$scope.#{key} = navi"

