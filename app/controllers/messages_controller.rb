class MessagesController < BasePastLogController
  expose(:events_summary){ story.events.summary.cache }  
  expose(:events){ story.events.order_by(turn:1).cache }
  expose(:event){ story.events.where(turn: params[:turn]).cache.first }
  expose(:messages){ event.messages.summary.cache }

  respond_to :html, :json

  def index
    base
    gon.events = events_summary.map do |event|
      { turn: event.turn,
        name: event.name,
        link: messages_path(event.story_id, event.turn),
      }
    end
    vil_info event
    gon.event  = event
  end

  def file
    base
    events.each do |event|
      event.name = event.name
      vil_info event
    end
    gon.events = events
    gon.event = {turn:0}

    render :index
  end

  protected
  def vil_info(event)
    event.messages.unshift Message.new(
      template: "sow/village_info",
      logid:    "vilinfo00000",
    )
    event[:has_all_messages] = true
  end

  def base
    story[:link] = events_path(story.id)
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
