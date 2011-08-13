class GameRole
  include Giji
  
  referenced_in :game_event, inverse_of: :game_roles
end
