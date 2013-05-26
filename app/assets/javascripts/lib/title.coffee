TITLE = ($scope)->
  title_change = ()->
    if $scope.story?
      if $scope.top?.focus
        $scope.title = "(#{$scope.top.news_size}) #{$scope.subtitle} #{$scope.story.name}"
      else
        $scope.title = "#{$scope.subtitle} #{$scope.story.name}"
    else
      $scope.title = "人狼議事"

  subtitle_change = ()->
    mode_face = $scope.modes?.face
    event_name = $scope.event?.name
    if "info" == mode_face
      $scope.subtitle = "情報"
    else if event_name
      $scope.subtitle = event_name
    else
      $scope.subtitle = ""

  titles_change = ()->
    subtitle_change()
    title_change()

  titles_change()
  $scope.$watch 'top.news_size',  title_change
  $scope.$watch 'top.focus',     title_change
  $scope.$watch 'modes.face',  titles_change
  $scope.$watch 'event.turn', titles_change

