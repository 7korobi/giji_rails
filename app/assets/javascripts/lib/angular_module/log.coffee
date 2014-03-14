angular.module("giji").directive "log", ["$compile", "$sce", ($compile, $sce)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    log = $scope.message = $scope.$eval attr.log
    log.is_show = true

    log.attention = ->
      base = location.href.replace(location.hash,"")
      url = Navi.to_url
        hash:
          search: log.key
          hide_potofs: ""
          mode: "talk_all_open"
          page: 1

      wo = window.open()
      wo.opener = null
      wo.location.href = "#{base}#{url.hash}"

    log.cancel_btn = ->
      if @logid? && "q" == @logid[0] && ((new Date() - @updated_at) < 25 * 1000)
        $sce.trustAsHtml """なら削除できます。<a href_eval='cancel_say("#{@logid}")()' class="btn btn-danger click glyphicon glyphicon-trash"></a>"""
      else
        ""

    log.time = -> $scope.lax_time @updated_at


    if ! log.template? && log.logid? && log.mestype? && log.subid?
      template = null
      for style in GIJI.message.template
        for target, table of style
          template or= table[log[target]]
      log.template or= "message/#{template}"

    if ! log.img? && log.face_id? && log.csid?
      log.img  or= $scope.img_cid(log.csid, log.face_id)

    if ! log.anchor? && log.logid? && match_data = log.logid.match(/(\D)\D+(\d+)/)
      [_, mark, num] = match_data
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
