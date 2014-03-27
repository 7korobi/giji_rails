CGI = ($scope, $filter, $sce, $cookies, $http, $timeout)->
  submit = (param, cb)->
    switch param.cmd
      when 'login'
        if param.vid?
          protocol = $scope.post_iframe
        else
          protocol = $scope.post_submit
      when 'editvilform', 'logout'
        protocol = $scope.post_submit
      when 'wrmemo', 'write', 'action', 'entry'
        protocol = $scope.post_iframe
      else
        protocol = $scope.post
    param.ua = "javascript" unless $scope.post_submit == protocol
    protocol $scope.form.uri, param, ->
      $scope.init()
      cb() if cb
  $scope.submit = _.throttle submit, DELAY.lento

  $scope.logined = ->
    Browser.real.cookies.uid && Browser.real.cookies.pwd

  $scope.login = (f)->
    param =
      cmd: "login"
      uid: f.uid = $("""[name="uid"]""").val()
      pwd: f.pwd = $("""[name="pwd"]""").val()
      cmdfrom: f.cmdfrom
    param.vid = $scope.story.vid if $scope.story?.vid?
    $scope.submit param, ->
      $scope.wary_messages()

  $scope.logout = (f)->
    param =
      cmd: 'logout'
      cmdfrom: f.cmdfrom
    $scope.submit param, ->

  MODULE $scope, $filter, $sce, $cookies, $http, $timeout
  FORM   $scope, $sce

  $scope.story_has_option = (option)->
    _.include $scope.story.options, option
