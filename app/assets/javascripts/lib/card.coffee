CARD = ($scope)->
  $scope.name =
    folder: (o)-> o
    config: (o)->
      SOW.roles[o]?.name || SOW.gifts[o]?.name || SOW.events[o]?.name || o || ""
    group: (o)->
      SOW.groups[o]?.name || "その他"
    win: (o)->
      SOW.wins[o]?.name || o || ""

  $scope.countup_config = (list)->
    $scope.countup($scope.name.config, list)

  $scope.countup_win = (list)->
    $scope.countup($scope.name.win, list)

  $scope.countup = (filter, list)->
    counts = []
    group = list.groupBy()
    group.keys (key,val)->
      counts.push [key, val.length]

    counts.sortBy ([key, size])->
      size
    .map ([key, size])->
      if 1 < size
        "#{filter(key)}x#{size}"
      else
        "#{filter(key)}"

  $scope.remove_card = (at, idx)->
    $scope.story.card[at].removeAt idx

