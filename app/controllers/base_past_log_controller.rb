class BasePastLogController < ApplicationController
  expose(:story)

  before_filter :login_require
  before_filter :finish_require

  protected
  def finish_require
    authenticate_deny unless story.is_finish
  end
end
