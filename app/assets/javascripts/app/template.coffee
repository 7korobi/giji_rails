TEMPLATE = ($scope, $compile, $interpolate)->
  GIJI.interpolates = {}
  GIJI.jsts  = {}

  if JST?
    for key,val of JST
      if key.startsWith "navi/"
        GIJI.jsts[key]  = val

      if key.startsWith "giji/"
        GIJI.interpolates[key] = $interpolate(val)

  for idx,val in $("script[type='text/x-tmpl']")
    html = $(val).html()
    GIJI.interpolates[val.id] = $interpolate(html)

  $scope.template_append = (target, style)->
    $(target).append $compile(GIJI.jsts[style])($scope)

  $scope.template_replace = (target, style)->
    $(target).html $compile(GIJI.jsts[style])($scope)

  $("[template]").each (idx, target)->
    style = $(target).attr('template')
    $scope.template_append target, style
