class EventsController < BasePastLogController
  respond_to :html, :json
  def index
    gon.folder = story.folder
    gon.story  = story.attributes

  end
end
