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
    group = _.groupBy list
    for key, val of group
      counts.push [key, val.length]

    _.sortBy counts, ([key, size])->
      size
    .map ([key, size])->
      if 1 < size
        "#{filter(key)}x#{size}"
      else
        "#{filter(key)}"

  $scope.remove_card = (at, idx)->
    $scope.story.card[at].splice idx, 1

