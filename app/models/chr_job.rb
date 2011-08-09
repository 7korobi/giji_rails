class ChrJob
  include Giji

  key   :face_id
  field :job, limit: 15

  referenced_in  :face
  embedded_in :chr_sets, :inverse_of => :chr_set
  default_scope order_by(:face_id.asc)
end

