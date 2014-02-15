GO = ($scope)->
  go_anker = (anker, offset, cb)->
    target = $($(anker)[0])
    targetY = target.offset().top - offset
    $("html,body").animate
      scrollTop: targetY
    , 200, "linear", ->
      cb?(target)

  $scope.go =
    messages: -> go_anker "#messages", win.height / 5
    form:     -> go_anker "#forms",    win.height / 5
    search:   -> go_anker """[ng-model="search_input"]""", 0, (o)-> o.focus()
