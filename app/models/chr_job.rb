class ChrJob
  include Giji

  field :_id, default: ->{ face_id }
  field :job

  belongs_to  :face, inverse_of: :chr_jobs
  embedded_in :chr_set, inverse_of: :chr_jobs

  default_scope -> { order_by(:face_id.asc) }

  validates_length_of :job,    in: 1..15
end

