# -*- coding: utf-8 -*-

class Message < Chat
  include Faceable
  field :_id, default: ->{ [subid, logid].join("-") }
  field :color
  field :style
  field :subid
  field :mestype
  field :sow_auth_id
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

  def slice keys
    keys.map(&:to_sym).each_with_object({}) do |key, o|
      o[key] = send(key)
    end
  end
end

