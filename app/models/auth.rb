class Auth
  include Giji
  key :provider, :uid
  field :provider
  field :uid
  field :handle
  timestamp :at
  referenced_in :user, inverse_of: :auths

  field :name
  field :screen_name
  field :image

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
      name:        auth["info"]["name"],
      screen_name: auth["info"]["nickname"],
      image:       auth["info"]["image"]
    }
    o.save
    o
  end

  def self.find_or_new(only,params)
    key = params.slice(* only)
    self.where(key).first || self.new(key)
  end
end
