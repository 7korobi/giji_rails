GO = ($scope)->
  $scope.go =
    search: ->
      $($("""[ng-model="search_input"]""")[0]).focus()
    form: ->
      target = $($("""[template="navi/forms"]""")[0])
      $(window).scrollTop  target.offset().top
