GIJI.change_turn = (href, turn)->
  href.replace(/\&?rowall=\w+/,"").replace(/\&?cmd=\w+/,"").replace(/\&?turn=\d+/,"") + "&turn=#{turn}&rowall=on"

if SOW_RECORD.CABALA.events?
  SOW.events.keys (k,v)->
    v.id  = SOW_RECORD.CABALA.events.indexOf k
    v.key = k

CGI = ($scope, $filter)->
  MODULE $scope, $filter
  FORM    $scope
  $scope.submit = (param)->
    if 'editvilform' == param.cmd 
      $scope.post_submit $scope.form.uri, param

    else
      $scope.post_iframe $scope.form.uri, param, ->
        $scope.init()


