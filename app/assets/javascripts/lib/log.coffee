angular.module("giji.directives").directive "log", ["$interpolate", ($interpolate)->
  if JST?
    for key,val of JST
      if key.startsWith "giji/"
        GIJI.interpolates[key] or= $interpolate(val)

  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    log = $scope.$eval attr.log
    if ! log.img? && log.face_id? && log.csid?
      log.img  or= $scope.img_cid(log.csid, log.face_id)

    if ! log.anchor? && log.logid?
      [_, mark, num] = log.logid.match(/(\D)\D+(\d+)/)
      anchor_ok = false
      anchor_ok ||= (mark != 'T')
      anchor_ok ||= $scope.story?.is_epilogue
      if SOW.log.anchor[mark]? && anchor_ok
        log.anchor or= "(#{SOW.log.anchor[mark]}#{Number(num)})"
      else
        log.anchor or= " "

    if ! log.template? && log.logid? && log.mestype? && log.subid?
      log.sub1id = log.logid[0]
      log.sub2id = log.logid[1]
      template = null
      for style in GIJI.message.template
        style.keys (target, table)->
          template or= table[log[target]]
      log.template or= "giji/#{template}"

    log.date = Date.create log.date
    log.cancel_btn = ->
      if log.logid? && "q" == log.logid[0]
        if (new Date() - log.date) < 25 * 1000
          """<a class="mark" href_eval='cancel_say("#{log.logid}")'>なら削除できます。<i class="icon-trash" href_eval='cancel_say("#{log.logid}")'></i></a>"""
        else
          log.logid = log.logid.replace(/^q/,"")
          ""
      else
        ""
    log.time = -> $scope.lax_time log.date

    log.text = $scope.text_decolate log.log

    box = GIJI.interpolates[log.template]
    if box?
      $scope.$watch attr.log + ".time()", ->
        elm.html box log
    else
      elm.html "<hr>"
]

angular.module("giji.directives").directive "drag", [->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    $scope.$watch attr.drag, (log) ->
      elm.css
        "z-index": log.z
        "top":     log.top
]
