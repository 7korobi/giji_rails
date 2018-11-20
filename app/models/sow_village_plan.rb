class SowVillagePlan
  include Mongoid::Document

  field :_id, default: ->{ link }
  field :title
  field :write_at, type: Time

  field :name
  field :link
  field :state
  field :chip
  field :sign

  field :upd,    type:Hash

  field :card,    type:Array
  field :lock,    type:Array
  field :flavor,  type:Array
  field :options, type:Array
end


