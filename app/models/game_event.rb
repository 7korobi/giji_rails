class GameEvent < Event
  include Giji
  
  references_many :game_users, inverse_of: :game_event
  references_many :game_roles, inverse_of: :game_event
end
