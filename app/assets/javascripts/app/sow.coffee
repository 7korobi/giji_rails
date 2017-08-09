
giji =
  gon: -> _.merge {}, OPTION.gon
  log:
    mesicon: (mestype)-> SOW_RECORD.CABALA.mestypeicons[mestype]
    mestype: (mestype)-> SOW_RECORD.CABALA.mestypes[mestype]
  form:
    gon: (title, uri)->
      _.merge {}, OPTION.gon.form,
        title: title
        uri:   uri
    mestype: (sayswitch)-> SOW.switch[sayswitch].mestype
  potof:
    roles: (role, gift)->
      _.compact [
        SOW_RECORD.CABALA.roles[role]
        SOW_RECORD.CABALA.gifts[gift]
      ]
    select: (selrole)->
      switch selrole
        when -1
          "ランダム"
        when 999
          "見物人"
        else
          SOW_RECORD.CABALA.roles[selrole]
  story:
    card:
      event:   (list)-> _.compact _.map list.split('/'), (id)-> SOW_RECORD.CABALA.events[id]
      discard: (list)-> _.compact _.map list.split('/'), (id)-> SOW_RECORD.CABALA.events[id]
  event:
    event:  (id)-> SOW_RECORD.CABALA.events[id]
    winner: (id)-> SOW_RECORD.CABALA.winners[id]


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
