class SowTurn < Event
  include Giji

  field :winner
  field :event

  field :grudge,    type:Integer
  field :riot,      type:Integer
  field :scapegoat, type:Integer
  field :epilogue,  type:Integer
  field :eclipse,   type:Array
  field :seance,    type:Array

  field :say, type:Hash
end
