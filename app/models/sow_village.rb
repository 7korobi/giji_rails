class SowVillage < Story
  include Giji

  field :sow_auth_id
  field :password
  field :vpl, type:Array

  field :name
  field :comment
  field :rating

  field :type,  type:Hash
  field :card,  type:Hash
  field :options, type:Array
 
  field :upd,   type:Hash
  field :timer, type:Hash
end
