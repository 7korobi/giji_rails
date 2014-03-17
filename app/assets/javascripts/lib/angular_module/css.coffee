angular.module("giji").directive "theme", ($compile)->
  restrict: "A"
  templateUrl: "theme/css"

  link: ($scope, elm, attr, ctrl)->
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
         type:  OPTION.head_img[size][$scope.styles.theme][day_or_night.floor()]
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
        'no-player' unless $scope.msg_styles.pl
      ]

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

    if $scope.event?.messages?
      Navi.push $scope, 'search',
        options:
          current: ""
          location: 'hash'
          is_cookie: false

      Navi.push $scope, 'mode',
        options:
          current: $scope.mode_cache.talk
          location: 'hash'
          is_cookie: false
        select: GIJI.modes

      modes_apply = ->
        console.log ["modes_apply"]
        $scope.modes = $scope.mode.choice()

      modes_change = ->
        console.log ["modes_change"]
        info_at = $scope.info_at
        if info_at?
          if "info" == $scope.modes.face && "all" == $scope.modes.view
            info_at.value = Number(new Date) unless info_at.value
          else
            info_at.value = ""

        switch $scope.modes.face
          when "info"
            if "all" == $scope.modes.view
              $scope.modes.last = false
            else
              $scope.modes.view = "open"
              $scope.modes.last = true
          when "memo"
            $scope.modes.open = true
            if "all" != $scope.modes.view
              $scope.modes.view = "open"

        if "open" == $scope.modes.view
          $scope.modes.open = true

        mode = _.compact _.uniq [
          $scope.modes.face
          $scope.modes.view
          'open'   if $scope.modes.open
          'last'   if $scope.modes.last
        ]
        $scope.mode.value = mode.join("_")
        $scope.mode_select = _.filter $scope.mode.select, (o)->
          o.face == $scope.modes.face

        $scope.mode_cache[$scope.modes.face] = $scope.mode.value
        $scope.deploy_mode_common()
      modes_apply()

    if $scope.modes?
      $scope.$watch 'mode.value',   modes_apply
      $scope.$watch 'modes.open',   modes_change
      $scope.$watch 'modes.face',   modes_change
      $scope.$watch 'modes.view',   modes_change
      $scope.$watch 'modes.last',   modes_change

    $scope.$watch 'css.value', css_apply
    $scope.$watch 'styles.theme', css_change
    $scope.$watch 'styles.width', css_change
    $scope.$watch 'styles.font',  css_change

    $scope.$watch 'msg_style.value', msg_apply
    $scope.$watch 'msg_styles.power',  msg_change
    $scope.$watch 'msg_styles.order', msg_change
    $scope.$watch 'msg_styles.row',  msg_change
    $scope.$watch 'msg_styles.pl',  msg_change
