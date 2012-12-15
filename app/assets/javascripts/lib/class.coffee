angular.module("giji.config", [], ($routeProvider, $locationProvider)->
  $locationProvider.html5Mode true
).value "giji.config", {}
angular.module "giji.filters", ["giji.config"]
angular.module "giji.directives", ["giji.config"]
angular.module "giji", ["giji.filters", "giji.directives", "giji.config"]

class Navi
  @list = {}

  move: (newVal)->
    @value = @params.current_type newVal if newVal?
    @value

  choice: ->
    @select.find (o)=> o.val == @value

  popstate: ()->
    l = Object.fromQueryString(location[@params.location].replace(/^[#?]/,""))[@key] if location[@params.location]
    c = document.cookie.match(@chk)?[2] if @params.is_cookie?
    @value = @params.current_type l or c or ""
    @value = "" if @select?.all((o)=> @value != o.val)
    @value or= @params.current_type @params.current

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

    @chk = ///
      (^|\s)#{key}=(\w+)
    ///
    @popstate()

    @scope.$watch "#{@key}.value", (value,oldVal)=>
      @_move()

      for func in @watch
        func @value

      navis = Navi.list.values()
      list = new Object
      for navi in navis
        options = navi.params
        if navi.value
          cmd = "#{navi.key}=#{navi.value}"

          if options.location?
            list[options.location] or= []
            list[options.location].push cmd

          if options.is_cookie
            expire = new Date().advance OPTION.cookie.expire
            document.cookie = "#{cmd}; expires=#{expire.toGMTString()}; path=/"


      if list.search
        val_search = "?" + list.search.join "&"
        if location.search != val_search
          location.search = val_search

      if list.hash
        val_hash   = "#" + list.hash.join   "&"  if list.hash
        if location.hash   != val_hash
          win.history null, null, val_hash

  _move: ()->
    if @select?
      for o in @select
        if o.val == @value
          o.class = 'btn-success'
          @show[o.val] = true
        else
          o.class = null
          @show[o.val] = false

class ArrayNavi extends Navi
  constructor: ($scope, key, def)->
    super

  popstate: ()->
    l = Object.fromQueryString(location[@params.location].replace(/^[#?]/,""))[@key] if location[@params.location]
    c = document.cookie.match(@chk)?[2] if @params.is_cookie?
    @value = []
    (l or c).split(",").each (o)->
      return if @select?.all((o)=> @value != o.val)
      @value.push @params.current_type o

  move: (newVal)->
    if newVal?
      newVal = @params.current_type newVal
      if @value.any newVal
        @value = [newVal]
      else
        @value.push newVal
    else
      @value

  choice: ->
    @select.find (o)=> o.val == @value[0]

  choices: ->
    @value.map (value)=>
      @select.find (o)-> o.val == value

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


class FixedBox
  @list = {}

  constructor: (dx, dy, fixed_box)->
    @dx = dx
    @dy = dy
    @box = fixed_box

    if @box?
      @box.css
        left: 0
        top:  0
      $(window).on 'resize', => @scroll()
      $(window).on 'scroll', => @scroll()

  scroll: ()->
    width  = win.width  - @box.width()
    height = win.height - @box.height()

    @left = @dx + width if @dx < 0
    @left = @dx         if   0 < @dx
    @top = @dy + height if @dy < 0
    @top = @dy          if   0 < @dy

    win.left = window.pageXOffset
    win.top  = window.pageYOffset

    win.left = win.max.left if win.max.left < win.left
    win.top  = win.max.top  if win.max.top  < win.top
    win.left = 0            if                win.left  < 0
    win.top  = 0            if                win.top   < 0

    @box.to_z_front()

    if 1 < win.zoom  or  head.browser.android
      @box.css
        position: "absolute"
      left = @left + win.left
      top  = @top  + win.top
      @translate(left, top)
    else
      @box.css
        position: "fixed"
      left = @left + win.left
      top  = @top
      @translate(left, top)

  translate: (left, top)->
    if head.csstransitions
      transition = "all 250ms ease"
      transform  = "translate(#{left}px, #{top}px)"
      if head.browser.webkit
        @box.css "-webkit-transition", transition
        @box.css "-webkit-transform",  transform

      if head.browser.mozilla
        @box.css "-moz-transition", transition
        @box.css "-moz-transform",  transform

      if head.browser.ie
        @box.css "-ms-transition", transition
        @box.css "-ms-transform",  transform

      if head.browser.opera
        @box.css "-o-transition", transition
        @box.css "-o-transform",  transform

      @box.css "transition", transition
      @box.css "transform",  transform

    else
      @box.animate
        left: left + "px"
        top:  top  + "px"
      ,
        duration: 'fast'
        easing: 'swing'
        queue: false


Navi.popstate = ()->
  for navi in Navi.list
    navi.popstate()

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

