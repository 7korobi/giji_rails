GO = ($scope)->
  go_anker = (anker, cb)->
    _.debounce ->
      target = $($(anker)[0])
      offset = win.height / 10

      if target.offset()?
        targetY = target.offset().top - offset
        $("html,body").animate
          scrollTop: targetY
        , 200, "linear", ->
          cb?(target)
    , DELAY.animato,
      leading: false
      trailing: true

  $scope.go =
    messages:  go_anker ".css_changer"
    form:      go_anker "#forms"
    search:    go_anker """[ng-model="search_input"]""", (o)-> o.focus()
