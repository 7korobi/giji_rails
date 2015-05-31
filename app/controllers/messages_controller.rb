class MessagesController < BasePastLogController
  layout "mithril"

  expose(:events_summary){ story.events.summary.cache }
  expose(:events) do
    story.events.order_by(turn:1).cache
  end
  expose(:event) do
    story.events.where(turn: params[:turn]).first
  end

  respond_to :html, :json

  def index
    base
    turn = event.turn
    gon.event = event.as_json(include: "messages")
    gon.events = events.to_a.map do |event|
      event[:link] = messages_path(event.story_id, event.turn)
      event[:is_full] = ( turn == event.turn )
      event
    end.as_json
  end

  def file
    base
    events.each {|e| e[:is_full] = true }
    gon.event = {turn:0}
    gon.events = events.as_json(include: "messages")

    render :index
  end

  protected
  def vil_info(event)
    event.messages.unshift(
      logid:    "vilinfo",
      template: "sow/village_info",
      date: 3,
    )
    event.messages.unshift(
      logid:    "potofs",
      template: "message/cast",
      date: 2,
    )
    event.messages.unshift(
      logid:    "status",
      template: "sow/status_info",
      date: 1,
    )

    event[:has_all_messages] = true
  end

  def base
    story[:link] = message_file_path(story.id)
    gon.folder = story.folder.as_json
    gon.story  = story.as_json
    gon.potofs = story.potofs.order_by(:pno.asc).as_json
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
