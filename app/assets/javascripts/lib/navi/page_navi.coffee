class PageNavi extends Navi
  constructor: ($scope, key, def)->
    def.options.current_type = Number
    def.options.per or= 1

    super
    @filters = []
    @refresh = ->

  paginate: (page_per_key, func)->
    @filter page_per_key, (page_per, list)=>
      @length = (list.length / page_per).ceil()
      list

    @filter page_per_key, func

    @filter "#{@key}.value", (page, list)=>
      @item_last = list.last() if list.last
      @refresh.delay 300
      list

  filter_by: (by_key)->
    @by_key = by_key
    @filter "#{@by_key}.length"

  filter_to: (to_key)->
    @to_key = to_key

  filter: (key, func)->
    @scope.$watch key, =>
      if @by_key?
        list = @scope.$eval @by_key
        for [target_key, filter] in @filters
          target = @scope.$eval target_key
          list = filter target, list
        if @to_key? && list
          eval "_this.scope.#{@to_key} = list"
      @_move()

    @filters.push [key, func] if func

  _move: ()->
    @select  = [1..@length].map (i)->
      name: i
      val:  i
      class:
        if i == @value
        then @params.class
        else null

    n =
      first:    1
      second:   2
      prev:     @value  - 1
      current:  @value
      next:     @value  + 1
      penu:     @length - 1
      last:     @length

    show =
      first:    0 < @length and n.first  < n.prev
      second:   1 < @length and n.second < n.prev

      last:     2 < @length and n.next   < n.last
      penu:     3 < @length and n.next   < n.penu

      prev_gap: 3 + 1 < @value
      prev:         1 < @value
      current:            true
      next:             @value < @length
      next_gap:         @value < @length - 3

    @of = {}
    show.keys (key, is_show)=>
      item = @select.find (o)-> o.val == n[key]
      item or=
        name: ""
        val:  null
      item = item.clone()
      item.class = 'ng-cloak'
      item.class = null          if is_show
      item.class = @params.class if is_show && @value == n[key]

      @of[key] = item


PageNavi.push = ($scope, key, def)->
  navi = Navi.list[key] or= new PageNavi $scope, key, def
  eval "$scope.#{key} = navi"

