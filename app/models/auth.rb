class Auth
  include Giji
  key :provider, :uid
  field :provider
  field :uid
  field :name
  field :handle
  timestamp :at
  references_many :chats
  referenced_in :user, inverse_of: :auths

  def initialize(attributes = {})
    super
    self.save!
  end
  
  def login?
    uid.present?
  end
  
  def self.by_current(session)
    self.find(session[:auth_id]) rescue nil
  end
end

# for omniauth
class Auth
  def self.authenticate(auth)
    o = self.find_or_new(["provider","uid"], auth)
    o.attributes = {
      name:        auth["user_info"]["name"],
      screen_name: auth["user_info"]["nickname"]
    }
    o.save
    o
  end

  def self.find_or_new(only,params)
    key = params.slice(* only)
    self.where(key).first || self.new(key)
  end
end
