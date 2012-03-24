module GijiHelper
  def link_to_folder(title, folder)
    link_to title, GAME[folder][:config][:cfg][:URL_SW] + "/sow.cgi"
  end

  def index_parent_path
    case controller
    when TrpgEventsController, TrpgMessagesController
      trpg_stories_path
    when     EventsController,     MessagesController
      stories_path(story.folder)
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
      events_path(obj)
    else
      raise RuntimeError
    end
  end

  def messages_for_auth(auths)
    "".tap do |items|
      auths.each do |auth|
        options = {
          logid:'',
          color:'mes_think',
          style:'mes_text_report',
          img:auth.image,
          name:auth.provider,
          time:auth.updated_at,
          text: capture{yield auth},
        }
        items << capture{render 'giji/say', options}
      end
    end.html_safe
  end

  def messages_for_votes_group(faces_votes)
    "".tap do |items|
      faces_votes.each do |face_id,votes|
        options = {
          logid:'',
          color:'mes_think', 
          style:'mes_text_report',
          img:  "/images/portrate/#{face_id}.jpg", 
          name: Face.find(face_id).name, 
          time: votes.last.created_at, 
          text: capture{yield votes},
        }
        items << capture{render 'giji/say', options}
      end
    end.html_safe
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

  def render_message(message)
    if message.template
      options = message.slice %w[logid color style img name to time text]
      render 'giji/' + message.template, options
    else
      message.attributes.inspect
    end
  end
end
