class ChrVote
  include Giji
  key   :face_id
  
  referenced_in :face, inverse_of: :chr_votes
end

