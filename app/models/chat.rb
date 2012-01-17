class Chat
  include Giji
  include Mongoid::Timestamps::Created

  key   :logid
  field :logid
  field :target
  field :log
  field :style
  referenced_in :potof, inverse_of: :chats
end
