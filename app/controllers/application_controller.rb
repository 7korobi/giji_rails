class ApplicationController < ActionController::Base
  expose(:css){ params[:css] || OPTION[:css_wday][Time.now.wday] }

  protect_from_forgery
  include CurrentAuthenticated
end
