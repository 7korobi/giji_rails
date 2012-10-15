class EventsController < BasePastLogController
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
    gon.potofs = story.potofs.cache.map(&:attributes)
  end
end
