GO = ($scope)->
  go_anker = (anker)->
    target = $($(anker)[0])
    $(window).scrollTop  target.offset().top - 20

  $scope.go =
    messages: -> go_anker "#messages"
    forms:     -> go_anker "#forms"
    search: ->
      $($("""[ng-model="search_input"]""")[0]).focus()
