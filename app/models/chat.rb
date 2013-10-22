class Chat
  include Giji
  include Mongoid::Timestamps::Created

  field :_id, default: ->{ logid }
  field :logid
  field :to
  field :log
  field :style
  field :date, type: Time
  belongs_to :potof, inverse_of: :chats
end
