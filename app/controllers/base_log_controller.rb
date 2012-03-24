class BaseLogController < ApplicationController
  expose(:story)

  before_filter :login_require

  protected
  def self?
    story.user_id == current.user.try(:id)
  end
end
