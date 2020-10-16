class Potof
  include Giji

  field :user_id
  field :face_id
  field :name

  belongs_to :event,  inverse_of: :potofs, optional: true
  belongs_to :story,  inverse_of: :potofs, optional: true
end
