class GameEvent < Event
  include Giji
  
  has_many :game_users, inverse_of: :game_event
  has_many :game_roles, inverse_of: :game_event
end
