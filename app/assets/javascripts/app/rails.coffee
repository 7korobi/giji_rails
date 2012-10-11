
app = angular.module '', []
app.config ($interpolateProvider)->

GIJI.turns = []
GIJI.templates = {}

GIJI.change_turn = (href, turn)->
  href.replace(///
    /\d+/messages
  ///,"/#{turn}/messages")

GIJI.gon = (href, func)->
  $.get href, {}, (data) =>
    codes = data.match ///
      <script.*?>[\s\S]*?</script>
    ///ig
    GIJI.ajax_url = href
    GIJI.ajax_log = data
    GIJI.ajax_data_log = []
    for dom in codes
      code = $(dom).text()
      GIJI.ajax_data_log.push code
      if code.match(/gon/)?
        eval code
    func()

EFFECT = ($scope, $interpolate)->
  $('dl.accordion').find("dd").hide()
  $('dl.accordion').on 'click', 'dt', ->
    $(this).parents('dl').find("dd").hide()
    $(this).next().show 'fast'

  $(window).resize ->
    height = window.innerHeight || $(window).height()
    width = window.innerWidth || $(window).width()

    if 'info' == $scope.navi.move() && $scope.potofs?
      small = 350

    switch $scope.width.move()
      when 480
        small or= 222
        info_left = width - 462
        if      small < info_left
          info_width  = info_left
        else
          info_width  = width
        content  = "contentframe"
        outframe = "outframe"

      when 800
        small or= 270
        info_left  = (width - 770)/2 + 189
        if     small  < info_left
          info_width  = info_left
          content  = "contentframe_navileft"
          outframe = "outframe_navimode"
        else
          info_width  = width
          content  = "contentframe"
          outframe = "outframe"

    $("#contentframe")[0].className = content
    $("#outframe")[0].className = outframe
    $("#sayfilter").animate
      width: info_width
    ,
      duration: 'fast'
      easing:  'swing'
      queue:     false

INIT = ($scope, $interpolate)->
  gon.keys (key, val)->
    $scope[key] = val

  if gon.story?
    $scope.title = gon.story.name

    $scope.story.card.discard_names = $scope.countup(gon.story.card.discard).join '、'
    $scope.story.card.event_names   = $scope.countup(gon.story.card.event).join '、'
    $scope.story.card.config_names  = $scope.countup(gon.story.card.config).join '、'
    $scope.story.option_helps = gon.story.options.map (o)-> SOW.options[o].help

  if gon.potofs?
    live_potofs = gon.potofs.filter (o)->
      o.deathday < 0

    potofs = gon.potofs.map (potof)->
      if potof.bonds?
        potof.bonds = potof.bonds.map (pid)->
          gon.potofs[pid]
      if potof.pseudobonds?
        potof.pseudobonds = potof.pseudobonds.map (pid)->
          gon.potofs[pid]

      if potof.role?
        win_check = (potof)->
          win_by_role = (list)->
            for role in potof.role
              win = list[role]?.win
              return win if win
            null
          SOW.loves[potof.love]?.win || win_by_role(SOW.gifts) || win_by_role(SOW.roles) || "NONE"
        potof.win = win_check potof
        potof.win_name = SOW.wins[potof.win]?.name

        potof.role_names  = potof.role.map $scope.rolename

      if potof.select?
        potof.select_name = $scope.rolename potof.select

      potof.live or= ""
      potof.auth = potof.sow_auth_id
      potof.head = SOW.live_caption[ potof.live ]

      potof.bond_names       = potof.bonds.map       (o)-> o.name
      potof.pseudobond_names = potof.pseudobonds.map (o)-> o.name
      if potof.deathday < 0
        potof.stat = SOW.live[ potof.live ]
      else
        potof.stat = "#{potof.deathday}日 #{SOW.live[ potof.live ]}"

      potof.text = []
      SOW.maskstates.keys (mask, text)->
        potof.text.push " #{text}" if 0 == potof.rolestate & mask
      potof.text.push " <i class='icon-check'></i>"       if 'pixi' == potof.sheep
      potof.text.push " <i class='icon-heart'></i>"       if 'love' == potof.love
      potof.text.push " <i class='icon-thumbs-down'></i>" if 'hate' == potof.love

      potof.said = ""
      potof.said_num = 0
      if 0 < potof.point.saidcount
        potof.said_num += potof.point.saidcount
        potof.said     += " #{potof.point.saidcount}回"
      if 0 < potof.point.saidpoint
        potof.said_num += potof.point.saidpoint
        potof.said     += " #{potof.point.saidpoint}pt"

      potof
    .sortBy (o)-> o.deathday

    $scope.potofs = potofs
    $scope.sum =
      actaddpt: (live_potofs.sum (o)-> o.point.actaddpt)

  if gon.event?.messages?
    $scope.event.name or= gon.event.turn + "日目"

  if gon.pages?
    PageNavi.push $scope, 'page'
      options:
        on: 'search'
        current: 1
        is_cookie: false
    $scope.page.items = gon.pages

RAILS = ($scope, $interpolate)->
  navi =
    options:
      current: 'link'
      is_cookie: false
      on: 'hash'
    button:
      link: '移動'
      info: '情報'
      calc: '計算'
      blank: 'x'

  width =
    options:
      current: 800
      current_type: Number
      is_cookie: true
      on: 'hash'
    button:
      480: "480"
      800: "800"

  theme =
    options:
      is_cookie: true
      on: 'hash'
    button: {}

  mode_filters =
    memo: /^(.M)|([AM]S)/
    all:  /^.[^M]/
    mob:  /^[qAmSIiVG][^M]/
    clan: /^[qAmSIiWPX][^M]/
    open: /^[qAmSI][^M]/

  $scope.title = '人狼議事'

  $scope.refresh = ->
    popover = $('a[title]')
    popover.each (idx, dom)->
      $(dom).attr "data-content", $(dom).attr("title")
      $(dom).attr "title", ''
      $(dom).attr "rel", 'popover'
    $('[rel="popover"]').popover()

  anime = ()->
    if $scope.event.is_news && $scope.messages_last?
      logid = $scope.messages_last.logid
      anime_scroll = "a[name=#{logid}]"
      target = $(anime_scroll).offset()

    unless target?
      anime_scroll = ".inframe"
      target = $(anime_scroll).offset()

    $('.text').each (idx, dom)->
      $(dom).html link $(dom).html()

    $(window).scrollTop  target.top - 20

    $scope.refresh()

  anime = anime.throttle(2000)

  if 'PAN' == gon?.folder
    theme.options.current = 'sow'
    theme.button = GIJI.themes.pan
  else
    theme.options.current = 'wa'
    theme.button = GIJI.themes.giji
  if gon?
    $scope.remove_card = (at, idx)->
      story.card[at].removeAt idx

    $scope.rolename = (o)->
      SOW.roles[o]?.name || SOW.gifts[o]?.name || SOW.events[o]?.name || o || ""

    $scope.countup = (list)->
      counts = []
      group = list.groupBy()
      group.keys (key,val)->
        counts.push [val.length, key]

      counts.sortBy ([size, key])->
        size
      .map ([size, key])->
        if 1 < size
          "#{$scope.rolename(key)}x#{size}"
        else
          "#{$scope.rolename(key)}"

    INIT $scope, $interpolate

    if $scope.event?.messages?
      Navi.push $scope, 'mode'
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

      Navi.push $scope, 'row'
        options:
          current: 50
          is_cookie: true
          current_type: Number
        button:
          10: '10行'
          20: '20行'
          30: '30行'
          50: '50行'
          100: '100行'

      $scope.row.watch.push (row)->
        $scope.page.params.per = row

      Navi.push $scope, 'order'
        options:
          current: 'asc'
          is_cookie: true
        button:
          asc:  '上から下へ'
          desc: '下から上へ'

      $scope.order.watch.push (order)->
        $scope.page.params.order = order

      PageNavi.push $scope, 'page'
        options:
          current: 1
          is_cookie: false

      $scope.page.watch.push (page)->
        page_per = $scope.page.params.per

        if $scope.event.is_news
          to   = $scope.page.items.length
          from = to - page_per
          $scope.page.move $scope.page.length
          $scope.event.is_rowover = (0 < from)
        else
          to   =  page      * page_per - 1
          from = (page - 1) * page_per
        $scope.messages = $scope.page.items.to(to).from(from)
        $scope.messages_last = $scope.messages.last()
        $scope.messages = $scope.messages.reverse() if "desc" == $scope.page.params.order
        $scope.anchors = []
        anime.delay(300)

      message_refresh = (mode)->
        filter = mode_filters[mode]
        $scope.page.items = $scope.event.messages.filter (log)->
          log.logid.match filter
      $scope.mode.watch.push message_refresh
      $scope.$watch "event.messages", -> message_refresh $scope.mode.move()

      if $scope.event.is_news
        $scope.mode.move 'all'
      else
        GIJI.turns[$scope.event.turn] = $scope.event

  if JST?
    for key,val of JST
      GIJI.templates[key] = $interpolate(val)

  $scope.location = window.location
  if window.onhashchange?
    window.onhashchange = =>
      $scope.$digest()

  $scope.$watch 'location.hash', (oldVal, newVal)->
  $scope.$watch 'title', (oldVal, newVal)->
    $('title').text(newVal);

  $scope.link = GIJI.link
  for idx,val in $("script[type='text/x-tmpl']")
    html = $(val).html()
    GIJI.templates[val.id] = $interpolate(html)

  $scope.drag = (log)->
    "z-index": log.z
    "top":     log.top

  click_eval = (e)->
    sort_potofs = (tgt, zero)->
      reverse = (tgt == @tgt)
      for potof in $scope.potofs
        potof[tgt] or= zero
      $scope.potofs = $scope.potofs.sortBy tgt, reverse
      $scope.$apply()
      @tgt = reverse || tgt

    navi = (link)->
      $scope.navi.move link
      $scope.$apply()

    cancel_say = (logid)->
      params = Object.fromQueryString(location.search)
      params.cmd   = 'cancel'
      params.queid = logid
      GIJI.cancel_log = $.param params
      location.search = GIJI.cancel_log

    popup_apply = (e, item)->
      idx = $scope.anchors.indexOf item
      if idx < 0
        item.z = Date.now()
        item.top = e.pageY + 24
        $scope.anchors.push item
        $scope.$apply()
        $(".drag [name=#{item.logid}]").parents(".drag").hide().fadeIn 'fast'
      else
        $(".drag").fadeOut 'fast', ->
          $scope.anchors.removeAt(idx)
          $scope.$apply()

    popup = (turn, ank)->
      href = location.href.replace location.hash, ""

      popup_find = ()->
        return null unless GIJI.turns[turn]
        item = GIJI.turns[turn].messages.find (log)->
          log.logid == ank
        if item
          popup_apply e, item
        item

      popup_ajax = (turn)->
        return null if GIJI.turns[turn]
        href = GIJI.change_turn href, turn
        GIJI.gon href, =>
          GIJI.turns[gon.event.turn] = gon.event
          return  if  popup_find()
        href

      return  if  popup_ajax turn
      return  if  popup_find()
      return  if  popup_ajax turn - 1

    eval $(e.target).attr('href_eval')

  $('#messages').on  'click', '[href_eval]', click_eval
  $('#sayfilter').on 'click', '[href_eval]', click_eval

  lax_date = (date)->
    date.format(Date.ISO8601_DATE + '({dow}) {tt}{12hr}時' + postfix)
  lax_time = (date)->
    if date?
      timespan = (new Date() - date)/1000
      if timespan < 30 * 60
        return "25秒以内"                    if 0   < timespan < 25
        timespan = (timespan / 10)
        return "#{timespan.round()}0秒経過"  if 2.5 < timespan <  6
        timespan = (timespan /  6)
        return "#{timespan.round()}分経過"   if 1   < timespan < 10
        timespan = (timespan / 10)
        return "#{timespan.round()}0分経過"  if 1   < timespan <  6
        timespan = (timespan /  6)
        return "#{timespan.round()}時間経過" if 1   < timespan < 24
      else
        now = date.clone()
        now.addMinutes(15)
        postfix = ["頃","半頃"][(now.getMinutes()/30).floor()]
        return now.format(Date.ISO8601_DATE + '({dow})  {TT}{hh}時' + postfix, 'ja')
    else
      return "....-..-..(？？？) --..時頃"

  $scope.lax_date = lax_date
  $scope.lax_time = lax_time

  decolate = (log)->
    switch $scope.mode.move()
      when 'open'
        ret = log.replace ///
          (/\*)(.*?)(\*/|$)
        ///g,'<span>$1 B.G $3</span>'
        # ret = ""  if  "" == ret.removeTags('span').trim()
        ret
      else
        log.replace ///
          (/\*)(.*?)(\*/|$)
        ///g,'<em>$1$2$3</em>'

  anchor = (log)->
    log.replace /<mw (\w+),(\d+),([^>]+)>/g, (key, a, turn, id)->
      """ <code href_eval="popup(#{turn},'#{a}')">&gt;&gt;#{id}</code> """

  random = (log)->
    log.replace /<rand ([^>]+),([^>]+)>/g, (key, val, cmd)->
      """ <a rel="popover" data-content="#{cmd}" class="badge">#{val}</a> """

  link_regexp = ///
      (\w+)://([^/]+)([^<>）］】」\s]+)
  ///
  link_regexp_g = link_regexp.setFlags('g')

  link = (log)->
    return log unless log
    text = log.removeTags('a')
    uris = text.match link_regexp_g
    if uris
      for uri in uris
        [uri, protocol, host, path] = uri.match link_regexp
        data = """
          #{protocol}://#{host} <br>
          #{path}
        """
        log = log.replace uri, """ <span class="badge"><a href="#{uri}" target="_blank">LINK</a> - <a rel=popover data-content="#{data}">#{protocol}</a></span> """
    return log

  $scope.log_refresh = (log)->
    log.time = lax_time Date.create log.date
    if "q" == log.logid[0] && (new Date() - log.date) < 25 * 1000
      log.cancel_btn = """<span class="btn btn-danger"><i class="icon-remove" href_eval='cancel_say("#{log.logid}")'></i></span>"""
    else
      log.cancel_btn = ""

  $scope.log = (log)->
    return unless log?
    if log.face_id? && log.csid?
      log.img  or= $scope.img_cid(log.csid, log.face_id)
    log.text = decolate anchor link random log.log

    [_, mark, num] = log.logid.match(/(\D)\D+(\d+)/)
    if SOW.log.anchor[mark]?
      log.anchor or= "(#{SOW.log.anchor[mark]}#{Number(num)})"
    else
      log.anchor or= " "
    log.template or= "giji/" + (GIJI.message.template.subid[log.subid] || GIJI.message.template.mestype[log.mestype])
    if 'cast' == GIJI.message.template.mestype[log.mestype]
      log.log = """ <div href_eval="navi('info')" class="badge"> CAST </div> """

    $scope.log_refresh log
    GIJI.templates[log.template](log)

  move = ()->
    value = "#{$scope.theme.move()}#{$scope.width.move()}"
    date    = new Date
    $scope.css = "#{URL.resource}/stylesheets/#{value}.css"
    $("#giji_css").attr 'href', $scope.css

    $scope.h1 =
      type: OPTION.head_img[value][ (date / 60*60*12).ceil() % 2]
    switch $scope.width.move()
      when 480
        $scope.h1.width = 458
      when 800
        $scope.h1.width = 580
    $scope.h1.path = "#{URL.resource}/images/banner/title#{$scope.h1.width}#{$scope.h1.type}.jpg"
    $(window).resize()

  if window.opera
    $scope.width =
      value: 800
    $scope.theme =
      value: 'cinema'
  else
    Navi.push $scope, 'width', width
    Navi.push $scope, 'theme', theme

    $scope.width.watch.push move
    $scope.theme.watch.push move

  Navi.push $scope, 'navi',  navi
  $scope.navi.watch.push ->
    $(window).resize()

  $ ->
    anime.delay(500)

  $scope.form =
    csid_cid: null
  $scope.img_csid_cid = (csid_cid)->
    if csid_cid?
      [csid, cid] = csid_cid.split '/'
      $scope.img_cid csid, cid
    else
      $scope.img_cid null, 'undef'
  $scope.img_cid = (csid, face_id)->
    csid = GIJI.csids[csid]
    csid or= 'portrate'
    "#{URL.resource}/images/#{csid}/#{face_id}.jpg"

  EFFECT $scope, $interpolate

