GO = ($scope)->
  $scope.go =
    search: ->
      $($("""[ng-model="search_input"]""")[0]).focus()