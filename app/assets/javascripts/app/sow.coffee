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
    iframe_load = (doc)->
      $scope.form = null
      if 20 < doc.length
        $scope.replace_gon doc

        INIT $scope
        $scope.top.count()
        $scope.face.scan()
        $scope.pool_start()
        $scope.$apply()

    $("#submit_request").remove()
    if 'editvilform' == param.cmd 
      $("body").append("""<form id="submit_request" method="post" action="#{$scope.form.uri.escapeURL()}##{location.href}"></form>""")

    else
      iframe = $('iframe')
      if 0 == iframe.length
        dynamic_div = document.createElement 'DIV'
        dynamic_div.innerHTML = """<iframe name="submit_result" style="display: none;"></iframe>"""
        document.body.appendChild dynamic_div 

        iframe = $('iframe')
        iframe[0].contentWindow.name = "submit_result"

      iframe.load ->
        new_item = $(@).contents().find("body")
        iframe_load new_item.html()
    
      $("body").append("""<form id="submit_request" target="submit_result" method="post" action="#{$scope.form.uri.escapeURL()}##{location.href}"></form>""")

    form = $("#submit_request")

    param.keys (key,val)->
      return unless val?
      tag = $("""<input type="hidden" name="#{key}">""")
      tag.attr "value", val
      form.append tag

    form[0].submit()


