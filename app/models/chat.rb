class Chat
  include Giji
  include Mongoid::Timestamps::Created

  key   :logid
  field :logid
  field :to
  field :log
  field :style
  belongs_to :potof, inverse_of: :chats
end
