DECOLATE = ($scope, $sce)->
  player = (log)->
    return log unless log
    log.replace ///
      (/\*)(.*?)(\*/|$)
    ///g,'<em>$1<span class="player">$2</span>$3</em>'

  unanchor = (log)->
    return log unless log
    log.replace /<mw (\w+),(\d+),([^>]+)>/g, (key, a, turn, id)->
      """>>#{id}"""

  anchor = (log)->
    return log unless log
    log.replace /<mw (\w+),(\d+),([^>]+)>/g, (key, a, turn, id)->
      """<a hogan-click="popup(#{turn},'#{a}')" data="#{a},#{turn},#{id}" class="mark">&gt;&gt;#{id}</a>"""

  anchor_preview = (log)->
    log

  unrandom = (log)->
    return log unless log
    log.replace /<rand ([^>]+),([^>]+)>/g, (key, val, cmd)->
      cmd

  random = (log)->
    return log unless log
    log.replace /<rand ([^>]+),([^>]+)>/g, (key, val, cmd)->
      """<a class="mark" hogan-click="inner('#{cmd}','#{val}')">#{val}</a>"""

  random_preview = (log)->
    log.replace /\[\[([^\[]+)\]\]/g, (key, val)->
      """<a class="mark" hogan-click="inner('#{val}','？')">#{val}</a>"""

  link_regexp = ///
      (\w+)://([^/<>）］】」\s]+)([^<>）］】」\s]*)
  ///
  link_regexp_g = ///
      (\w+)://([^/<>）］】」\s]+)([^<>）］】」\s]*)
  ///g

  id_num = 0
  uri_to_link = _.memoize (uri)->
    id_num++
    [uri, protocol, host, path] = uri.match link_regexp
    """<span class="badge" hogan-click="external('link_#{id_num}','#{uri}','#{protocol}','#{host}','#{path}')">LINK - #{protocol}</span>"""

  link = (log)->
    return log unless log
    text = log.replace(/\s|<br>/g, ' ').replace(/(<([^>]+)>)/ig,"")
    uris = text.match link_regexp_g
    if uris
      for uri in uris
        log = log.replace uri, uri_to_link uri
    return log

  space = (log)->
    return log unless log
    log.replace /(^|\n|<br>)(\ *)/gm, (full, s1, s2, offset)->
      s1 ||= ""
      nbsps = s2.replace /\ /g, '&nbsp;'
      "#{s1}#{nbsps}"

  unbr = (log)->
    log.replace /<br>/gm, (br)-> "\n"

  $scope.preview_decolate = (log)->
    if log
      $sce.trustAsHtml space player anchor_preview link random_preview log
    else
      null

  $scope.text_decolate = (log)->
    if log
      $sce.trustAsHtml space player anchor link random log
    else
      null

  $scope.undecolate = (log)->
    if log
      unanchor unrandom unbr log
    else
      null
