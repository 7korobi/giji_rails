AJAX = ($scope)->
  $scope.replace_gon = (data)->
    codes = data.match ///
      <script.*?>[\s\S]*?</script>
    ///ig
    for dom in codes
      code = $(dom).text()
      if code.match(/gon/)?
        eval code

  $scope.post = (href, form, func)->
    $.post href, form, (data)->
      $scope.replace_gon data
      func()

  $scope.get = (href, func)->
    $.get href, {}, (data)->
      $scope.replace_gon data
      func()

  $scope.ajax_info = ()->
    $scope.mode.value = 'info_open_player'

  $scope.ajax_event = (turn, href, is_news)->
    target = href + location.hash
    if $scope.events? && $scope.event?
      change = ->
        $scope.mode.value = 'talk_open'
        $scope.event.is_news = is_news
        $scope.page.value = 1
        $scope.boot()
        win.history "#{$scope.title}", href, location.hash

      if $scope.events[turn].messages?
        $scope.event = $scope.events[turn]
        change()
      else
        $scope.get href, =>
          if turn == gon.event.turn
            INIT $scope
            $scope.top.count()
          change()
          $scope.$apply()

    else
      location.href = target

