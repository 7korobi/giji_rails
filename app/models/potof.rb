class Potof
  include Giji

  field :user_id
  field :face_id
  field :name

  references_many :messages, inverse_of: :potofs
  referenced_in :event,      inverse_of: :potofs
end
