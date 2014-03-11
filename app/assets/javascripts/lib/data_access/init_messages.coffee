
INIT_MESSAGES = (new_base)->
  return unless new_base?.messages?

  if new_base.turn?
    new_base.last_memo = {}
    for message in new_base.messages
      message.turn = new_base.turn

      if message.date?
        message.updated_at = message.date 
        delete message.date
      message.updated_at = Date.create message.updated_at

      if "M" == message.subid
        key = "#{message.mestype}:#{message.csid}/#{message.face_id}"
        if (! new_base.last_memo[key]) || new_base.last_memo[key].updated_at < message.updated_at
          new_base.last_memo[key] =
            log:        message.log
            updated_at: message.updated_at

