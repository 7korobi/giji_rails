module GijiHelper
  def link_to_folder(title, folder)
    link_to title, GAME[folder][:config][:cfg][:URL_SW] + "/sow.cgi?css=#{css}"
  end

  def link_to_css(title,css)
    link_to_unless_current(title, css: css)
  end

  def head_img
    size = 458 if css_name['480']
    size = 580 if css_name['800']

    style = {
      cinema800: %w[r c],
      cinema480: %w[r c],
      star800:   %w[r c],
      star480:   %w[r c],
      wa800:     %w[b w],
      wa480:     %w[b w],
      night800:  %w[b w],
      night480:  %w[b w]
    }
    img = style[css.to_sym][(Time.now.to_i / 12.hours)%2]
    link_to_lobby image_tag("/images/banner/title#{size}#{img}.jpg")
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
        items << capture{render 'giji/message', options}
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
        items << capture{render 'giji/message', options}
      end
    end.html_safe
  end

  SUBID_RENDERS = GIJI[:message][:mestype]
  def render_message(message)
    if message.template
      text = message.log.gsub(/<mw (\w+),(\d+),(\d+)>/) do
        link_to ">>#{$1}", message_path(event.story_id, $2, $1.downcase), class:'res_anchor'
      end.gsub(URI.regexp) do
        uri = Regexp.last_match[0]
        if $1.present? && $4.present?
          link_to "<<#{$4}>>", uri, class:'res_anchor'
        else
          uri
        end
      end
      options = message.slice %w[logid color style img name to time]
      render message.template, options.merge(text:text)
    else
      message.attributes.inspect
    end
  end
end
