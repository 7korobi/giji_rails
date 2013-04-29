class MessagesController < BasePastLogController
  expose(:event){ story.events.where(turn: params[:turn]).cache.first }
  expose(:messages){ event.messages.summary.cache }

  respond_to :html, :json

  def index
    gon.folder = story.folder
    gon.story  = story.attributes.merge(
      link: events_path(story.id),
    )
    gon.events = story.events.summary.cache.map do |event|
      { turn: event.turn,
        name: event.name,
        link: messages_path(event.story_id, event.turn),
      }
    end

    event_attr = event.attributes
    event_attr["messages"].unshift(
      template: "sow/village_info",
      logid:    "vilinfo00000",
    )
    gon.event  = event_attr
    gon.potofs = story.potofs.order_by(:pno.asc).cache.map(&:attributes)
  end

  protected
  def theme
    case story.folder
    when "PAN"
      "pan"
    else
      "giji"
    end
  end
end
