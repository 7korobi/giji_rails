class Chat
  include Giji

  key   :logid
  field :logid
  field :target
  field :log
  field :style
  timestamp :at
  referenced_in :potof, inverse_of: :chats
end
