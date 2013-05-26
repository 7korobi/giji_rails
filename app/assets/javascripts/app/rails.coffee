if SOW_RECORD.CABALA.events?
  SOW.events.keys (k,v)->
    v.id  = SOW_RECORD.CABALA.events.indexOf k
    v.key = k

RAILS = ($scope, $filter)->
  $scope.mode_current_set = ->
    $scope.mode_current = 'talk_open'


  get = (href, cb)->
    $scope.get href, cb

  $scope.event_url = (event)->
    return null unless event
    event.link

  $scope.get_news = (event,cb)->
    href = $scope.event_url(event)
    get href, cb if href

  $scope.get_all = (event,cb)->
    href = $scope.event_url(event)
    get href, cb if href

  submit = (param, cb)->
    $scope.post $scope.form.uri, param, ->
      $scope.init()
      cb() if cb
  $scope.submit = submit.throttle 5000


  MODULE   $scope, $filter
