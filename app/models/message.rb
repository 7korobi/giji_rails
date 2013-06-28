# -*- coding: utf-8 -*-

class Message < Chat
  field :_id, default: ->{ [subid, logid].join("-") }
  field :color
  field :style
  field :subid
  field :mestype
  field :csid
  field :name
  belongs_to :face,  inverse_of: :messages
  belongs_to :potof, inverse_of: :messages
  embedded_in :event,   inverse_of: :messages

  scope  :summary, order_by(:date.asc)

  def text
    if  /^INFO/ === mestype
      self.class.to_fair( log, nil )
    else
      self.class.to_fair( log, true )
    end
  rescue
    ""
  end

  def img
    "/images/portrate/#{face_id}.jpg" if face_id.present?
  end

  def slice keys
    keys.map(&:to_sym).each_with_object({}) do |key, o|
      o[key] = send(key)
    end
  end
end

