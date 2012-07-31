cookie_expire =
  hours: 1

navis = []

class Navi
  constructor: ($scope, key, def)->
    @_params = def.options
    @_params.current_type or= String
    if def.button?
      @_button = def.button
      @_keys = def.button.keys()

    $scope[key] = @
    navis.push @
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

      list = new Object
      for navi in navis
        options = navi._params
        list[options.on] = ""
      for navi in navis
        options = navi._params
        cmd = "&#{navi._key}=#{navi._value}"
        list[options.on] += cmd
        if options.is_cookie
          expire = new Date().advance cookie_expire
          document.cookie = "#{cmd}; expires=#{expire.toGMTString()}; path=/"
      for field, val of list
        location[field] = val


  move: (target)->
    @_value = target

  _move: ()->
    target = @_value
    for key, val of @_button
      @[key] = null
    @[target] = 'btn-success'


class PageNavi extends Navi
  paginate: (target)->
    @_value = @_button[target]

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

    for key, val of show
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
      box.window.scroll => @calc()

  calc: ()->
    box_height = @box.height()
    win_height = window.innerHeight ||
      box.window.height() ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    height = win_height - box_height

    box_width = @box.width()
    win_width = box.window.width()
    width = win_width - box_width

    left = @dx + width if @dx < 0
    left = @dx         if   0 < @dx
    top = @dy + height if @dy < 0
    top = @dy          if   0 < @dy
    @box.to_z_front()
    @box.css
      top:  top  + "px"
      left: left + "px"


app = angular.module '', []
app.config ($interpolateProvider)->

jQuery ->
  window.box =
    contentframe: $('#contentframe')
    sayfilter: $("#sayfilter")
    viewport: $("head meta[name=\"viewport\"]")
    outframe: $("#outframe")
    buttons: $("#buttons")
    notepad: $("#notepad")
    window: $(window)

    pagenavi_fullwidth: $("#contentframe").find(".pagenavi")
    navimode_fullwidth: $("#contentframe").find("""
        h2, h3,
        .turnnavi,
        .row_all,
        .ADMIN,     .MAKER,     .INFONOM, .INFOSP, .INFOWOLF,
        .mes_admin, .mes_maker, .info,    .infosp, .infowolf,
        .caution,
        .action_bm
    """)

  angular.bootstrap(document);

  sayfilter.fix = new FixedBox 1, 1, window.sayfilter
  buttons.fix = new FixedBox 1,-1, window.buttons

  unless document.cookie.layoutfilter > 0
    contentframe.className = "contentframe_navileft"
    outframe.className = "outframe_navimode"
    box.notepad.after "<div id=\"notepad_after\" style=\"height:55px\"></div>"

  box.window.resize ->
    box.window.scroll()

  window.onorientationchange = ->
    box.window.resize()

#  box.window.resize ->
#    $('.drag').css
#      left: box.contentframe.offset().left + "px"

  box.window.scroll ->
    box.outframe.height box.contentframe.height()

  box.window.resize()


