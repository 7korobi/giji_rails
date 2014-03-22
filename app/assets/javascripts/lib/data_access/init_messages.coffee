
INIT_MESSAGES = (new_base)->
  return unless new_base?.messages?

  if new_base.turn?
    new_base.last_memo = {}
    for message in new_base.messages
      message.__proto__ = Message.prototype
      message.init_data(new_base)

