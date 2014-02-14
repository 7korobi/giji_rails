angular.module("giji").directive "log", ["$compile", "$sce", ($compile, $sce)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    log = $scope.message = $scope.$eval attr.log
    if ! log.template? && log.logid? && log.mestype? && log.subid?
      log.sub1id = log.logid[0]
      log.sub2id = log.logid[1]

      template = null
      for style in GIJI.message.template
        for target, table of style
          template or= table[log[target]]
      log.template or= "message/#{template}"

    if ! log.img? && log.face_id? && log.csid?
      log.img  or= $scope.img_cid(log.csid, log.face_id)

    log.cancel_btn = ->
      if @logid? && "q" == @logid[0] && ((new Date() - @updated_at) < 25 * 1000)
        $sce.trustAsHtml """<a class="mark" href_eval='cancel_say("#{@logid}")'>なら削除できます。⏳</a>"""
      else
        ""
    log.time = -> $scope.lax_time @updated_at

    if ! log.anchor? && log.logid?
      [_, mark, num] = log.logid.match(/(\D)\D+(\d+)/)
      anchor_ok = false
      anchor_ok ||= (mark != 'T')
      anchor_ok ||= $scope.story?.is_epilogue
      if SOW.log.anchor[mark]? && anchor_ok
        log.anchor or= "#{SOW.log.anchor[mark]}#{Number(num)}"
      else
        log.anchor or= ""

    if ! log.text?
      log.text = $scope.text_decolate log.log
      delete log.log


    GIJI.template $compile, $scope, elm, log.template

]

angular.module("giji").directive "drag", [->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    $scope.$watch attr.drag, (log) ->
      elm.css
        "z-index": log.z
        "top":     log.top
]
