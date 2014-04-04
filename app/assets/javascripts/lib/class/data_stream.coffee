class DataStream
  constructor: (@parent, @browser)->
    @afters = []
    @befores = []
    @filters = []

  before: ($scope, key, cb)->
    @befores.push @set $scope, key, cb

  after: ($scope, key, cb)->
    @afters.unshift @set $scope, key, cb

  set: ($scope, key, cb)->
    item =
      cb: cb
      key: key
      scope: $scope
      oldVal: null
      newVal: null
    @filters.push item
    $scope.$watch key, (newVal, oldVal)=>
      item.newVal = newVal
      item.oldVal = oldVal
      Bus.refresh @

    item

  is_cover: (target)->
    target && (@ == target || @is_cover target.parent)

  filter: (list)->
    for item in @befores
      list = item.cb item.newVal, list
    list = @parent.filter list if @parent?
    for item in @afters
      list = item.cb item.newVal, list
    list
