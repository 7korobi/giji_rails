
GIJI.change_turn = (href, turn)->
  href.replace(///
    /\d+/messages
  ///,"/#{turn}/messages")

RAILS = ($scope, $filter)->
  MODULE   $scope, $filter
