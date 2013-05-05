RAILS = ($scope, $filter)->
  $scope.mode_current_set = ->
    $scope.mode_current = 'talk_open'


  get = (href, cb)->
    $scope.get href + "&ua=javascript", cb

  $scope.event_url = (event)->
    return null unless event
    event.link

  $scope.get_news = (event,cb)->
    href = $scope.event_url(event)
    get href, cb if href

  $scope.get_all = (event,cb)->
    href = $scope.event_url(event)
    get href, cb if href

  MODULE   $scope, $filter
