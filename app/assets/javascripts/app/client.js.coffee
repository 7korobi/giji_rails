class Client
  @deploy: ->
    @deploy = -> null

    window.onorientationchange = =>
      $(window).trigger('resize')

    $(window).scroll =>
      Client.outframe.height( Client.info.contentframe.height() )

    $(window).resize =>
      $(window).trigger('scroll')


    $(document).ready =>
      Client.outframe = $("#outframe")
      Client.navi = new Navi()
      Client.info = new Info()
      Client.info.float()

      (new SowFeed).check()

      $(window).trigger('resize')


    document.client = Client


  @height: ->
    $(window).height() |
    window.innerHeight |
    document.documentElement.clientHeight |
    document.body.clientHeight

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

