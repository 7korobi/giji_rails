class ChrNpc
  include Giji
  key   :face_id
  field :caption
  field :npc, type: Array
  
  referenced_in :face
end

