class ChrSet
  include Giji

  key   :csid
  field :csid
  field :maker
  field :admin
  embeds_many  :chr_jobs
  references_many  :chr_npcs
end

