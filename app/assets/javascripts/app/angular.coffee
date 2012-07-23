if_resize = []
if_scroll = []

resize = ->
  if box?
    scroll()
    for cb in if_resize
      cb()

scroll = ->
  if box?
    for cb in if_scroll
      cb()


class Navi
  constructor: (field, def)->
    @_button = def.button
    @_keys = def.button?.keys()
    @_params = new Params(field)
    @_params.merge def.options
    @move @_params.val()

  move: (target)->
    @_params.change target
    @_filter(target) if @_filter?
    for key, val of @_button
      @[key] = null
    @[target] = 'btn-success'

class PageNavi extends Navi
  constructor: (field, def)->
    @_items = []
    @_params = new Params(field)
    @_params.merge def.options
    @_params.per ||= 1
    @move()

  paginate: (target)->
    page = @_button[target]
    @_params.change page
    @move page

  move: (page)->
    page ||= @_params.val().toNumber()
    @_filter(page) if @_filter?
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
    console.log [n,show,@]

class FixedBox
  constructor: (dx, dy, box)->
    @dx = dx
    @dy = dy
    @box = $(box)
    box.style.position = "fixed"
    if_resize.push => @calc() if @box?

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
      left: left
      top:  top


app = angular.module '', []
app.config ($interpolateProvider)->

jQuery ->
  angular.bootstrap(document);

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

  unless document.cookie.layoutfilter > 0
    contentframe.className = "contentframe_navileft"
    outframe.className = "outframe_navimode"
    sayfilter.fix = new FixedBox 1, 1, window.sayfilter
    buttons.fix = new FixedBox 1,-1, window.buttons
    box.notepad.after "<div id=\"notepad_after\" style=\"height:55px\"></div>"


  window.onorientationchange = resize
  box.window.resize resize
  box.window.scroll scroll
  resize()


if_resize.push ->
  $('.drag').css
    left: box.contentframe.offset().left

if_scroll.push ->
  box.outframe.height box.contentframe.height()


window.HEAD = ($scope)->
  head = $scope
