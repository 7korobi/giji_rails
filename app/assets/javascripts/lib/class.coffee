
class Navi
  @list = {}

  move: (newVal)->
    @value = @params.current_type newVal if newVal?
    @value

  constructor: ($scope, key, def)->
    @scope = $scope
    @params = def.options
    @params.current_type or= String

    @key = key
    @show = {}
    @watch = []
    if def.button?
      @select = []
      def.button.keys (key, val)=>
        @select.push
          name: val
          val:  @params.current_type key
    else
      @select = def.select

    chk = ///
      (^|\s)#{key}=(\w+)
    ///
    l = Object.fromQueryString(location[@params.on].replace(/^[#?]/,""))[key] if location[@params.on]
    c = document.cookie.match(chk)?[2] if @params.is_cookie?
    @value = @params.current_type l or c
    @value = null if @select?.all((o)=> @value != o.val)
    @value or= @params.current_type @params.current

    @scope.$watch "#{@key}.value", (value,oldVal)=>
      @_move()

      for func in @watch
        func @value

      navis = Navi.list.values()
      list = new Object
      for navi in navis
        options = navi.params
        cmd = "#{navi.key}=#{navi.value}"

        if options.on?
          list[options.on] or= []
          list[options.on].push cmd

        if options.is_cookie
          expire = new Date().advance OPTION.cookie.expire
          document.cookie = "#{cmd}; expires=#{expire.toGMTString()}; path=/"

      list.keys (field, val)->
        val_str = val.join "&"
        location[field] = val_str  if  location[field].from(1) != val_str

  _move: ()->
    for o in @select
      if o.val == @value
        o.class = 'btn-success'
        @show[o.val] = true
      else
        o.class = null
        @show[o.val] = false


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
        then 'btn-success'
        else null

    n =
      first:    1
      second:   2
      prev:     @value  - 1
      current:  @value
      next:     @value  + 1
      penu:     @length - 1
      last:     @length

    @show =
      first:    0 < @length and n.first  < n.prev
      second:   1 < @length and n.second < n.prev

      last:     2 < @length and n.next   < n.last
      penu:     3 < @length and n.next   < n.penu

      prev_gap: 3 + 1 < @value
      prev:         1 < @value
      current:            true
      next:             @value < @length
      next_gap:         @value < @length - 3

    @show.keys (key, is_show)=>
      is_show = @show[key]
      item = @select.find (o)-> o.val == n[key]
      item or=
        name: ""
        val:  null
      @[key] = item.clone()

      @[key].class = 'ng-cloak'
      @[key].class = null          if is_show
      @[key].class = 'btn-success' if is_show && @value == n[key]


win =
  top:    0
  left:   0
  width:  0
  height: 0
  zoom:   0
  accel:   0
  gravity: 0
  rotate:  0

$(window).resize ->
  win.height = window.innerHeight || $(window).height()
  win.width = window.innerWidth || $(window).width()

  base_width = document.body.clientWidth || win.width
  win.zoom = base_width / win.width

  win.max = {
    top:  $('body').height() - win.height
    left: $('body').width()  - win.width
  }

$(window).bind 'devicemotion', (e)->
  win.accel   = e.originalEvent.acceleration
  win.gravity = e.originalEvent.accelerationIncludingGravity
  win.rotate  = e.originalEvent.rotationRate

class FixedBox
  @list = {}

  constructor: (dx, dy, fixed_box)->
    @dx = dx
    @dy = dy
    @box = fixed_box

    if @box?
      @box.css
        position: "absolute"

      $(window).resize => @resize()
      ###
      $(window).scroll => @scroll()
      ###

  resize: ()->
    width  = win.width  - @box.width()
    height = win.height - @box.height()

    @left = @dx + width if @dx < 0
    @left = @dx         if   0 < @dx
    @top = @dy + height if @dy < 0
    @top = @dy          if   0 < @dy
    @box.css
      top:  @top  + "px"
      left: @left + "px"

  scroll: ()->
    win.left = window.pageXOffset
    win.top  = window.pageYOffset

    win.left = win.max.left if win.max.left < win.left
    win.top  = win.max.top  if win.max.top  < win.top
    win.left = 0            if                win.left  < 0
    win.top  = 0            if                win.top   < 0

    @box.to_z_front()
    if head.csstransitions
      if head.browser.webkit
        @box.css "-webkit-transition", "all 200ms ease"
        @box.css "-webkit-transform",  "translate(#{win.left}px, #{win.top}px)"

      if head.browser.mozilla
        @box.css "-moz-transition", "all 200ms ease"
        @box.css "-moz-transform",  "translate(#{win.left}px, #{win.top}px)"

      if head.browser.ie
        @box.css "-ms-transition", "all 200ms ease"
        @box.css "-ms-transform",  "translate(#{win.left}px, #{win.top}px)"

      if head.browser.opera
        @box.css "-o-transition", "all 200ms ease"
        @box.css "-o-transform",  "translate(#{win.left}px, #{win.top}px)"

      @box.css "transition", "all 200ms ease"
      @box.css "transform",  "translate(#{win.left}px, #{win.top}px)"

    else
      @box.animate
        top:  win.top  + @top  + "px"
        left: win.left + @left + "px"
      ,
        duration: 'fast'
        easing: 'swing'
        queue: false

Navi.push = ($scope, key, def)->
  navi = Navi.list[key] = new Navi $scope, key, def
  eval "$scope.#{key} = navi"

PageNavi.push = ($scope, key, def)->
  navi = Navi.list[key] or= new PageNavi $scope, key, def
  eval "$scope.#{key} = navi"

FixedBox.push = (dx, dy, key)->
  FixedBox.list[key] or= new FixedBox dx, dy, $(key)


class Form
  @deploy: ->
    $(document).ready =>
      $('#phase_input').change ->
        $('#chr_vote_phase').val( value )

  @submit_chr_vote: (face_id)->
    $('#chr_vote_face_id').val(face_id)

    $('form.chr_vote')[0]?.submit()

