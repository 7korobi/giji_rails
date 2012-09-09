
GIJI.turns = []
GIJI.templates = {}

app = angular.module '', []
app.config ($interpolateProvider)->

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
    mob:  /^[AmSIiVG][^M]/
    clan: /^[AmSIiWPX][^M]/
    open: /^[AmSI][^M]/

  $scope.title = '人狼議事'

  if 'PAN' == gon?.folder
    theme.options.current = 'sow'
    theme.button = GIJI.themes.pan
  else
    theme.options.current = 'wa'
    theme.button = GIJI.themes.giji
  if gon?
    if gon.page?
      PageNavi.push $scope, 'page'
        options:
          on: 'search'
          current: 1
          is_cookie: false
      $scope.page._items = gon.page

    $scope.remove_card = (at, idx)->
      story.card[at].removeAt idx

    $scope.rolename = rolename = (o)->
      SOW.roles[o]?.name || SOW.gifts[o]?.name || SOW.events[o]?.name || o || ""

    $scope.countup = countup = (list)->
      counts = []
      group = list.groupBy()
      group.keys (key,val)->
        counts.push [val.length, key]

      counts.sortBy ([size, key])->
        size
      .map ([size, key])->
        if 1 < size
          "#{rolename(key)}x#{size}"
        else
          "#{rolename(key)}"

    if gon.story?
      $scope.title = gon.story.name
      $scope.story = gon.story

      $scope.story.card.discard_names = countup(gon.story.card.discard).join '、'
      $scope.story.card.event_names   = countup(gon.story.card.event).join '、'
      $scope.story.card.config_names  = countup(gon.story.card.config).join '、'
      $scope.story.option_helps = gon.story.options.map (o)-> SOW.options[o].help


    if gon.potofs?
      live_potofs = gon.potofs
      .filter (o)->
        o.deathday < 0

      potofs = gon.potofs
      .map (potof)->
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
              return null
            SOW.loves[potof.love]?.win || win_by_role(SOW.gifts) || win_by_role(SOW.roles) || "NONE"
          potof.win = win_check potof
          potof.win_name = SOW.wins[potof.win]?.name

          potof.role_names  = potof.role.map rolename

        if potof.select?
          potof.select_name = rolename potof.select

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

    if gon.messages?
      $scope.messages = gon.messages

    if gon.event?.messages?
      GIJI.turns[gon.event.turn] = gon.event.messages

      $scope.event = gon.event
      $scope.event.name or= gon.event.turn + "日目"

      PageNavi.push $scope, 'page'
        options:
          per: 50
          on: 'hash'
          current: 1
          is_cookie: false

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

      $scope.mode._watch.push (mode)->
        filter = mode_filters[mode]
        $scope.page._items = GIJI.turns[$scope.event.turn].filter (log)->
          log.logid.match filter

      $scope.page._watch.push (page)->
        page_per = $scope.page._params.per
        from = (page - 1) * page_per
        to   =  page      * page_per - 1
        $scope.messages = ($scope.page._items[idx] for idx in [from .. to])
        $scope.anchors = []
        anime = ()->
          $(window).scrollTop( $(".inframe").offset().top - 20 )
          $('.text a[rel*="tooltip"]').tooltip
            trigger: 'focus'

        anime.delay(100)

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

  click_eval = (e)->
    sort_potofs = (tgt)->
      reverse = (tgt == @tgt)
      $scope.potofs = $scope.potofs.sortBy tgt, reverse
      $scope.$apply()
      @tgt = reverse || tgt

    navi = (link)->
      $scope.navi._value = link
      $scope.$apply()

    popup_apply = (e, item)->
      idx = $scope.anchors.indexOf item
      if idx < 0
        $scope.anchors.push item
      else
        $scope.anchors = []
      item.z = Date.now()
      item.top = e.pageY + 24
      $scope.$apply()

    popup = (turn, ank)->
      href = location.protocol + "//"+ location.host + location.pathname

      popup_find = ()->
        return null unless GIJI.turns[turn]
        item = GIJI.turns[turn].find (log)->
          log.logid == ank
        if item
          popup_apply e, item
        item

      popup_ajax = (turn)->
        return null if GIJI.turns[turn]
        href = href.replace(///
          /\d+/messages
        ///,"/#{turn}/messages")

        $.get href, {}, (data) =>
          for dom in $(data)
            code = $(dom).text()
            if code.match(/gon.event=\{/)?
              eval  code
              GIJI.turns[gon.event.turn] = gon.event.messages
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
    now = date.clone()
    now.addMinutes(15)
    postfix = ["頃","半頃"][(now.getMinutes()/30).floor()]
    now.format(Date.ISO8601_DATE + '({dow})  {TT}{hh}時' + postfix, 'ja')
  $scope.lax_date = lax_date
  $scope.lax_time = lax_time

  decolate = (log)->
    switch $scope.mode._value
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

  link_regexp = ///
      (\w+)://([^/]+)([^<>）］】」\s]+)
  ///
  link_regexp_g = link_regexp.setFlags('g')

  link = (log)->
    text = log.removeTags('a')
    uris = text.match link_regexp_g
    if uris
      for uri in uris
        [uri, protocol, host, path] = uri.match link_regexp
        title = """
          #{protocol}://#{host}<br>
          #{path}
        """
        log = log.replace uri, """ <a rel="tooltip" target="_blank" href="#{uri}" title="#{title}" class="badge">LINK - #{protocol}</a> """
    log

  $scope.log = (log)->
    return unless log?
    if log.face_id? && log.csid?
      csid = GIJI.csids[log.csid]
      csid or= 'portrate'
      log.img  or= "#{URL.rails}/images/#{csid}/#{log.face_id}.jpg"
    log.text   = decolate anchor link log.log
    log.time or= lax_time Date.create log.date

    [_, mark, num] = log.logid.match(/(\D)\D+(\d+)/)
    log.anchor   or= "#{SOW.log.anchor[mark]}#{Number(num)}"
    log.template or= "giji/" + (GIJI.message.template.subid[log.subid] || GIJI.message.template.mestype[log.mestype])
    if 'cast' == GIJI.message.template.mestype[log.mestype]
      log.log = """ <div href_eval="navi('info')" class="badge"> CAST </div> """

    GIJI.templates[log.template](log)

  move = ()->
    value = "#{$scope.theme._value}#{$scope.width._value}"
    date    = new Date
    $scope.css = "#{URL.rails}/stylesheets/#{value}.css"
    $("#giji_css").attr 'href', $scope.css

    $scope.h1 =
      type: OPTION.head_img[value][ (date / 60*60*12).ceil() % 2]
    switch $scope.width._value
      when 480
        $scope.h1.width = 458
      when 800
        $scope.h1.width = 580
    $scope.h1.path = "#{URL.rails}/images/banner/title#{$scope.h1.width}#{$scope.h1.type}.jpg"
    $(window).resize()

  if window.opera
    $scope.width =
      _value: 800
    $scope.theme =
      _value: 'cinema'
  else
    Navi.push $scope, 'width', width
    Navi.push $scope, 'theme', theme

    $scope.width._watch.push move
    $scope.theme._watch.push move

  Navi.push $scope, 'navi',  navi
  $scope.navi._watch.push ->
    $(window).resize()

  $ ->
    $('.text').each (idx, dom)->
      $(dom).html link $(dom).html()
    $('.text a[rel*="tooltip"]').tooltip
      trigger: 'focus'

  $(window).resize ->
    width  = $(window).width()
    height = $(window).height()

    if 'info' == $scope.navi._value && $scope.potofs?
      small = 470

    switch $scope.width._value
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
        small or= 290
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
    $("#sayfilter").css
      width: info_width
      "max-height": height

