class User
  include Giji

  field :_id, default: ->{ user_id }
  field :user_id
  field :name
  field :email
  field :is_admin, type: Boolean
  field :rails_token
  field :sow_auth_ids, type: Array
  field :byebye_ids,   type: Array

  devise :trackable, :omniauthable
  has_many :auths,    inverse_of: :user

  default_scope where(services:nil)

  validates_each :sow_auth_ids do |record, field, value|
    if 0 < where(field.in => value.to_a, :user_id.ne => record.user_id).count
      record.errors.add :sow_auths, "already in use."
    end
  end
  validates_uniqueness_of :user_id
  validates_uniqueness_of :email, allow_blank:true

  validates_length_of :user_id, in: 1..30, allow_blank: true, allow_nil: true
  validates_length_of :name,    in: 1..30
  validates_length_of :email,   in: 1..30

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


