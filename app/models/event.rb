class Event
  include Giji

  key   :story_id, :turn
  field :turn, type: Integer

  embeds_many :messages,   inverse_of: :event
  references_many :potofs, inverse_of: :event
  referenced_in :story,    inverse_of: :events

  scope :index, order_by(:turn.asc)
  paginates_per 50
end
