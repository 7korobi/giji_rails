RAILS = ($scope, $filter, $sce, $cookies, $http, $timeout)->
  win.cookies = $cookies
  $scope.mode_cache = 
    info: 'info_open_last'
    memo: 'memo_all_open_last'
    talk: 'talk_all_open'
  $scope.deploy_mode_common = ->
    $scope.mode_common = if $scope.mode?
      [ {name: '情報', value: $scope.mode_cache.info }
        {name: 'メモ', value: $scope.mode_cache.memo }
        {name: '議事', value: $scope.mode_cache.talk }
      ]
    else
      []

      
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
  $scope.submit = _.throttle submit, 5000


  MODULE   $scope, $filter, $sce, $http, $timeout
