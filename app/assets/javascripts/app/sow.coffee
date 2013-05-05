if SOW_RECORD.CABALA.events?
  SOW.events.keys (k,v)->
    v.id  = SOW_RECORD.CABALA.events.indexOf k
    v.key = k

CGI = ($scope, $filter)->
  MODULE $scope, $filter
  FORM    $scope

  $scope.get_by = (event, cb)->
    return unless event
    href = event.link + "&ua=javascript"
    $scope.get href, cb


  submit = (param)->
    switch param.cmd
      when 'editvilform', 'login', 'logout'
        $scope.post_submit $scope.form.uri, param
      else
        param.ua = "javascript"
        $scope.post_iframe $scope.form.uri, param, ->
          $scope.init()
  $scope.submit = submit.throttle 5000

  regexp =
    uid: ///(^|\s)uid=([^;]+)///
    pwd: ///(^|\s)pwd=([^;]+)///
  $scope.logined = ->
    uid = document.cookie.match(regexp.uid)?[2]
    pwd = document.cookie.match(regexp.pwd)?[2]
    uid? && pwd?

  $scope.login = (f)->
    f.uid = $("""[name="uid"]""").val()
    f.pwd = $("""[name="pwd"]""").val()
    param =
      cmd: 'login'
      uid: f.uid
      pwd: f.pwd
      cmdfrom: f.cmdfrom
    param.vid = $scope.story.vid if $scope.story?.vid?
    $scope.submit param

  $scope.logout = (f)->
    param =
      cmd: 'logout'
      cmdfrom: f.cmdfrom
    $scope.submit param
