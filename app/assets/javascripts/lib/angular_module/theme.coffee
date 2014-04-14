angular.module("giji").directive "theme", ($compile, $cookies)->
  initialize = ($scope, elm, attr)->
    $scope.selectors = OPTION.selectors
    $scope.selector_keys = {}
    for key, val of OPTION.selectors
      $scope.selector_keys[key] = Object.keys val

    redesign_in_time = ->
      date = Number(new Date)
      hour = 1000 * 60 * 60
      size = OPTION.css.h1.widths[$scope.styles.width]
      day_or_night = ((date + 3*hour) / (12*hour)) % 2
      $scope.h1 =
         type:  OPTION.head_img[size][$scope.styles.theme][Math.floor day_or_night]
        width: size
      $scope.h1.path = "#{URL.file}/images/banner/title#{size}#{$scope.h1.type}"

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
      ]
      $scope.html_class.push 'no-player' unless $scope.msg_styles.pl
      $scope.html_class.push 'win' if head.browser.win
      $scope.html_class.push 'mac' if head.browser.mac

    css_apply = ->
      $scope.styles = $scope.css.choice()
      html_class()

    css_change = ->
      css = _.compact _.uniq [
        $scope.styles.theme
        $scope.styles.width
        $scope.styles.font
      ]
      $scope.css.value = css.join("_")

      redesign_in_time()
    css_apply()


    OPTION.page.msg_style.options.current = "#{head.browser.power}_asc_50"

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

    $scope.$watch 'msg_styles.row', ->
      $cookies.row = $scope.msg_styles.row

    $scope.$watch 'css.value', css_apply
    $scope.$watch 'styles.theme', css_change
    $scope.$watch 'styles.width', css_change
    $scope.$watch 'styles.font',  css_change

    $scope.$watch 'msg_style.value', msg_apply
    $scope.$watch 'msg_styles.power',  msg_change
    $scope.$watch 'msg_styles.order', msg_change
    $scope.$watch 'msg_styles.row',  msg_change
    $scope.$watch 'msg_styles.pl',  msg_change

  restrict: "A"
  templateUrl: "theme/css"

  link: ($scope, elm, attr, ctrl)->
    initialize($scope, elm, attr)
    initialize = ->
