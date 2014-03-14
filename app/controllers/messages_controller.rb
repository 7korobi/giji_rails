class MessagesController < BasePastLogController
  expose(:events_summary){ story.events.summary.cache }
  expose(:events) do
    story.events.order_by(turn:1).cache.map do |e|
      e.messages = Message.by_event_id(e.id)
      vil_info e
      e
    end
  end
  expose(:event) do
    Message
    e = story.events.where(turn: params[:turn]).cache.first
    e.messages = Message.by_event_id(e.id)
    vil_info e
    e
  end

  respond_to :html, :json

  def index
    base
    gon.events = events_summary.map do |event|
      { turn: event.turn,
        name: event.name,
        link: messages_path(event.story_id, event.turn),
      }
    end
    gon.event = event
  end

  def file
    base
    gon.events = events
    gon.event = {turn:0}

    render :index
  end

  protected
  def vil_info(event)
    msg = {
      logid:    "vilinfo00000",
      template: "sow/village_info",
    }

    event.messages.unshift msg
    event[:has_all_messages] = true
  end

  def base
    story[:link] = message_file_path(story.id)
    gon.folder = story.folder
    gon.story  = story
    gon.potofs = story.potofs.order_by(:pno.asc).cache
  end

  def theme
    case story.folder
    when "PAN"
      "pan"
    else
      "giji"
    end
  end
end
