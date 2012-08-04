
GIJI.turns = []
GIJI.templates = {}

app = angular.module '', []
app.config ($interpolateProvider)->

RAILS = ($scope, $interpolate)->
  $scope.location = window.location
  if window.onhashchange?
    window.onhashchange = =>
      $scope.$digest()

  $scope.$watch 'location.hash', (oldVal, newVal)->
    console.log [oldVal, newVal, $scope]

  $scope.link = GIJI.link
  for idx,val in $("script[type='text/x-tmpl']")
    html = $(val).html()
    GIJI.templates[val.id] = $interpolate(html)

  if JST?
    for key,val of JST
      GIJI.templates[key] = $interpolate(val)

  if gon?.story?
    $scope.title = $scope.title ||= gon.story.name || '人狼議事'

  if gon?.messages?
    $scope.messages = gon.messages

  if gon?.event?.messages?
    GIJI.turns[gon.event.turn] = gon.event.messages

    $scope.event = gon.event
    $scope.event.name or= gon.event.turn + "日目"

    $('#messages').on 'click', '[href_eval]', (e)->
      popup_apply = (e, item)->
        idx = $scope.anchors.indexOf item
        if idx < 0
          $scope.anchors.push item
        else
          $scope.anchors.removeAt idx, $scope.anchors.length
        item.z = Date.now()
        item.top = e.pageY + 16
        $scope.$apply()

      popup = (turn, ank)->
        href = location.origin + location.pathname

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
              if dom.innerText?.match(/gon.event=\{/)?
                eval  dom.innerText
                GIJI.turns[gon.event.turn] = gon.event.messages
                return  if  popup_find()
          href

        return  if  popup_ajax turn
        return  if  popup_find()
        return  if  popup_ajax turn - 1

      eval $(e.target).attr('href_eval')

  lax_date = (date)->
    date.format(Date.ISO8601_DATE + '({dow}) {tt}{12hr}時' + postfix)
  lax_time = (date)->
    now = date.addMinutes(15)
    postfix = ["頃","半頃"][(date.getMinutes()/30).floor()]
    date.format(Date.ISO8601_DATE + '({dow})  {TT}{hh}時' + postfix, 'ja')

  decolate = (log)->
    switch $scope.mode._value
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

  $scope.log = (log)->
    return unless log
    log.time or= lax_time Date.create log.date
    log.text or= decolate anker log.log
    log.img  or= "#{URL.rails}/images/portrate/#{log.face_id}.jpg"

    log.template or= "giji/" + (GIJI.message.template.subid[log.subid] || GIJI.message.template.mestype[log.mestype])

    log.log = null
    GIJI.templates[log.template](log)

  $scope.title ||= $scope.title ||= '人狼議事'

  Navi.push $scope, 'navi'
    options:
      on: 'hash'
      current: 'link'
      is_cookie: false
    button:
      link: '移動'
      info: '情報'
      calc: '計算'
      blank: 'x'

  if gon?.page?
    PageNavi.push $scope, 'page'
      options:
        on: 'search'
        current: 1
        current_type: Number
        is_cookie: false
    $scope.page._items = gon.page

  if gon?.event?.messages?

    PageNavi.push $scope, 'page'
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

    $scope.mode._watch.push ()->
      $scope.page._items = $scope.event.messages.filter (log)->
        filter = mode_filters[$scope.mode._value]
        log.logid.match filter

    $scope.page._watch.push (page)->
      page_per = $scope.page._params.per
      from = (page - 1) * page_per
      to   =  page      * page_per - 1
      $scope.messages = ($scope.page._items[idx] for idx in [from .. to])
      $scope.anchors = []
      GIJI.box.window?.scrollTop( $(".inframe").offset().top - 20 )

  Navi.push $scope, 'width'
    options:
      on: 'hash'
      current: 800
      current_type: Number
      is_cookie: true
    button:
      480: "480"
      800: "800"

  Navi.push $scope, 'theme'
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
    value = "#{$scope.theme._value}#{$scope.width._value}"
    date    = new Date
    $scope.css = "#{URL.rails}/stylesheets/#{value}.css"

    $scope.h1 =
      type: OPTION.head_img[value][ (date / 60*60*12).ceil() % 2]
    switch $scope.width._value
      when 480
        $scope.h1.width = 458
      when 800
        $scope.h1.width = 580
    $scope.h1.path = "#{URL.rails}/images/banner/title#{$scope.h1.width}#{$scope.h1.type}.jpg"
    GIJI.box.window.resize()

  $scope.width._watch.push move
  $scope.theme._watch.push move

  GIJI.box.window.resize ->
    width = GIJI.box.window.width()

    switch $scope.width._value
      when 480
        small = 122 + 80 + 20
        if      small < width - 462
          info_width  = width - 462
        else
          info_width  = width
      when 800
        info_right  = (width - 770)/2
        if       200  <  width - 770
          info_width  = info_right + 190
        else
          info_width  = width

    GIJI.box.sayfilter.width info_width

  console.log [$scope, document.cookie, location]

