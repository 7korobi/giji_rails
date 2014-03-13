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
end
