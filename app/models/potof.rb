class Potof
  include Giji

  references_many :messages, inverse_of: :potofs
  referenced_in :event,      inverse_of: :potofs
end
