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

  field :card,    type:Array
  field :lock,    type:Array
  field :flavor,  type:Array
  field :options, type:Array

  field :upd,    type:Hash
  field :tags,   type:Hash
end


