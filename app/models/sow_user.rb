class SowUser < Potof
  include Giji

  field :pno,  type: Integer

  field :sow_auth_id
  field :csid
  field :jobname
  field :zapcount,  type: Integer
  field :clearance

  field :commit,    type: Boolean

  field :role,      type: Array
  field :rolestate
  field :select
  field :live
  field :deathday,  type: Integer

  field :history

  field :overhear,    type: Array

  field :bonds,       type: Array
  field :pseudobonds, type: Array

  field :love
  field :sheep
  field :pseudolove

  field :point, type: Hash
  field :say,   type: Hash
  field :timer, type: Hash

  index({story_id: 1})
  index({sow_auth_id: 1, story_id: 1}, {unique: 1})

  default_scope -> { order_by(:pno.asc) }
end
