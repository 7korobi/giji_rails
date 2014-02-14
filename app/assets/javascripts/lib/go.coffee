GO = ($scope)->
  go_anker = (anker)->
    target = $($(anker)[0])
    $(window).scrollTop  target.offset().top

  $scope.go =
    messages: -> go_anker "#messages"
    form:     -> go_anker "#forms"
    search: ->
      $($("""[ng-model="search_input"]""")[0]).focus()
