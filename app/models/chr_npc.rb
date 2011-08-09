class ChrNpc
  include Giji
  
  key   :face_id
  field :caption, limit: 15
  field :npc,     limit: 30, type: Array
  field :npc, type: Array
  
  embedded_in :chr_sets, :inverse_of => :chr_set
  referenced_in :face

  default_scope order_by(:face_id.asc)
  def initialize(options)
    super
    self.npc = ["",""] unless npc
  end
end

