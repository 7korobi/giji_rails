class Message < Chat
  field :subid
  field :mestype
  field :csid
  field :name
  referenced_in :face,  inverse_of: :messages
  referenced_in :potof, inverse_of: :messages
  embedded_in :event,   inverse_of: :messages
end

