class ChrSet
  include Giji

  key   :chr_set_id
  field :maker, limit: 20
  field :admin, limit: 20

  embeds_many  :chr_jobs
  embeds_many  :chr_npcs
  accepts_nested_attributes_for :chr_jobs
  accepts_nested_attributes_for :chr_npcs

  default_scope order_by(:chr_set_id.asc)

  def faces
    Face.where(:face_id.in => face_ids )
  end
  def face_ids
    chr_jobs.map{|o| o.face_id}
  end
end
