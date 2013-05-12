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

    param.keys (key,val)->
      return unless val?
      tag = $("""<input type="hidden" name="#{key}">""")
      tag.attr "value", val
      form.append tag

    form[0].submit()
    $("#submit_request").remove()

  $scope.post_submit = (href, param)->
    $("body").append("""<form id="submit_request" method="post" action="#{href.escapeURL()}##{location.hash}"></form>""")
    form_submit(param)

  $scope.post_iframe = (href, param, cb)->
    iframe = $('iframe')
    if 0 == iframe.length
      dynamic_div = document.createElement 'DIV'
      dynamic_div.innerHTML = """<iframe name="submit_result" style="display: none;"></iframe>"""
      document.body.appendChild dynamic_div 

      iframe = $('iframe')
      iframe[0].contentWindow.name = "submit_result"

    iframe.load ->
      new_item = $(@).contents().find("body")
      doc = new_item.html()

      $scope.form = null
      if 20 < doc.length
        $scope.replace_gon doc
        cb()
        $scope.$apply()
  
    $("body").append("""<form id="submit_request" target="submit_result" method="post" action="#{href.escapeURL()}"></form>""")
    form_submit(param)

  $scope.ajax_event = (turn, href, is_news)->    
    if $scope.events?
      event = $scope.events[turn]
      change = ->
        $scope.set_turn(turn)
        $scope.event.is_news = is_news
        $scope.page.value = 1
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

