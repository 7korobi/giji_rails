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
  head.location = window.location
  window.onhashchange = =>
    head.$digest()

  head.$watch 'location.hash', (oldVal, newVal)->
    console.log [oldVal, newVal, head]

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
      switch head.tab.mode._value
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

    console.log ["templates", templates]
    main.title ||= '人狼議事'

  window.TAB = ($scope)->
    tab = head.tab = $scope

    new Navi tab, 'navi'
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
      new PageNavi tab, 'page'
        options:
          on: 'search'
          current: 1
          current_type: Number
          is_cookie: false
      tab.page._items = gon.page

    if gon?.event?.messages

      new PageNavi tab, 'page'
        options:
          per: 50
          on: 'hash'
          current: 1
          current_type: Number
          is_cookie: false

      mode_filters =
        memo: /^(.M)|([AM]S)/
        all:  /^.[^M]/
        mob:  /^[AmSIiVG][^M]/
        clan: /^[AmSIiWPX][^M]/
        open: /^[AmSIi][^M]/

      new Navi tab, 'mode'
        options:
          on: 'hash'
          current: 'open'
          is_cookie: false
        button:
          memo: '相談'
          all:  '混合'
          mob:  '裏方'
          clan: '仲間'
          open: '議事'

      tab.mode._watch.push ()->
        tab.page._items = gon.event.messages.filter (log)->
          filter = mode_filters[tab.mode._value]
          log.logid.match filter

      tab.page._watch.push (page)->
        page_per = tab.page._params.per
        from = (page - 1) * page_per
        to   =  page      * page_per - 1
        head.main.messages = (tab.page._items[idx] for idx in [from .. to])
        box?.window.scrollTop( $(".inframe").offset().top - 20 )

  window.CSS = ($scope)->
    css = head.css = $scope

    new Navi css, 'width'
      options:
        on: 'hash'
        current: 800
        current_type: Number
        is_cookie: true
      button:
        480: 480
        800: 800

    new Navi css, 'theme'
      options:
        on: 'hash'
        current: 'wa'
        is_cookie: true
      button:
        cinema: '煉瓦'
        night: '月夜'
        star: '蒼穹'
        wa:  '和の国'

    move = ()->
      value = "#{css.theme._value}#{css.width._value}"
      date    = new Date
      css.href = "#{URL.rails}stylesheets/#{value}.css"

      head.main.h1 =
        type: OPTION.head_img[value][ Math.ceil((date).getTime() / 60*60*12) % 2]
      switch Number(css.width._value)
        when 480
          head.main.h1.width = 458
        when 800
          head.main.h1.width = 580
      head.main.h1.path = "#{URL.rails}images/banner/title#{head.main.h1.width}#{head.main.h1.type}.jpg"
      resize()

    css.width._watch.push move
    css.theme._watch.push move

    if_resize.push ->
      fold = false
      width = box.window.width()

      switch css.width._value
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

  console.log [head, document.cookie, location]
