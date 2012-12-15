AJAX = ($scope)->
  replace_gon = (data)->
    codes = data.match ///
      <script.*?>[\s\S]*?</script>
    ///ig
    for dom in codes
      code = $(dom).text()
      if code.match(/gon/)?
        eval code

  $scope.post = (href, form, func)->
    $.post href, form, (data)->
      replace_gon data
      func()

  $scope.get = (href, func)->
    $.get href, {}, (data)->
      replace_gon data
      func()

  $scope.ajax_event = (turn, href, is_news)->
    target = href + location.hash
    if $scope.events? && $scope.event?
      change = ->
        $scope.event.is_news = is_news
        $scope.face.scan()
        $scope.page.value = 1
        win.history "#{$scope.event.name}", href, location.hash
      if $scope.events[turn].messages?
        $scope.event = $scope.events[turn]
        change()
      else
        $scope.get href, =>
          if turn == gon.event.turn
            INIT $scope
          change()
          $scope.$apply()

    else
      location.href = target

