class MessagesController < BasePastLogController
  expose(:event){ story.events.where(turn: params[:turn]).cache.first }
  expose(:messages){ event.messages.summary.cache }

  respond_to :html, :json

  def index
    gon.folder = story.folder
  	gon.story  = story.attributes
    gon.event  = event.attributes
  end
end
