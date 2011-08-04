class Message < Chat
  include Giji

  field :subid
  field :mestype
  field :csid
  field :name
  referenced_in :face
  referenced_in :potof
  embedded_in :event, inverse_of: :event
end
