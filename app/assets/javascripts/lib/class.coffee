class FixedBox
  @list = {}

  constructor: (dx, dy, fixed_box, force_zoom)->
    @dx = dx
    @dy = dy
    @box = fixed_box
    @force_zoom = force_zoom

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

    if 1 < win.zoom  or  head.browser.android  or  @force_zoom
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

FixedBox.push = (dx, dy, key, force_zoom)->
  FixedBox.list[key] or= new FixedBox dx, dy, $(key), force_zoom


class Form
  @deploy: ->
    $(document).ready =>
      $('#phase_input').change ->
        $('#chr_vote_phase').val( value )

  @submit_chr_vote: (face_id)->
    $('#chr_vote_face_id').val(face_id)
    $('form.chr_vote')[0]?.submit()


class DiaryHistory
  constructor: (diary)->
    @title = "#{diary.form.longname}#{diary.form.title}"
    @text = diary.form.text
    @key = diary.key

class Diary
  constructor: (f)->
    filter = (o)-> o.jst + o.switch
    @finder = (o)=>
      @key == o.key

    @form = f
    @key = filter f
    @version = @history().length + 1

  history: ->
    _.filter Diary.history, @finder

  versions: ->
    size = @history().length
    result = []
    if @version <= size
      result = [@version..size]
      result.reverse() 
    result.push        @version - 1 if 1 < @version 
    result.push        @version - 2 if 2 < @version 
    result

  at: ->
    @history()[@version - 1]

  title: ->

  commit: ->
    Diary.base.commit(@)
    @version = @history().length + 1

  back: (version)->
    @version = version
    @form.text = @at().text || ""
  
  clear: ->
    @commit @form.text
    @form.text = ""

  @history = []

Diary.base = new Diary
  text: ""

Diary.base.finder = -> true
Diary.base.head = ->
  Diary.base.at()
  if now?
    now.title
  else
    "手帳"

Diary.base.commit = (diary)->
  return if diary.form.text.length == 0
  item = new DiaryHistory(diary)
  _.remove Diary.history, (o)->
    o.text == item.text && o.key == item.key
  Diary.history.push item
  Diary.base.version = Diary.history.length + 1
