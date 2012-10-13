
GIJI.turns = []

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


TEMPLATE = ($scope, $compile, $interpolate)->
  GIJI.templates = {}
  GIJI.compiles  = {}

  if JST?
    for key,val of JST
      GIJI.compiles[key]  = $compile(val)

  if JST?
    for key,val of JST
      GIJI.templates[key] = $interpolate(val)

  for idx,val in $("script[type='text/x-tmpl']")
    html = $(val).html()
    GIJI.templates[val.id] = $interpolate(html)

  $scope.replace = (target, style)->
    $(target).html GIJI.compiles[style] $scope

CSS = ($scope)->
  width =
    options:
      current: 800
      current_type: Number
      is_cookie: true
      on: 'hash'
    button: GIJI.widths

  theme =
    options:
      is_cookie: true
      on: 'hash'
    button: {}

  if 'PAN' == gon?.folder
    theme.options.current = 'sow'
    theme.button = GIJI.themes.pan
  else
    theme.options.current = 'cinema'
    theme.button = GIJI.themes.giji

  move = ()->
    value = "#{$scope.theme.value}#{$scope.width.value}"
    date    = new Date
    $scope.css = "#{URL.resource}/stylesheets/#{value}.css"
    $("#giji_css").attr 'href', $scope.css

    $scope.h1 =
      type: OPTION.head_img[value][ (date / 60*60*12).ceil() % 2]
    switch $scope.width.value
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


POOL = ($scope)->
  refresh = ->
    $scope.$apply()
    if $scope.messages?
      $scope.refresh()
      refresh.delay message_timer
  refresh.delay message_timer

  if $scope.event?.is_news
    last_id = $scope.event.messages.last().logid
    ajax_timer = 5 * 60 * 1000
    message_timer = 5 * 1000


    pool = ->
      href = location.href
      GIJI.gon href, =>
        INIT $scope
        last_idx  = $scope.event.messages.findIndex (o)-> last_id == o.logid
        news_size = $scope.event.messages.length - last_idx
        if $scope.story? && 0 < news_size
          $scope.title = "(#{news_size}) #{$scope.story.name}"
        $scope.$apply()
        pool.delay ajax_timer
    pool.delay ajax_timer


EFFECT = ($scope)->
  $('dl.accordion').find("dd").hide()
  $('dl.accordion').on 'click', 'dt', ->
    $(this).parents('dl').find("dd").hide()
    $(this).next().show 'fast'

  $(window).resize ->
    height = win.height
    width  = win.width

    if 'info' == $scope.navi && $scope.potofs?
      small = 300

    switch $scope.width.value
      when 480
        small or= 222
        info_left = width - 462
        if      small < info_left
          info_width  = info_left
          $scope.is_shy = false
        else
          info_width  = width
          $scope.is_shy = true
        content  = "contentframe"
        outframe = "outframe"

      when 800
        small or= 270
        info_left  = (width - 770)/2 + 189
        if     small  < info_left
          info_width  = info_left
          $scope.is_shy = false
          content  = "contentframe_navileft"
          outframe = "outframe_navimode"
        else
          info_width  = width
          $scope.is_shy = true
          content  = "contentframe"
          outframe = "outframe"

    $("#contentframe")[0].className = content
    $("#outframe")[0].className = outframe
    $("#sayfilter").css
      width: info_width

  $(window).scroll ->
    hide = ->
      if $scope.is_shy
        $scope.navi.value = 'blank'
        $scope.$apply()
    hide.delay(1)

