class Request
  include Giji
  field :http_user_agent
  field :remote_ip
  field :handle
  timestamp :at
  
  references_many :chats
  
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
