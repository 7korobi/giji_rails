class Potof
  include Giji

  field :user_id
  field :face_id
  field :name

  referenced_in :event,      inverse_of: :potofs
end
