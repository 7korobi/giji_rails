angular.module("giji").directive "theme", ($compile)->
  restrict: "A"
  templateUrl: "theme/css"

  link: ($scope, elm, attr, ctrl)->
    $scope.selectors = OPTION.selectors
    $scope.selector_keys = {}
    for key, val of OPTION.selectors
      $scope.selector_keys[key] = Object.keys val


    Navi.push $scope, 'css',
      options: OPTION.page.css.options
      select: GIJI.styles[attr.theme]

    html_class = ->
      return unless $scope.styles?
      return unless $scope.msg_styles?
      $scope.adjust()      
      $scope.html_class = [
        $scope.styles.item 
        $scope.styles.color
        $scope.styles.theme
        $scope.styles.width
        $scope.styles.pixel
        $scope.styles.font
        $scope.msg_styles.power
        'no-player' unless $scope.msg_styles.pl
      ]

    css_apply = ->
      $scope.styles = $scope.css.choice()
      html_class()

    css_change = ->
      css = _.compact _.uniq [ 
        theme = $scope.styles.theme
        width = $scope.styles.width
        font  = $scope.styles.font
      ]
      $scope.css.value = css.join("_")

      date = new Date
      $scope.h1 =
        type:  OPTION.head_img[theme][ (date / 60*60*12).ceil() % 2]
        width: OPTION.css.h1.widths[width]
      $scope.h1.path = "#{URL.file}/images/banner/title#{$scope.h1.width}#{$scope.h1.type}.jpg"
    css_apply()


    Navi.push $scope, 'msg_style',
      options: OPTION.page.msg_style.options
      select: GIJI.msg_styles

    msg_apply = ->
      $scope.msg_styles = $scope.msg_style.choice()
      html_class()

    msg_change = ->
      msg = _.compact _.uniq [
        head.browser.power = $scope.msg_styles.power        
        $scope.msg_styles.order
        $scope.msg_styles.row
        "no-player" unless $scope.msg_styles.pl
      ]
      $scope.msg_style.value = msg.join("_")
    msg_apply()

    _.delay ->
      $scope.msg_styles.power = head.browser.power
    , 2000

    $scope.$watch 'css.value', css_apply
    $scope.$watch 'styles.theme', css_change
    $scope.$watch 'styles.width', css_change
    $scope.$watch 'styles.font',  css_change

    $scope.$watch 'msg_style.value', msg_apply
    $scope.$watch 'msg_styles.power',  msg_change
    $scope.$watch 'msg_styles.order', msg_change
    $scope.$watch 'msg_styles.row',  msg_change
    $scope.$watch 'msg_styles.pl',  msg_change
