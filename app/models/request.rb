class Request
  include Giji

  field :remote_ip
  field :user_agent
  timestamp :at
  
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