INIT = ($scope)->
  return unless gon?

  gon.keys (key, val)->
    $scope[key] = val

  if gon.story?
    $scope.title = gon.story.name

    $scope.story.card.discard_names = $scope.countup(gon.story.card.discard).join '、'
    $scope.story.card.event_names   = $scope.countup(gon.story.card.event).join '、'
    $scope.story.card.config_names  = $scope.countup(gon.story.card.config).join '、'
    $scope.story.option_helps = gon.story.options.map (o)-> SOW.options[o].help
    $scope.story.comment = $scope.decolate gon.story.comment

  if gon.potofs?
    $scope.face_id.potofs = $scope.potofs.map (o)-> o.face_id

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
    event = GIJI.turns[$scope.event.turn]
    if event? && gon.event.is_news?
      event.messages = event.messages.union(gon.event.messages).unique (log)-> log.logid

    $scope.event.name or= gon.event.turn + "日目"
    $scope.face_id.all = $scope.event.messages.map((o)-> o.face_id).unique()
    if $scope.face_id.potofs?
      $scope.face_id.others = $scope.face_id.all.subtract $scope.face_id.potofs

  if gon.pages?
    PageNavi.push $scope, 'page'
      options:
        on: 'search'
        current: 1
        is_cookie: false

    $scope.page.length = gon.pages.length

FILTER = ($scope)->
  mode_current = 'open'
  mode_current = 'all' if $scope.event.is_news

  mode_filters =
    memo: /^(.M)|([AM]S)/
    all:  /^.[^M]/
    mob:  /^[qcAmSIiVG][^M]/
    clan: /^[qcAmSIiWPX][^M]/
    open: /^[qcAmSI][^M]/

  anime = ()->
    if $scope.event.is_news && $scope.page.item_last?
      target = $("a[name=#{$scope.page.item_last.logid}]").offset()

    unless target?
      target = $(".inframe").offset()

    do_refresh = -> $scope.refresh()
    do_scroll  = -> $(window).scrollTop  target.top - 20
    do_refresh.delay 100
    do_scroll.delay  200

  $ ->
    anime()

  Navi.push $scope, 'mode'
    options:
      on: 'hash'
      current: mode_current
      is_cookie: false
    button: GIJI.modes

  Navi.push $scope, 'row'
    options:
      current: 50
      is_cookie: true
      current_type: Number
    button: GIJI.rows

  Navi.push $scope, 'order'
    options:
      current: 'asc'
      is_cookie: true
    button: GIJI.orders

  PageNavi.push $scope, 'page'
    options:
      current: 1
      is_cookie: false

  page = $scope.page
  page.filter_by 'event.messages'
  page.filter_to 'messages'
  page.filter 'event.is_news'

  page.filter 'mode.value', (key, list)->
    filter = mode_filters[key]
    list.filter (o)->
      o.logid.match filter

  page.filter 'face_id.hide', (face_ids, list)->
    face_ids = $scope.face_id.all.subtract $scope.face_id.hide
    list.filter (o)->
      face_ids.some o.face_id

  page.paginate 'row.value', (page_per, list)->
    if $scope.event.is_news
      to   = list.length
      from = to - page_per
      from = 0 if from < 0
      $scope.event.is_rowover = (0 < from)
      $scope.page.value = $scope.page.length

    else
      page_no = $scope.page.value
      to   =  page_no      * page_per - 1
      from = (page_no - 1) * page_per

    list.to(to).from(from)

  page.filter 'order.value', (key, list)->
    $scope.anchors = []
    $('div.popover').remove()
    anime(100)

    if "desc" == key
      list.reverse()
    else
      list

  ###
  mode default
    open => pastlog
    all  => preview, news

  gon.event.messages ->  $scope.page.filters[0].value in $scope.event.messages
  $scope.face_ids    ->  $scope.page.filters[1].value in $scope.~~~~~~~~~~
  $scope.mode.value  ->  $scope.page.filters[2].value in $scope.page.items
    $scope.page.items = $scope.page.filters[2]
  $scope.page.value  ->  $scope.page.filters[3].value =
    $scope.messages
    $scope.anchors
    (HTML) | filter
  ###

