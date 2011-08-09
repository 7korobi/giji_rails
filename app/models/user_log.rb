class UserLog
  include Giji
  
  key :folder, :user_id
  field :folder
  referenced_in :user, inverse_of: :user_logs
  
end


