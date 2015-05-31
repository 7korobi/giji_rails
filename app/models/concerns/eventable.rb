module Eventable
  extend ActiveSupport::Concern

  include Giji
  included do
    field :_id, default: ->{ [story_id, turn].join("-") }
    field :turn, type: Integer
    field :name
    field :created_at, type: Time
    field :updated_at, type: Time

    has_many :messages, inverse_of: :event
    has_many :potofs,   inverse_of: :event
    belongs_to :story,  inverse_of: :events

    paginates_per 50
  end
end