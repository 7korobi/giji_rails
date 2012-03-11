class GameRole
  include Giji
  
  belongs_to :game_event, inverse_of: :game_roles
end
