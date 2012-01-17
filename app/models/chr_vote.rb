class ChrVote
  include Giji
  include Mongoid::Timestamps::Created
  key   :face_id, :user_id
  field :phase
  field :comment

  referenced_in :user, inverse_of: :chr_votes
  referenced_in :face, inverse_of: :chr_votes
end

