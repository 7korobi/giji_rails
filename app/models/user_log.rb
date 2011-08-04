class UserLog
  include Giji
  
  key :user_log_id
  field :user_log_id
  
  validates_uniqueness_of :user_log_id
end


