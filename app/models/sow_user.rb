class SowUser < Potof
  include Giji
  
  field :csid
  field :jobname
  field :zapcount,  type: Integer
  field :clearance

  field :selrole

  field :rolestate
  field :live
  field :deathday,  type: Integer
  
  field :history
  field :role,  type: Array
  field :gift,  type: Array
  field :vote,  type: Array

  field :overhear,    type: Array
  field :bonds,       type: Array
  field :pseudobonds, type: Array
  field :love
  field :sheep
  field :pseudolove

  field :commit,  type: Boolean

  field :point, type: Hash
  field :say,   type: Hash
  field :timer, type: Hash

end
