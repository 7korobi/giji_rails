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
    gon.event  = event.attributes
    gon.potofs = story.potofs.cache.map(&:attributes)
  end
end
