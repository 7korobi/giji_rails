class ChrSet
  include Giji

  field :_id, default: ->{ chr_set_id }
  field :chr_set_id
  field :maker
  field :admin

  embeds_many  :chr_jobs, inverse_of: :chr_set
  embeds_many  :chr_npcs, inverse_of: :chr_set
  accepts_nested_attributes_for :chr_jobs
  accepts_nested_attributes_for :chr_npcs

#  default_scope order_by(:chr_set_id.asc)

  validates_length_of :maker,    in: 1..20
  validates_length_of :admin,    in: 1..20

  def faces
    Face.where(:face_id.in => face_ids )
  end
  def face_ids
    chr_jobs.map(&:face_id)
  end
end
