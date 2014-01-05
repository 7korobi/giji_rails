
jQuery ->
  angular.bootstrap "html", ["giji"]

  FixedBox.push  angular.element,  0, 1, '#topviewer'
  FixedBox.push  angular.element,  1,-1, '#sayfilter'
  FixedBox.push  angular.element, -8,-8, '#buttons'

