
class PageNavi extends Navi
  constructor: (@scope, @key, def)->
    def.options.current_type = Number
    def.options.per or= 1

    super

  paginate: (page_per, list)->
    @visible = true
    @length = (list.length / page_per).ceil()

    @value = @length if @value > @length
    @value = 1 if @value < 1
    @_move()

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
      item = _.assign {}, _.find @select, (o)-> o.val == n[key]
      item or=
        name: ""
        val:  null
      item.class = 'ng-cloak'

      if @visible and is_show
        item.class = @params.class_default
        item.class = null
        item.class = @params.class_select if @value == n[key]

      @of[key] = item

