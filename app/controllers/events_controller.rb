class EventsController < BasePastLogController
  expose(:potofs){ story.potofs.cache }

  expose(:events){ story.events.summary.cache }
  expose(:event)

  respond_to :html, :json
  def index
  end
end
