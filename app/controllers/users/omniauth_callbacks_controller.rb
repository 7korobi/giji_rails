class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  protect_from_forgery :except => %w[twitter facebook mixi google yahoo]

  def callback
    login Auth.authenticate( request.env["omniauth.auth"] )
  end

  alias twitter  callback
  alias facebook callback
  alias mixi     callback
  alias google   callback
  alias yahoo    callback
end
