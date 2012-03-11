class ChrJob
  include Giji

  key   :face_id
  field :job, limit: 15

  belongs_to  :face, inverse_of: :chr_jobs
  embedded_in :chr_set, inverse_of: :chr_jobs

  default_scope order_by(:face_id.asc)
end

