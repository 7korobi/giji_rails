# -*- coding: utf-8 -*-

class Message < Chat
  key :subid, :logid
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

  def template
    GIJI[:message][:template][:subid][subid] || GIJI[:message][:template][:mestype][mestype]
  end

  def color
    mestype
  end

  def time
    date.to_s(:lax_time)
  end

  def text
    self.class.to_fair(log)
  end

  def img
    "/images/portrate/#{face_id}.jpg" if face_id.present?
  end

  def slice keys
    keys.map(&:to_sym).each_with_object({}) do |key, o|
      o[key] = send(key)
    end
  end

  def gon
    options = slice(%w[template logid color style img time name to text])
  end

  def self.gon
    all.map &:gon
  end

  def self.to_fair(log = '')
    log.gsub(URI.regexp) do
      uri = Regexp.last_match[0]
      if $1.present? && $4.present?
        <<-_HTML_
          =<a class="res_anchor" rel=​"tooltip" href="#{uri}" title=​"#{uri}">
          #{$4}
          </a>=
        _HTML_
      else
        uri
      end
    end.gsub(/<mw (\w+),(\d+),(\d+)>/) do
      uri  = "../#{$2}/messages#&logid=#{$1}"
      <<-_HTML_
        <a class="res_anchor" rel=​"tooltip" href="#{uri}" turn="#{$2}" logid="#{$1}">
        &gt;&gt;#{$1}
        </a>
      _HTML_
    end.html_safe
  end
end

