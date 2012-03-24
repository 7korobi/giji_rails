class BasePastLogController < BaseLogController
  before_filter :finish_require

  protected
  def finish_require
    authenticate_deny unless story.is_finish
  end
end
