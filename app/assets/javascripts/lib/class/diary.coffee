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