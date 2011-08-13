class GameUser
  include Giji
  
  referenced_in :game_event, inverse_of: :game_users
end
