module GijiHelper
  def messages_for_auth(auths)
    "".tap do |items|
      auths.each do |auth|
        options = {style:'mes_think', img:auth.image, name:auth.provider, time:auth.updated_at, text: capture{yield auth}}
        items << capture{render 'giji/message', options}
      end
    end.html_safe
  end

  def messages_for_votes_group(faces_votes)
    "".tap do |items|
      faces_votes.each do |face_id,votes|
        options = {
          style:'mes_think', 
          img:  "/images/portrate/#{face_id}.jpg", 
          name: Face.find(face_id).name, 
          time: votes.last.created_at, 
          text: capture{yield votes}
        }
        items << capture{render 'giji/message', options}
      end
    end.html_safe
  end
end
