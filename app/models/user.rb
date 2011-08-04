class User
  include Giji
  
  key :user_id
  field :user_id, limit: 30
  field :name,       limit: 30
  field :email,      limit: 30, allow_blank: true, allow_nil: true
  field :is_admin, type: Boolean
  
  referenced_in :user_log
  references_many :auths
  references_and_referenced_in_many :requests
  
  validates_uniqueness_of :user_id
  validates_uniqueness_of :email

  def admin?
    is_admin
  end

  def login?
    user_id.present? && name.present?
  end

  def self.by_current(session, request)
    o = self.find(session[:user_id])
    o.request_ids << request.id
    o.request_ids.uniq!
    o
  rescue
    nil
  end
end


