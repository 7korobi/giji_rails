class Client
  @deploy: ->
    @deploy = -> null

    window.onorientationchange = =>
      $(window).trigger('resize')

    $(window).scroll =>
      Client.outframe.height( Client.height() )

    $(window).resize =>
      $(window).trigger('scroll')


    $ =>
      Client.outframe = $("#outframe")
      new Navi(Client)
      new Info(Client)
      new CSS(Client)

      Client.info.float()

      (new SowFeed).check()

      $(window).trigger('resize')

  @height: ->
    height = $(window).height() |
      window.innerHeight |
      document.documentElement.clientHeight |
      document.body.clientHeight
    Client.info?.contentframe.height()

  @width: ->
    phone =
      0:   480
      180: 480
      90:  800
      270: 800
    phone[window.orientation]
    $(window).width()

  @object: (id)->
    command =
      document.getElementById |
      document.all
    command?(id)

window.Client = Client