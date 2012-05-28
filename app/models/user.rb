class User
  include Giji

  key   :user_id
  field :user_id,    limit: 30
  field :name,       limit: 30
  field :email,      limit: 30, allow_blank: true, allow_nil: true
  field :is_admin, type: Boolean, hidden: true
  field :rails_token,             hidden: true

  devise :trackable, :omniauthable
  has_many :auths,    inverse_of: :user

  validates_uniqueness_of :user_id
  validates_uniqueness_of :email, allow_blank:true

  def admin?
    is_admin
  end

  def login?
    user_id.present? && name.present?
  end
end


