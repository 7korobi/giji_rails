class ApplicationController < ActionController::Base
  helper_method :gon

  protect_from_forgery
  include CurrentAuthenticated
end
