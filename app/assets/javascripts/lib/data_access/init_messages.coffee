INIT_MESSAGES = (new_base)->
  return unless new_base?.messages?
  if new_base.turn?
    for message in new_base.messages
      message.turn = new_base.turn
      if message.date?
        message.updated_at = message.date 
        delete message.date
      message.updated_at = Date.create message.updated_at
      



