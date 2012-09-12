class BaseLogController < ApplicationController
  expose(:story)

  protected
  def self?
    story.user_id == current.user.try(:id)
  end
end
