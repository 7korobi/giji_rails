INIT_FORM = (new_base)->
  return unless new_base?.commands?
  new_base.command_group = _.groupBy new_base.commands, (o)-> o.jst

INIT_POTOFS = ($scope, gon)->
  if gon.potofs?
    for potof in gon.potofs
      INIT_POTOF $scope, potof, gon

INIT = ($scope, $filter)->
  return unless gon?

  INIT_POTOFS $scope, gon

  if gon.stories?
    for story in gon.stories
      INIT_STORY $scope, story

  if gon.story?
    INIT_STORY $scope, gon.story


  for key, news of gon
    $scope.merge $scope, gon, key
  $scope.merge_turn $scope, gon


  if $scope.potofs?
    live_potofs = _.filter $scope.potofs, (o)->
      o.deathday < 0

    $scope.potofs.mob = ->
      _.filter $scope.potofs, (o)-> "mob" == o.live
    $scope.sum =
      actaddpt: 
        _.reduce live_potofs, (sum, o)-> 
          sum + o.point.actaddpt
        , 0

    potofs_hash = 
      others: "他の人々"
    for potof in $scope.potofs
      key = $scope.potof_key potof
      potofs_hash[key] = potof.name

    unless $scope.hide_potofs?
      ArrayNavi.push $scope, 'hide_potofs',
        options:
          class: 'btn-inverse'
          current: []
          location: 'hash'
          is_cookie: true
        button: potofs_hash

  if $scope.pages?
    unless $scope.page?
      PageNavi.push $scope, 'page', OPTION.page.page_search

    $scope.page.length = gon.pages.length

  has_messages = false
  has_messages or= $scope.event?.messages?
  has_messages or= $scope.messages_raw?
  has_messages or= $scope.stories?
  if has_messages
    row = OPTION.page.row
    row.options.current_type = Number
    unless $scope.row?
      Navi.push     $scope, 'row',   row
    unless $scope.order?
      Navi.push     $scope, 'order', OPTION.page.order
    unless $scope.page?
      FILTER($scope, $filter)


