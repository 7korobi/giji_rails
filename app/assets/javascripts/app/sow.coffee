

tokenInput = {}

if SOW_RECORD.CABALA.events?
  SOW.events.keys (k,v)->
    v.id  = SOW_RECORD.CABALA.events.indexOf k
    v.key = k

CGI = ($scope, $interpolate)->
  RAILS($scope, $interpolate)

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

  $scope.form =
    action:
      no:    "-99"
      target: "-1"
      text: ""
      result: ()->
        act = $scope.form.action
        if 0 < act.text.length
          text = act.text
        else
          text = $('.formpl_action select[name=actionno]').find("option[value=#{act.no}]").text()

        if -1 < Number(act.target)
          target = $('.formpl_action select[name=target]').find("option[value=#{act.target}]").text()
        else
          target = ""
        "#{$scope.potof.shortname}は、#{target}#{text}"


  if gon?
    if gon.story?
      $scope.story.upd.time_text = "#{gon.story.upd.hour}時#{gon.story.upd.minute}分"
      $scope.story.upd.interval_text = "#{gon.story.upd.interval * 24}時間"


