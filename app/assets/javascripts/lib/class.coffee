angular.module("giji.config", [], ($routeProvider, $locationProvider)->
  $locationProvider.html5Mode true
).value "giji.config", {}
angular.module "giji.filters", ["giji.config"]
angular.module "giji.directives", ["giji.config"]
angular.module "giji", ["giji.filters", "giji.directives", "giji.config"]

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
      win.on_resize(=> @scroll())
      win.on_scroll(=> @scroll())

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


class DiaryItem
  constructor: (text, diary)->
    @text = text
    @diary = diary

class Diary
  constructor: (f)->
    @version = 1
    @form = f
    @finder = (o)=>
      @ == o.diary

  history: ->
    Diary.history.findAll @finder

  versions: ->
    size = @history().length
    result = []
    result = [@version..size].reverse() if @version <= size
    result.add         @version - 1 if 1 < @version 
    result.add         @version - 2 if 2 < @version 
    result

  at: ->
    @history()[@version - 1]

  title: ->

  commit: ->
    Diary.base.commit(@)
    @version = @history().length

  back: (version)->
    @version = version
    @form.text = @at().text || ""
  
  clear: ->
    @commit @form.text
    @form.text = ""

  @history = []

Diary.base = new Diary
Diary.base.finder = -> true
Diary.base.head = ->
  if now = Diary.base.at()?.diary.form
    "#{now.longname}#{now.title}"
  else
    "手帳"

Diary.base.commit = (diary)->
  return if diary.form.text.length == 0
  item = new DiaryItem(diary.form.text, diary)
  Diary.history.remove item
  Diary.history.add item
  Diary.base.version = Diary.history.length + 1

Diary.base.form =
  text: ""
