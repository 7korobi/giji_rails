class ChrNpc
  include Giji
  
  key   :face_id
  field :csid
  field :caption, limit: 15
  field :npc,     limit: 30, type: Array
  
  embedded_in :chr_set, inverse_of: :chr_npcs
  referenced_in :face

  default_scope order_by(:face_id.asc)
  def initialize(options)
    super
    self.npc = ["",""] unless npc
  end
end

