class BasePastLogController < BaseLogController
  before_action :finish_require

  protected
  def finish_require
    authenticate_deny :not_finish unless story.is_epilogue
  end
end
