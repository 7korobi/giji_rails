class ChrVote
  include Giji
  include Mongoid::Timestamps::Created

  field :_id, default: ->{ [user_id, vote].join("-") }
  field :vote,    type: Integer
  field :phase
  field :comment

  belongs_to :user, inverse_of: :chr_votes
  belongs_to :face, inverse_of: :chr_votes

  default_scope order_by(:created_at.desc)

  validates_length_of :phase,   in: 1..100, allow_blank: false
  validates_length_of :comment, in: 1..100, allow_blank: true

  def self.phases
    only(:phase).group.map{|o| o['phase'] }.sort_by{|phase| 0 - where(phase: phase).max(:created_at).to_i }
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

