class UserLog
  include Giji
  
  field :_id, default: ->{ [folder, user_id].join("-").downcase }
  field :folder
  belongs_to :user, inverse_of: :user_logs
end


