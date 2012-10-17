GIJI.change_turn = (href, turn)->
  href.replace(/\&?rowall=\w+/,"").replace(/\&?cmd=\w+/,"").replace(/\&?turn=\d+/,"") + "&turn=#{turn}&rowall=on"

if SOW_RECORD.CABALA.events?
  SOW.events.keys (k,v)->
    v.id  = SOW_RECORD.CABALA.events.indexOf k
    v.key = k

CGI = ($scope, $compile, $interpolate)->
  RAILS $scope, $compile, $interpolate

  $scope.form.action =
    no:    "-99"
    target: "-1"
    text: ""
    result: ()->
      act = $scope.form.action
      if 0 < act.text.length
        text = act.text
      else
        text = $($('select[ng-model="form.action.no"]').find("option[value=#{act.no}]")[0]).text().replace(/\(.*\)$/,"")

      if -1 < Number(act.target)
        target = $($('select[ng-model="form.action.target"]').find("option[value=#{act.target}]")[0]).text()
      else
        target = ""
      "#{$scope.potof.shortname}は、#{target}#{text}"

  if $scope.story?
    $scope.story.upd.time_text = "#{$scope.story.upd.hour}時#{$scope.story.upd.minute}分"
    $scope.story.upd.interval_text = "#{$scope.story.upd.interval * 24}時間"

  if $scope.event?.messages?
    $scope.$watch "mode.value == 'memo'", (newVal,oldVal)=>
      in_memo = location.search.match ///&cmd=memo///
      if newVal && not in_memo
        search_base = location.search.replace(/&cmd=[a-z]+/, '')
        link_to = ->
          location.search = location.search + "&cmd=memo"
        link_to.delay 10

