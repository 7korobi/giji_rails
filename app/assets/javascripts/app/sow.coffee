if SOW_RECORD.CABALA.events?
  SOW.events.keys (k,v)->
    v.id  = SOW_RECORD.CABALA.events.indexOf k
    v.key = k

CGI = ($scope, $filter)->
  MODULE $scope, $filter
  FORM    $scope
  $scope.submit = (param)->
    switch param.cmd
      when 'editvilform', 'login', 'logout'
        $scope.post_submit $scope.form.uri, param
      else
        $scope.post_iframe $scope.form.uri, param, ->
          $scope.init()

  if $scope.form?.login?
    $scope.form.login.logined = ->
      uid = document.cookie.match(///(^|\s)uid=([^;]+)///)?[2]
      pwd = document.cookie.match(///(^|\s)pwd=([^;]+)///)?[2]
      uid? && pwd?

    $scope.login = (f)->
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
