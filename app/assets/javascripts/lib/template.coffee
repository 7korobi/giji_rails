GIJI.interpolates = {}
GIJI.jsts  = {}
GIJI.template = ($compile, $scope, elm, name)->
  template = JST[name]
  compiled = $compile(template)($scope)
  elm.append compiled

angular.module("giji.directives").directive "template", ["$interpolate","$compile", ($interpolate, $compile)->
  if JST?
    for key,val of JST
      if key.startsWith "message/"
        GIJI.interpolates[key] = $interpolate(val)

  for idx,val in $("script[type='text/x-tmpl']")
    html = $(val).html()
    GIJI.interpolates[val.id] = $interpolate(html)

  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    name = attr.template
    GIJI.template $compile, $scope, elm, name
]

angular.module("giji.directives").directive "listup", ["$compile", ($compile)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    elm.addClass('ng-binding').data('$binding', attr.listup);
    $scope.$watch attr.listup, (value)->
      template = ""
      template = "<p>"+value.join("</p><p>")+"</p>" if value?
      compiled = $compile(template)($scope)
      elm.html compiled
]

angular.module("giji.directives").directive "form", ["$compile", ($compile)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    elm.addClass('ng-binding').data('$binding', attr.form);
    $scope.$watch attr.form, (value)->
      template = JST["form/#{value}"]
      compiled = $compile(template)($scope)
      elm.html  compiled
]


