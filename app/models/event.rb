class Event
  include Giji

  key   :story_id, :turn
  field :turn, type: Integer

  embeds_many :messages
  references_many :potofs
  referenced_in :story
end
