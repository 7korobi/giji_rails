
class Navi
  @list = {}

  move: (newVal)->
    @value = @params.current_type newVal if newVal?
    @value

  constructor: ($scope, key, def)->
    @params = def.options
    @params.current_type or= String

    @key = key
    @show = {}
    @watch = []
    @select = []
    def.button?.keys (key, val)=>
      @select.push
        name: val
        val:  @params.current_type key

    chk = ///
      (^|\s)#{key}=(\w+)
    ///
    l = Object.fromQueryString(location[@params.on].replace(/^[#?]/,""))[key] if location[@params.on]
    c = document.cookie.match(chk)?[2] if @params.is_cookie?
    @value = @params.current_type l or c

    keys = def.button?.keys()
    if keys?
      unless keys.find String @value
        @value = null

    @value or= @params.current_type @params.current
    $scope.$watch "#{key}.value", (newVal,oldVal)=>
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
        value = val.join "&"
        location[field] = value  if  location[field].from(1) != value

  _move: ()->
    target = String @value
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

    @items = []
    super
    draw = (newVal,oldVal)=>
      @_move()
      for func in @watch
        func @value

    $scope.$watch "#{key}.items.length", draw
    $scope.$watch "#{key}.params.per",   draw
    $scope.$watch "#{key}.params.order", draw

  _move: ()->
    @length = (@items.length / @params.per).ceil()
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

    show.keys (key, is_show)=>
      is_show = show[key]
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

$(window).scroll ->
  win.left = window.pageXOffset
  win.top = window.pageYOffset

$(window).resize ->
  win.height = window.innerHeight || $(window).height()
  win.width = window.innerWidth || $(window).width()

  base_width = document.body.clientWidth || win.width
  win.zoom = base_width / win.width

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

      $(window).scroll =>
        @scroll()
      $(window).resize =>
        @resize()
        @scroll()

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
    @box.to_z_front()
    if head.csstransitions
      @box.css "-webkit-transition", "all 200ms ease"
      @box.css "-webkit-transform",  "translate(#{win.left}px, #{win.top}px)"

    else
      @box.animate
        top:  win.top  + @top  + "px"
        left: win.left + @left + "px"
      ,
        duration: 'fast'
        easing: 'swing'
        queue: false

Navi.push = ($scope, key, def)->
  Navi.list[key] or= new Navi $scope, key, def
  $scope[key] = Navi.list[key]

PageNavi.push = ($scope, key, def)->
  Navi.list[key] or= new PageNavi $scope, key, def
  $scope[key] = Navi.list[key]

FixedBox.push = (dx, dy, key)->
  FixedBox.list[key] or= new FixedBox dx, dy, $(key)


class Form
  @deploy: ->
    $(document).ready =>
      $('#phase_input').change ->
        $('#chr_vote_phase').val( @value )

  @submit_chr_vote: (face_id)->
    $('#chr_vote_face_id').val(face_id)

    $('form.chr_vote')[0]?.submit()

