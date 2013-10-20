class PageNavi extends Navi
  constructor: ($scope, key, def)->
    def.options.current_type = Number
    def.options.per or= 1

    super
    @filters = []
    @pagers  = []

  do_filters: (list, filters)->
    for [target_key, filter] in filters
      target = @scope.$eval target_key
      if target
        list = filter target, list
    list

  paginate: (page_per_key, func)->
    @pager page_per_key, (page_per, list)=>
      @length = (list.length / page_per).ceil()
      list

    @pager page_per_key, func
    @pager "#{@key}.value", (page, list)=>
      @item_last = _.last list if list.last
      list

  pager: (key, func)->
    @scope.$watch key, =>
      if @list_by_filter?
        list = @do_filters @list_by_filter, @pagers
        if @to_key? && list
          eval "_this.scope.#{@to_key} = list"
      @_move()

    @pagers.push [key, func] if func

  filter_by: (by_key)->
    @by_key = by_key

  filter_to: (to_key)->
    @to_key = to_key

  filter: (key, func)->
    @scope.$watch key, =>
      if @by_key?
        @list_by_filter = @do_filters @scope.$eval(@by_key), @filters
        list = @do_filters @list_by_filter, @pagers
        if @to_key? && list
          eval "_this.scope.#{@to_key} = list"
      @_move()

    @filters.push [key, func] if func

  hide: ()->
    for key, item of @of
      item.class = 'ng-cloak'

  _move: ()->
    @select  = _.map [1..@length], (i)->
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
    for key, is_show of show
      item = _.extend {}, _.find @select, (o)-> o.val == n[key]
      item or=
        name: ""
        val:  null
      item.class = 'ng-cloak'

      if @visible and is_show
        item.class = null
        item.class = @params.class if @value == n[key]

      @of[key] = item


PageNavi.push = ($scope, key, def)->
  navi = Navi.list[key] or= new PageNavi $scope, key, def
  eval "$scope.#{key} = navi"

