class Request
  include Giji
  include Mongoid::Timestamps::Created
  cache

  field :remote_ip
  field :user_agent
  has_and_belongs_to_many :sow_auths, inverse_of: nil
  has_and_belongs_to_many :users,     inverse_of: nil

  def initialize(attributes = {})
    super
    save!
  end

  def self.find_or_new(request)
    key = {
      remote_ip:  request.remote_ip,
      user_agent: request.env["HTTP_USER_AGENT"]
    }
    self.where(key).first || self.new(key)
  end
end