MODULE = ($scope)->
  $scope.title = '人狼議事'
  $scope.face_id =
    hide:   []
    potofs: []
    others: []
    all:    []


  background = (log)->
    if 'open' == $scope.mode
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


  $scope.decolate = (log)->
    background anchor link random log

  $scope.lax_date = (date)->
    date.format(Date.ISO8601_DATE + '({dow}) {tt}{12hr}時' + postfix)

  $scope.lax_time = (date)->
    if date?
      timespan = (new Date() - date)/1000
      if timespan < 3 * 60 * 60
        return "25秒以内" if  0 < timespan < 25
        return "1分前"    if 25 < timespan < 60
        return date.relative('ja')
      else
        now = date.clone()
        now.addMinutes(15)
        postfix = ["頃","半頃"][(now.getMinutes()/30).floor()]
        return now.format(Date.ISO8601_DATE + '({dow})  {TT}{hh}時' + postfix, 'ja')
    else
      return "....-..-..(？？？) --..時頃"

  $scope.refresh = ->
    popover = $('a[title]')
    popover.each (idx, dom)->
      $(dom).attr "data-content", $(dom).attr("title")
      $(dom).attr "title", ''
      $(dom).attr "rel", 'popover'
    $('[rel="popover"]').popover()
    $("#outframe").height $("#contentframe").height()

  # face_id support
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

  # role support
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

  $scope.remove_card = (at, idx)->
    $scope.story.card[at].removeAt idx

  # potofs support
  calc_potof = ->
    hides = $scope.potofs.filter((o)-> o.is_hide ).map (o)-> o.face_id
    hides.add $scope.face_id.others if $scope.others_hide
    hides.remove '_none_'
    $scope.face_id.hide = hides

  $scope.drag = (log)->
    "z-index": log.z
    "top":     log.top

  $scope.other_toggle = ->
    $scope.others_hide = ! $scope.others_hide
    calc_potof()

  $scope.potof_toggle = (potof)->
    potof.is_hide = ! potof.is_hide
    calc_potof()

  # token input support
  tokenInput = {}

  $scope.tokenInput = (target, all, obj)->
    event_value = (key)-> SOW[all][key]
    event_add   = (key)-> $(target).tokenInput 'add', event_value(key)
    sel_values = obj.map event_value
    all_values = SOW[all].keys().map event_value

    tokenInput[target] =
      selValue: sel_values.compact()
      allValue: all_values
      eventAdd:   event_add
      eventValue: event_value

    $(target).tokenInput all_values,
      prePopulate: sel_values.compact()
      tokenDelimiter:   "/"
      propertyToSearch: "name"
      resultsFormatter: (item)-> "<li>#{item.name}</li>"
      tokenFormatter:   (item)-> "<li>#{item.name}</li>"


RAILS = ($scope, $compile, $interpolate)->
  MODULE   $scope
  TEMPLATE $scope, $compile, $interpolate
  INIT     $scope
  CSS      $scope
  POOL     $scope
  EFFECT   $scope
  if $scope.event?.messages?
    FILTER $scope

  navi =
    options:
      current: 'link'
      is_cookie: false
      on: 'hash'
    button: GIJI.navis

  $scope.location = window.location
  if window.onhashchange?
    window.onhashchange = =>
      $scope.$digest()

  $scope.$watch 'location.hash', (oldVal, newVal)->
  $scope.$watch 'title', (oldVal, newVal)->
    $('title').text(newVal);

  $scope.link = GIJI.link

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

  $scope.log_refresh = (log)->
    log.cancel_btn = ->
      if "q" == log.logid[0] && (new Date() - log.date) < 25 * 1000
        """<span class="btn btn-danger"><i class="icon-remove" href_eval='cancel_say("#{log.logid}")'></i></span>"""
      else
        ""
    log.time = -> $scope.lax_time Date.create log.date

  $scope.log = (log)->
    return unless log?
    if log.face_id? && log.csid?
      log.img  or= $scope.img_cid(log.csid, log.face_id)
    log.text = $scope.decolate log.log

    [_, mark, num] = log.logid.match(/(\D)\D+(\d+)/)
    if SOW.log.anchor[mark]?
      log.anchor or= "(#{SOW.log.anchor[mark]}#{Number(num)})"
    else
      log.anchor or= " "
    log.template or= "giji/" + (GIJI.message.template.subid[log.subid] || GIJI.message.template.mestype[log.mestype])

    $scope.log_refresh log
    GIJI.templates[log.template](log)

  Navi.push $scope, 'navi',  navi
  $scope.navi.watch.push ->
    $(window).resize()

  $scope.form =
    csid_cid: null

