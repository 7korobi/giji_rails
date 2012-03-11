class UserLog
  include Giji
  
  key :folder, :user_id
  field :folder
  belongs_to :user, inverse_of: :user_logs
end


