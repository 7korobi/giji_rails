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

  def self.gaps
    only(:folder, :vid).group_by(&:folder).map do |k,v|
      list = v.map(&:vid).sort
      rng=(list.first..list.last).to_a
      [k,rng - list]
    end.each_with_object({}) do |(key,val),hash|
      hash[key] = val
    end
  end
end
