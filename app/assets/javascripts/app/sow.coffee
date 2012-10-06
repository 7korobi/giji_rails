tokenInput = {}

GIJI.change_turn = (href, turn)->
  href.replace('&rowall=on',"").replace(/turn=\d+/,"") + "&turn=#{turn}&rowall=on"

if SOW_RECORD.CABALA.events?
  SOW.events.keys (k,v)->
    v.id  = SOW_RECORD.CABALA.events.indexOf k
    v.key = k

POOL = ($scope, $interpolate)->
  if $scope.event?.is_news
    last_id = $scope.event.messages.last().logid
    timer = 5 * 60 * 1000

    pool = ->
      href = location.href
      GIJI.gon href, =>
        INIT $scope, $interpolate
        last_idx  = $scope.event.messages.findIndex (o)-> last_id == o.logid
        news_size = $scope.event.messages.length - last_idx
        if $scope.story? && 0 < news_size
          $scope.title = "(#{news_size}) #{$scope.story.name}"
        $scope.$apply()
        pool.delay timer
    pool.delay timer

CGI = ($scope, $interpolate)->
  RAILS $scope, $interpolate
  POOL  $scope, $interpolate

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

  $scope.form.action =
    no:    "-99"
    target: "-1"
    text: ""
    result: ()->
      act = $scope.form.action
      if 0 < act.text.length
        text = act.text
      else
        text = $('select[ng-model="form.action.no"]').find("option[value=#{act.no}]").text().replace(/\(.*\)$/,"")

      if -1 < Number(act.target)
        target = $('select[ng-model="form.action.target"]').find("option[value=#{act.target}]").text()
      else
        target = ""
      "#{$scope.potof.shortname}は、#{target}#{text}"


  if gon?
    if gon.story?
      $scope.story.upd.time_text = "#{gon.story.upd.hour}時#{gon.story.upd.minute}分"
      $scope.story.upd.interval_text = "#{gon.story.upd.interval * 24}時間"


