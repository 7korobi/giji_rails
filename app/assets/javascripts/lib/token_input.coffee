TOKEN_INPUT = ($scope)->
  tokenInput = {}

  $scope.tokenInputAdd = (target, key)->
    tokenInput[target].eventAdd(key)

  tokenInputInit = (target, all, obj)->
    event_value = (key)-> all[key]
    event_add   = (key)-> $(target).tokenInput 'add', event_value(key)
    sel_values = _.map obj, event_value
    all_values = _.map _.keys(all), event_value

    tokenInput[target] =
      selValue: _.compact sel_values
      allValue: all_values
      eventAdd:   event_add
      eventValue: event_value

    $(target).tokenInput all_values,
      prePopulate: _.compact sel_values
      tokenDelimiter:   "/"
      propertyToSearch: "name"
      resultsFormatter: (item)-> "<li>#{item.name}</li>"
      tokenFormatter:   (item)-> "<li>#{item.name}</li>"


  doIt = ->
    target = $('#eventcard')
    if target.length > 0 && $scope.story.card.event?
      tokenInputInit('#eventcard', SOW.events, $scope.story.card.event)
  _.delay doIt, 1000
