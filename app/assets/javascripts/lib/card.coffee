CARD = ($scope)->
  $scope.configname = (o)->
    SOW.roles[o]?.name || SOW.gifts[o]?.name || SOW.events[o]?.name || o || ""

  $scope.winname = (o)->
    SOW.wins[o]?.name || o || ""

  $scope.countup_config = (list)->
    $scope.countup($scope.configname, list)

  $scope.countup_win = (list)->
    $scope.countup($scope.winname, list)

  $scope.countup = (filter, list)->
    counts = []
    group = list.groupBy()
    group.keys (key,val)->
      counts.push [val.length, key]

    counts.sortBy ([size, key])->
      size
    .map ([size, key])->
      if 1 < size
        "#{filter(key)}x#{size}"
      else
        "#{filter(key)}"

  $scope.remove_card = (at, idx)->
    $scope.story.card[at].removeAt idx

