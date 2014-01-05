AJAX = ($scope)->
  $scope.replace_gon = (data)->
    codes = data.match ///
      <script.*?>[\s\S]*?</script>
    ///ig
    if codes?
      for dom in codes
        code = $(dom).text()
        if code.match(/gon/)?
          eval code

  $scope.get = (href, cb)->
    $.get href, {}, (data)->
      $scope.replace_gon data
      cb()
      $scope.$apply()

  $scope.post = (href, param, cb)->
    $.post href, param, (data)->
      $scope.replace_gon data
      cb()
      $scope.$apply()

  form_submit = (param)->
    form = $("#submit_request")

    for key,val of param
      break unless val?
      tag = $("""<input type="hidden" name="#{key}">""")
      tag.attr "value", val
      form.append tag

    form[0].submit()
    $("#submit_request").remove()

  $scope.post_submit = (href, param)->
    $("body").append("""<form id="submit_request" method="post" action="#{href.escapeURL()}##{location.hash}"></form>""")
    form_submit(param)
    $scope.pool_nolimit()

  $scope.post_iframe = (href, param, cb)->
    dynamic_div = document.createElement 'DIV'
    dynamic_div.innerHTML = """<iframe name="submit_result" style="display: none;"></iframe>"""
    document.body.appendChild dynamic_div 

    iframe = $('iframe')
    iframe[0].contentWindow.name = "submit_result"

    iframe.load ->
      $scope.pool_nolimit()
      $('iframe').remove()
  
    $("body").append("""<form id="submit_request" target="submit_result" method="post" action="#{href.escapeURL()}"></form>""")
    form_submit(param)

  $scope.ajax_event = (turn, href, is_news)->    
    if $scope.events?
      event = $scope.event
      change = ->
        $scope.set_turn(turn)
        $scope.event.is_news = is_news
        $scope.page.value = 1
        $scope.mode.value = $scope.mode_cache.talk
        $scope.boot()
        href = $scope.event_url $scope.event
        win.history "#{$scope.event.name}", href, location.hash

      if event.has_all_messages
        change()
      else
        if is_news
          getter = $scope.get_news
        else
          getter = $scope.get_all 
        getter event, =>
          $scope.init()
          change()

    else
      location.href = href + location.hash

  $scope.$watch "event.turn", (turn, oldVal)->
    $scope.ajax_event(turn, null, !! $scope.event.is_news) if turn? && $scope.event?

