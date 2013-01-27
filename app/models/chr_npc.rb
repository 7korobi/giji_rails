class ChrNpc
  include Giji

  field :_id, default: ->{ face_id }
  field :csid
  field :caption
  field :say_0
  field :say_1

  embedded_in :chr_set, inverse_of: :chr_npcs
  belongs_to :face

  default_scope order_by(:face_id.asc)

  validates_length_of :caption, in: 1.. 15
  validates_length_of :say_0,   in: 1..140
  validates_length_of :say_1,   in: 1..140

  def says
    [say_0, say_1]
  end
end