#  if "onhashchange" of window and (document.documentMode is `undefined` or document.documentMode > 7)
#    window.onhashchange = =>
#      head.apply()

  window.MAIN = ($scope, $interpolate)->
    main = head.main = $scope

    templates = {}
    for idx,val in $("script[type='text/x-tmpl']")
      html = $(val).html()
      templates[val.id] = $interpolate(html)

    if gon?.event?.messages
      for key,val of gon.templates
        templates[key] = $interpolate(val)

      main.anchors = []

      gon.turns = []
      gon.turns[gon.event.turn] = gon.event.messages

      main.event = gon.event
      main.event.name = gon.event.turn + "日目"

      $('#messages').on 'click', '[href_eval]', (e)->
        popup_apply = (e, item)->
          idx = main.anchors.indexOf item
          if idx < 0
            main.anchors.push item
          else
            main.anchors.removeAt idx, main.anchors.length
          item.z = Date.now()
          item.top = e.pageY + 16
          main.$apply()

        popup = (turn, ank)->
          href = location.origin + location.pathname

          popup_find = ()->
            return null unless gon.turns[turn]
            item = gon.turns[turn].find (log)->
              log.logid == ank
            if item
              popup_apply e, item
            item

          popup_ajax = (turn)->
            return null if gon.turns[turn]
            href = href.replace("/#{gon.event.turn}/messages","/#{turn}/messages")

            $.get href, {}, (data) =>
              code = data.match(/gon.event=(.*)<\/script>/)[1]
              json = eval """(function(){ return #{code} })()"""
              gon.turns[json.turn] = json.messages
              return  if  popup_find()
            href

          return  if  popup_ajax turn
          return  if  popup_find()
          return  if  popup_ajax turn - 1

        eval $(e.target).attr('href_eval')
    if gon?.story
      main.title = gon.story.name || '人狼議事'

    lax_date = (date)->
      date.format(Date.ISO8601_DATE + '({dow}) {tt}{12hr}時' + postfix)
    lax_time = (date)->
      now = date.addMinutes(15)
      postfix = ["頃","半頃"][(date.getMinutes()/30).floor()]
      date.format(Date.ISO8601_DATE + '({dow})  {TT}{hh}時' + postfix, 'ja')

    decolate = (log)->
      switch head.tab.mode._params.val()
        when 'open'
          ret = log.replace ///
            (/\*)(.*?)(\*/|$)
          ///g,'<span>$1 B.G $3</span>'
          ret = null  if  "" == ret.removeTags('span').trim()
          ret
        else
          log.replace ///
            (/\*)(.*?)(\*/|$)
          ///g,'<em>$1$2$3</em>'

    anker = (log)->
      log.replace /<mw (\w+),(\d+),([^>]+)>/g, (key, ank, turn, id)->
        """ <a class="res_anchor" href_eval="popup(#{turn},'#{ank}')">&gt;&gt;#{id}</a> """

    main.anchor = (turn, ank)->
      console.log [turn, ank]

    main.log = (log)->
      return unless log
      log = log.clone()
      log.time = lax_time Date.create log.date
      log.text = decolate anker log.log
      template = GIJI.message.template.subid[log.subid] || GIJI.message.template.mestype[log.mestype]
      templates[template](log)

    console.log templates
    main.title ||= '人狼議事'

  window.TAB = ($scope)->
    tab = head.tab = $scope

    tab.navi = new Navi 'navi'
      options:
        on: 'hash'
        current: 'link'
        is_cookie: false
      button:
        link: '移動'
        info: '情報'
        calc: '計算'
        blank: 'x'

    if gon?.page
      tab.page = new PageNavi 'page',
        options:
          on: 'search'
          current: 1
          is_cookie: false
      tab.page._items = gon.page
      tab.page.move()

    if gon?.event?.messages
      mode_filters =
        memo: /^(.M)|([AM]S)/
        all:  /^.[^M]/
        mob:  /^[AmSIiVG][^M]/
        clan: /^[AmSIiWPX][^M]/
        open: /^[AmSIi][^M]/

      tab.mode = new Navi 'mode'
        options:
          on: 'hash'
          current: 'all'
          is_cookie: false
        button:
          memo: '相談'
          all:  '混合'
          mob:  '裏方'
          clan: '仲間'
          open: '議事'

      tab.page = new PageNavi 'page'
        options:
          per: 50
          on: 'hash'
          current: 1
          is_cookie: false

      tab.$watch 'tab.mode._params.val()', (newValue, oldValue)->
        console.log ['tab.mode.filter', newValue, oldValue]
      tab.$watch 'tab.page._items', (newValue, oldValue)->
        console.log ['tab.page.filter', newValue, oldValue]
      tab.mode._filter = ()->
        tab.page._items = gon.event.messages.filter (log)->
          filter = mode_filters[tab.mode._params.val()]
          log.logid.match filter
        tab.page.move()

      tab.page._filter = (page)->
        page_per = tab.page._params.per
        from = (page - 1) * page_per
        to   =  page      * page_per - 1
        head.main.messages = (tab.page._items[idx] for idx in [from .. to])
        box?.window.scrollTop( $(".inframe").offset().top - 20 )

      tab.mode._filter()

  window.CSS = ($scope)->
    css = head.css = $scope
    css.move = (target)=>
      @params.change(target)
      [_, theme, width] = target.match /([a-z]*)([0-9]*)/
      width = width.toNumber()

      date    = new Date
      current = "#{theme}#{width}"
      css.merge
        href: "#{URL.rails}stylesheets/#{current}.css"
        width: width
        name:  {}

      css.name[current] = "btn-success"
      head.main.h1 =
        type: OPTION.head_img[current][ Math.ceil((date).getTime() / 60*60*12) % 2]
      switch width
        when 480
          head.main.h1.width = 458
        when 800
          head.main.h1.width = 580
      head.main.h1.path = "#{URL.rails}images/banner/title#{head.main.h1.width}#{head.main.h1.type}.jpg"
      resize()

    if_resize.push ->
      fold = false
      width = box.window.width()

      switch css.width
        when 480
          small = 122 + 80 + 20
          if      small < width - 462
            info_width  = width - 462
          else if small < width - 462 + 110
            info_width  = width - 462 + 110
            fold = 110
          else
            info_width  = width
        when 800
          if       200  <  width - 770
            info_width  = (width - 770)/2 + 190
          else if  -10  <  width - 770
            info_width  = (width - 770)/2 + 190 + 116
            fold = 120
          else
            info_width  = width

      if fold
        dst_padding  = fold
        dst_pagenavi = fold + 10
      else
        dst_padding  = 11
        dst_pagenavi = 48

      box.sayfilter.width info_width
      box.navimode_fullwidth.css
        paddingLeft: dst_padding
      box.pagenavi_fullwidth.css
        paddingLeft: dst_pagenavi

    @params = new Params('css')
    @params.merge
      current: 'wa800'
      is_cookie: true
      on: 'hash'
    if "onhashchange" of window and (document.documentMode is `undefined` or document.documentMode > 7)
      window.onhashchange = =>
        css.move @params.val()
    css.move @params.val()

  console.log [head, document.cookie, location]
