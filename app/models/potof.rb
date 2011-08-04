class Potof
  include Giji

  referenced_in :event, inverse_of: :event
end
