class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  PROVIDERS = OMNI_AUTH[:provider_secure].keys | OMNI_AUTH[:provider_open].keys
  protect_from_forgery :except => PROVIDERS

  def callback
    sign_in Auth.authenticate( request.env["omniauth.auth"] )
  end

  PROVIDERS.each do |provider|
  	alias_method provider, :callback
  end
end
