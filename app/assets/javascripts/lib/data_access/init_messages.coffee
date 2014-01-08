INIT_MESSAGES = ($scope, new_base)->
  return unless new_base?.messages?
  if new_base.turn?
    for message in new_base.messages
      message.turn = new_base.turn
      if message.date?
        message.updated_at = Date.create(message.date) 
      message.updated_at ||= new Date
      if message.log?
        message.text = $scope.text_decolate message.log
        delete message.log


