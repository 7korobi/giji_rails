class GameEvent < Event
  include Giji
  
  references_many :game_users
  references_many :game_roles
end
