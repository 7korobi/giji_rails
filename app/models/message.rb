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
    date
  end

  def img
    "/images/portrate/#{face_id}.jpg"
  end

  def slice keys
    keys.map(&:to_sym).each_with_object({}) do |key, o|
      o[key] = send(key)
    end
  end

  paginates_per 100
end

