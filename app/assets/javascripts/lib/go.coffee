GO = ($scope)->
  $scope.go =
    search: ->
      $($("""[ng-model="search.value"]""")[0]).focus()