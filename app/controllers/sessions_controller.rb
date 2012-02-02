class SessionsController < ApplicationController
  protect_from_forgery :except => %w[callback]

  def failer
    flash[:error] = t 'omniauth.ng'
    logout
  end
  def callback
    login Auth.authenticate( request.env["omniauth.auth"] )
  end

  def destroy
    logout
  end
end

