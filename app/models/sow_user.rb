class SowUser < Potof
  include Giji
  
  field :sow_auth_id
  field :csid
  field :jobname
  field :zapcount,  type: Integer
  field :clearance

  field :select

  field :rolestate
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
end
