angular.module("giji").directive "accordion", ->
  restrict: "C"
  scope: {}
  link: ($scope, elm, attr, ctrl)->
    elm.find("dd").hide()
    elm.find("dt").append('<div style="line-height:0; text-align:right; margin:-0.5ex 0 0.5ex 0;">↨</div>')
    elm.on 'click', 'dt', ($event)->
      elm.find("dd").hide()
      elm.find(this).next().show 'fast'
