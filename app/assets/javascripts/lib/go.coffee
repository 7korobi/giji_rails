GO = ($scope)->
  go_anker = (anker, input)->
    _.debounce ->
      target = $($(anker)[0])

      if target.offset()?
        targetY = target.offset().top
        $("html,body").animate
          scrollTop: targetY
        , 200, "linear", ->
          $(input).focus()
    , DELAY.animato,
      leading: false
      trailing: true

  $scope.go =
    top:       go_anker "h1"
    messages:  go_anker ".css_changer"
    form:      go_anker "#forms"
    search:    go_anker "h1", """[ng-model="search_input"]"""
