
tokenInput = {}

MODULE = ($scope)->
  $scope.title = '人狼議事'
  $scope.face_id =
    hide:   []
    potofs: []
    others: []
    all:    []

  background = (log)->
    if 'memo_all' != $scope.mode?.value and 'talk_all' != $scope.mode?.value
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
      """ <a href_eval="popup(#{turn},'#{a}')" class="mark">&gt;&gt;#{id}</a> """

  random = (log)->
    log.replace /<rand ([^>]+),([^>]+)>/g, (key, val, cmd)->
      """ <a rel="popover" data-content="#{cmd}" class="mark">#{val}</a> """

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


  $scope.text_decolate = (log)->
    if log
      background anchor link random log
    else
      null

  $scope.lax_date = (date)->
    date.format(Date.ISO8601_DATE + '({dow}) {tt}{12hr}時' + postfix)

  $scope.lax_time = (date)->
    if date?
      timespan = (new Date() - date)/1000
      limit = 3 * 60 * 60
      if - limit < timespan < limit
        return "1分後"    if -60 < timespan < -25
        return "25秒以内" if -25 < timespan <  25
        return "1分前"    if  25 < timespan <  60
        return date.relative('ja')
      else
        now = date.clone()
        now.addMinutes(15)
        postfix = ["頃","半頃"][(now.getMinutes()/30).floor()]
        return now.format(Date.ISO8601_DATE + '({dow})  {TT}{hh}時' + postfix, 'ja')
    else
      return "....-..-..(？？？) --..時頃"

  # page requesting
  replace_gon = (data)->
    codes = data.match ///
      <script.*?>[\s\S]*?</script>
    ///ig
    for dom in codes
      code = $(dom).text()
      if code.match(/gon/)?
        console.log code
        eval code

  $scope.post = (href, form, func)->
    $.post href, form, (data)->
      replace_gon data
      func()

  $scope.get = (href, func)->
    $.get href, {}, (data)->
      replace_gon data
      func()

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

  # events support
  $scope.event_merge = (event)->
    if $scope.events? && event?.messages? && event?.turn?
      cache = $scope.events[event.turn]
      if cache?
        event.merge
          name: cache.name
          link: cache.link
    else
      null

  $scope.event_cache = (event)->
    event = $scope.event_merge event
    if 0 < event?.messages.length
      $scope.events[event.turn] = event
    else
      null

  # potofs support
  calc_potof = ->
    hides = $scope.potofs.filter((o)-> o.is_hide ).map (o)-> o.face_id
    hides.add $scope.face_id.others if $scope.others_hide
    hides.remove '_none_'
    $scope.face_id.hide = hides

  $scope.other_toggle = ->
    $scope.others_hide = ! $scope.others_hide
    calc_potof()

  $scope.potof_href = (potof)->
    hash = location.hash
    location.href.replace hash, "##{hash}&face_only=#{potof.face_id}"


  $scope.potof_toggle = (potof)->
    potof.is_hide = ! potof.is_hide
    calc_potof()

  $scope.potofs_toggle = ->
    $scope.potofs_is_small = ! $scope.potofs_is_small
    $scope.boot()

  # token input support

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


