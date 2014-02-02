module Chatable
  extend ActiveSupport::Concern

  include Giji
  include Mongoid::Timestamps::Created

  included do
    field :event_id
    field :logid
    field :to
    field :log
    field :style
    field :date, type: Time
    belongs_to :event
    belongs_to :potof

    index({logid: 1, event_id: 1}, {unique: 1})
    index(event_id: 1)
    index(date: 1)

    validates_presence_of :date
    validates_uniqueness_of :logid, scope: :event_id
  end
end