module Faceable
  extend ActiveSupport::Concern
  include Giji
  included do
    field :csid
    field :name
    belongs_to :face,  inverse_of: :messages
  end

  def img
    "/images/portrate/#{face_id}.jpg" if face_id.present?
  end
end