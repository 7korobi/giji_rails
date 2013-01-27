class Auth
  include Giji
  include Mongoid::Timestamps
  
  field :provider
  field :uid

  field :oauth_token
  field :oauth_secret

  field :name
  field :nickname
  field :image

  belongs_to :user, inverse_of: :auths

  def login?
    uid.present?
  end
end

# for omniauth
class Auth
  def self.authenticate(auth)
    o = self.find_or_initialize_by(auth)
    o.attributes = {
      oauth_token:  auth["credentials"]["token"],
      oauth_secret: auth["credentials"]["secret"],
      name:       auth["info"]["name"],
      first_name: auth["info"]["first_name"],
      last_name:  auth["info"]["last_name"],
      nickname:   auth["info"]["nickname"],
      image:      auth["info"]["image"]
    }

    o.nickname = o.nickname.presence || "#{o.first_name} #{o.last_name}".presence
    o.name     = o.name.presence     || o.nickname
    o.nickname.force_encoding('utf-8')
    o.name    .force_encoding('utf-8')
    o.save
    o
  end

  def self.find_or_initialize_by(params)
    key = params.slice("provider", "uid")
    super(key)
  end
end
