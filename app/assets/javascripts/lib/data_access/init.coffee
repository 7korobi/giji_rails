INIT_FORM = (new_base)->
  return unless new_base?.commands?
  new_base.command_group = _.groupBy new_base.commands, (o)-> o.jst

INIT_POTOFS = ($scope, gon)->
  if gon.potofs?
    for potof in gon.potofs
      potof.story = gon.story
      potof.event = gon.event
      potof.potofs = gon.potofs
      potof.scope = $scope
      potof.__proto__ = Potof.prototype
      potof.init_bonds()
      potof.init_win()
      potof.init_stat()
      potof.init_role()
      potof.init_text()
      potof.init_said()
      potof.init_timer($scope)

INIT = ($scope, $filter, $timeout)->
  return unless gon?

  $scope.error_text ||= {}

  INIT_POTOFS $scope, gon

  if gon.stories?
    for story in gon.stories
      story.__proto__ = StorySummary.prototype
      story.init($scope)

  if gon.story?
    gon.story.__proto__ = Story.prototype
    gon.story.init($scope)

  for key, news of gon
    $scope.merge $scope, gon, key
  $scope.merge_turn $scope, gon

  if $scope.potofs?
    live_potofs = _.filter $scope.potofs, (o)-> o.is_live()

    $scope.potofs.mob = ->
      _.filter $scope.potofs, (o)-> o.is_mob()
    $scope.sum =
      actaddpt:
        _.reduce live_potofs, (sum, o)->
          sum + o.point.actaddpt
        , 0

    potofs_hash =
      others: "他の人々"
    for potof in $scope.potofs
      potofs_hash[potof.key] = potof.name

    unless $scope.hide_potofs?
      ArrayNavi.push $scope, 'hide_potofs',
        options:
          class_select: 'inverse'
          class_default: 'plane'
          current: []
          location: 'hash'
          is_cookie: true
        button: potofs_hash

  if $scope.pages?
    unless $scope.page?
      PageNavi.push $scope, 'page', OPTION.page.page_search

    $scope.page.length = gon.pages.length



