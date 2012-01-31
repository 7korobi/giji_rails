class ChrVote
  include Giji
  include Mongoid::Timestamps::Created
  key   :face_id, :user_id
  field :phase
  field :comment

  referenced_in :user, inverse_of: :chr_votes
  referenced_in :face, inverse_of: :chr_votes

  def self.phases
    only(:phase).group.map{|o| o['phase'] }
  end
end

# no use.  use .only.group
class ChrVote
  def self.group(*keys)
    str_keys = keys.map &:to_s
    collection.group( f_count.merge(key:str_keys) ).each_with_object({}.with_indifferent_access) do |data, h|
      h[ data.values_at(str_keys) ] = data['value']
    end
  end

  def self.f_count
    { initial:{value:0},
      reduce:'function(doc,prev){prev.value ++;}'
    }
  end

  def self.f_sum(key)
    { initial:{value:0},
      reduce:"function(doc,prev){prev.value += #{key};}"
    }
  end

end

