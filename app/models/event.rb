class Event
  include Giji

  key   :story_id, :turn
  field :turn, type: Integer
  field :name

  embeds_many :messages, inverse_of: :event
  has_many :potofs,      inverse_of: :event
  belongs_to :story,     inverse_of: :events

  scope :summary, only(:turn, :name).order_by(:turn.asc)
  paginates_per 50
end
