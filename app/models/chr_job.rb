class ChrJob
  include Giji

  key   :face_id
  field :job
  referenced_in  :face
  embedded_in :chr_sets, :inverse_of => :chr_set
end

