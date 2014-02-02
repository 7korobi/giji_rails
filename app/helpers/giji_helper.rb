module GijiHelper
  def index_parent_path
    case controller
    when TrpgEventsController, TrpgMessagesController
      trpg_stories_path
    when MessagesController
      stories_path(folder: story.folder)
    end
  end

  def show_path(obj)
    case obj
    when TrpgEvent
      trpg_messages_path(story, obj.turn)
    when TrpgStory
      trpg_events_path(story_id:obj)
    when Event
      messages_path(story, obj.turn)
    when Story
      message_file_path(obj)
    else
      raise RuntimeError
    end
  end

  SUBID_RENDERS = GIJI[:message][:mestype]
  def gon_templates
    options = %w[logid color style img name to time].each_with_object({}) do |item, hash|
      hash[item.to_sym] = "${#{item}}"
    end.merge(text:"{{html text}}")

    gon.templates = {}
    %w[action admin info say aim cast].map do |view|
      gon.templates[view] = capture{ yield(view, options) }
    end
  end
end
