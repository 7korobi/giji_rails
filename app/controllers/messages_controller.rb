class MessagesController < BasePastLogController
  expose(:potofs){ story.potofs.cache }
  expose(:events){ story.events.summary.cache }

  expose(:event){ story.events.where(turn: params[:turn]).cache.first }
  expose(:messages){ event.messages.summary.cache.page(params[:page]).per(params[:page_per] || 50) }
  expose(:message)
  
  respond_to :html, :json
  def index
  end
  def show
  end
end
