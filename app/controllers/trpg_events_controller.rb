class TrpgEventsController < BaseLogController
  expose(:potofs){ story.potofs.cache }
  expose(:events){ story.events.summary.cache }

  expose(:trpg_events){ events }
  expose(:trpg_event)

  respond_to :html, :json

  def index
  end

  def show
  end

  def new
    trpg_event.story = story
  end

  def edit
    trpg_event.story = story
  end

  def create
    if trpg_event.save
      flash[:notice] = "successfully #{action_name}d."
    end
    respond_with trpg_event
  end

  def update
    if trpg_event.save
      flash[:notice] = "successfully #{action_name}d."
    end
    respond_with trpg_event
  end

  protected
  class Responder < ActionController::Responder
    def navigation_location
      @controller.trpg_messages_url @controller.story.id, @controller.trpg_event.turn
    end
  end
  def self.responder
    Responder
  end
end
