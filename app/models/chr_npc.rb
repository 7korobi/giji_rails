class ChrNpc
  include Giji

  key   :face_id
  field :csid
  field :caption, limit: 15
  field :say_0,   limit: 140
  field :say_1,   limit: 140

  embedded_in :chr_set, inverse_of: :chr_npcs
  referenced_in :face

  default_scope order_by(:face_id.asc)

  def says
    [say_0, say_1]
  end
end

