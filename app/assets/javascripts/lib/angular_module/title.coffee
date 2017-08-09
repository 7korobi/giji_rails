angular.module("giji").directive "title", ()->
  restrict: "E"
  link: ($scope, elm, attr, ctrl)->
    subtitle = ->
      mode_face = $scope.modes?.face
      event_name = $scope.event?.name
      if "info" == mode_face
        "情報"
      else
        event_name || ""

    title = ->
      name = $scope.story?.name || "人狼議事"
      if $scope.event?.unread_count
        "(#{$scope.event.unread_count}) #{name}"
      else
        "#{subtitle()} #{name}"

    fix_title = ->
      elm.text title $scope

    if history?.pushState?
      window.onpopstate = (event)->
        $scope.$apply ->
          for key, navi of Browser.real.list
            navi.popstate()

    $scope.$watch 'modes.face', fix_title
    $scope.$watch "story.name", fix_title
    $scope.$watch 'event.turn', fix_title
    $scope.$watch 'event.unread_count', fix_title


