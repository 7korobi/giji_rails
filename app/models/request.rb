class Request
  include Giji
  include Mongoid::Timestamps::Created

  field :remote_ip
  field :user_agent
  field :fowardedfor
  has_and_belongs_to_many :sow_auths, inverse_of: nil
  has_and_belongs_to_many :users,     inverse_of: nil

  def self.find_or_create_by(request)
    key = {
      remote_ip:  request.remote_ip,
      user_agent: request.env["HTTP_USER_AGENT"]
    }
    super(key)
  end
end
