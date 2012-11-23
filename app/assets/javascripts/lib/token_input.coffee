tokenInput = {}
TOKEN_INPUT = ($scope)->
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

