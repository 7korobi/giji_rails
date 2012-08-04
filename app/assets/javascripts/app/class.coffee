class Navi
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
      &#{key}=(\w+)
    ///
    l = location[@_params.on].match(chk)?[1]
    c = document.cookie.match(chk)?[1]
    @_value = @_params.current_type(l or c or @_params.current)
    $scope.$watch "#{key}._value", (newVal,oldVal)=>
      for func in @_watch
        func @_value

      @_move()

      navis = Navi.list.values()
      list = new Object
      for navi in navis
        options = navi._params
        list[options.on] = ""
      for navi in navis
        options = navi._params
        cmd = "&#{navi._key}=#{navi._value}"
        list[options.on] += cmd
        if options.is_cookie
          expire = new Date().advance OPTION.cookie.expire
          document.cookie = "#{cmd}; expires=#{expire.toGMTString()}; path=/"
      for field in list.keys()
        val = list[field]
        location[field] = val

  _move: ()->
    target = String @_value
    for key in @_button.keys()
      @[key] = null
    @[target] = 'btn-success'


class PageNavi extends Navi
  paginate: (target)->
    @_value = @_params.current_type @_button[target]

  constructor: ($scope, key, def)->
    @_items = []
    super
    @_params.per or= 1
    $scope.$watch "#{key}._items.last()", (newVal,oldVal)=>
      for func in @_watch
        func @_value

      @_move()

  _move: ()->
    page = Number(@_value)
    length = (@_items.length / @_params.per).ceil()
    @_button = n =
      first:    1
      second:   2
      prev:     page - 1
      current:  page
      next:     page + 1
      penu:     length  - 1
      last:     length

    show =
      first:    0 < n.last
      second:   1 < n.last
      last:     2 < n.last
      penu:     2 < n.penu
      prev_gap: 2 < n.prev - 1 < n.penu
      prev:     2 < n.prev     < n.penu
      current:  2 < n.current  < n.penu
      next:     2 < n.next     < n.penu
      next_gap: 2 < n.next + 1 < n.penu

    for key in show.keys()
      @[key] = 'ng-cloak'
      @[key] = null          if show[key]
      @[key] = 'btn-success' if show[key] && page == @_button[key]


class FixedBox
  constructor: (dx, dy, fixed_box)->
    @dx = dx
    @dy = dy
    @box = $(fixed_box)

    fixed_box.style.position = "fixed"
    if @box?
      GIJI.box.window.resize => @calc()

  calc: ()->
    box_height = @box.height()
    win_height = window.innerHeight ||
      GIJI.box.window.height() ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    height = win_height - box_height

    box_width = @box.width()
    win_width = GIJI.box.window.width()
    width = win_width - box_width

    left = @dx + width if @dx < 0
    left = @dx         if   0 < @dx
    top = @dy + height if @dy < 0
    top = @dy          if   0 < @dy
    @box.to_z_front()
    @box.css
      top:  top  + "px"
      left: left + "px"


Navi.list = {}
FixedBox.list = {}

Navi.push = ($scope, key, def)->
  Navi.list[key] or= new Navi $scope, key, def
  $scope[key] = Navi.list[key]

PageNavi.push = ($scope, key, def)->
  Navi.list[key] or= new PageNavi $scope, key, def
  $scope[key] = Navi.list[key]

FixedBox.push = (dx, dy, key)->
  FixedBox.list[key] or= new FixedBox dx, dy, GIJI.box[key][0]


class Form
  @deploy: ->
    $(document).ready =>
      $('#phase_input').change ->
        $('#chr_vote_phase').val( @value )

  @submit_chr_vote: (face_id)->
    $('#chr_vote_face_id').val(face_id)

    $('form.chr_vote')[0]?.submit()

