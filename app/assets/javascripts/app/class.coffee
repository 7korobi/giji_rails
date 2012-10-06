
class Navi
  @list = {}

  move: (target)->
    @_value = @_params.current_type target

  constructor: ($scope, key, def)->
    @_params = def.options
    @_params.current_type or= String
    if def.button?
      @_button = def.button
      @_keys = def.button.keys()

    @_watch = []
    @_key = key

    chk = ///
      (^|\s)#{key}=(\w+)
    ///
    l = Object.fromQueryString(location[@_params.on].replace(/^[#?]/,""))[key] if location[@_params.on]
    c = document.cookie.match(chk)?[2]
    @_value = @_params.current_type( l or c )

    if @_button
      unless @_button.keys().find String @_value
        @_value = null
    @_value or= @_params.current_type @_params.current
    $scope.$watch "#{key}._value", (newVal,oldVal)=>
      @_move()

      for func in @_watch
        func @_value

      navis = Navi.list.values()
      list = new Object
      for navi in navis
        options = navi._params
        cmd = "#{navi._key}=#{navi._value}"

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
    target = String @_value
    @_button.keys (key, _)=>
      @[key] = null
    @[target] = 'btn-success'


class PageNavi extends Navi
  paginate: (target)->
    @_value = @_params.current_type @_button[target]

  constructor: ($scope, key, def)->
    def.options.current_type = Number
    def.options.per or= 1

    @_items = []
    super
    draw = (newVal,oldVal)=>
      @_move()
      for func in @_watch
        func @_value

    $scope.$watch "#{key}._items.length", draw
    $scope.$watch "#{key}._params.per",   draw
    $scope.$watch "#{key}._params.order", draw

  _move: ()->
    page = Number(@_value)
    @_length = (@_items.length / @_params.per).ceil()
    @_button = n =
      first:    1
      second:   2
      prev:     page - 1
      current:  page
      next:     page + 1
      penu:     @_length  - 1
      last:     @_length

    show =
      go_next:  n.current < n.last
      first:    0 < n.last
      second:   1 < n.last
      last:     2 < n.last
      penu:     2 < n.penu
      prev_gap: 2 < n.prev - 1 < n.penu
      prev:     2 < n.prev     < n.penu
      current:  2 < n.current  < n.penu
      next:     2 < n.next     < n.penu
      next_gap: 2 < n.next + 1 < n.penu

    show.keys (key, val)=>
      @[key] = 'ng-cloak'
      @[key] = null          if val
      @[key] = 'btn-success' if val && page == @_button[key]


class FixedBox
  @list = {}
  win_width  = win_height = win_zoom = 0

  constructor: (dx, dy, fixed_box)->
    @dx = dx
    @dy = dy
    @box = fixed_box

    if @box?
      @box.css
        position: "fixed"

      $(window).scroll =>
        @calc()

      $(window).resize =>
        win_height = window.innerHeight || $(window).height()
        win_width = window.innerWidth || $(window).width()

        base_width = document.body.clientWidth || win_width
        win_zoom = base_width / win_width
        @calc()

  calc: ()->
    width = win_width - @box.width()
    height = win_height - @box.height()

    left = @dx + width if @dx < 0
    left = @dx         if   0 < @dx
    top = @dy + height if @dy < 0
    top = @dy          if   0 < @dy
    @box.to_z_front()
    @box.css
      top:  top  + "px"
      left: left + "px"


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

