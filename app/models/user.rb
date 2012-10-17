class User
  include Giji

  key   :user_id
  field :user_id,    limit: 30
  field :name,       limit: 30
  field :email,      limit: 30, allow_blank: true, allow_nil: true
  field :is_admin, type: Boolean,   hidden: true
  field :rails_token,               hidden: true
  field :sow_auth_ids, type: Array, hidden: true
  field :byebye_ids,   type: Array, hidden: true

  devise :trackable, :omniauthable
  has_many :auths,    inverse_of: :user

  validates_each :sow_auth_ids do |record, field, value|
    if 0 < where(field.in => value.to_a).count
      record.errors.add field, "already in use."
    end
  end
  validates_uniqueness_of :user_id
  validates_uniqueness_of :email, allow_blank:true

  def admin?
    is_admin
  end

  def login?
    user_id.present? && name.present?
  end

  def byebyes
    byebye_ids.to_a.join("\n")
  end
  def byebyes=(str)
    self[:byebye_ids] = str.to_s.lines.map(&:strip).compact
  end

  def sow_auths
    sow_auth_ids.to_a.join("\n")
  end
  def sow_auths=(str)
    self[:sow_auth_ids] = str.to_s.lines.map(&:strip).compact
  end
end


