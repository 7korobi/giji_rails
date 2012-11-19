class BaseLogController < ApplicationController
  expose(:story)

  protected
  def self?
    super || story.user_id == current.user.try(:id)
  end
end
