class User
  include Giji

  def self.find_by_id(id)
    id = Moped::BSON::ObjectId.from_string(id) rescue id
    find(id)
  end

  field :_id, default: ->{ user_id }
  field :user_id
  field :name
  field :email
  field :is_admin, type: Boolean
  field :rails_token
  field :sow_auth_ids, as: :sow_auths, type: Array::Line
  field :byebye_ids,   as: :byebyes,   type: Array::Line
  def sow_auth_ids
    self[:sow_auth_ids]
  end
  def byebye_ids
    self[:byebye_ids]
  end

  devise :trackable, :omniauthable
  has_many :auths,    inverse_of: :user

  default_scope -> { where(services:nil) }

  validates_each :sow_auth_ids do |record, field, value|
    if 0 < where(field.in => value.to_a, :user_id.ne => record.user_id).count
      record.errors.add :sow_auths, "already in use."
    end
  end
  validates_uniqueness_of :user_id
  validates_uniqueness_of :email, allow_blank: true

  validates_length_of :user_id, in: 1..30, allow_blank: true, allow_nil: true
  validates_length_of :name,    in: 1..30
  validates_length_of :email,   in: 1..30, allow_blank: true

  def admin?
    is_admin
  end

  def login?
    user_id.present? && name.present?
  end
end


