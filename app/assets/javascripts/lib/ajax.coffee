AJAX = ($scope, $http)->
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
    $http.get(href)
    .success (data)->
      $scope.replace_gon data
      cb()

  $scope.post = (href, param, cb)->
    $http.post(href, $.param param)
    .success (data)->
      $scope.replace_gon data
      cb()

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
    $("body").append("""<form id="submit_request" method="post" action="#{encodeURI(href)}"></form>""")
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

    $("body").append("""<form id="submit_request" target="submit_result" method="post" action="#{encodeURI(href)}"></form>""")
    form_submit(param)

