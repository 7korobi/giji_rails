class Chat
  include Giji

  field :_id, default: ->{ logid }
  field :logid
  field :to
  field :log
  field :style
  field :date, type: Time
  belongs_to :potof, inverse_of: :chats
  belongs_to :story, inverse_of: :chats
  belongs_to :event, inverse_of: :chats
end
