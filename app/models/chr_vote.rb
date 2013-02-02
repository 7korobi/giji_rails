class ChrVote
  include Giji
  include Mongoid::Timestamps::Created

  field :_id, default: ->{ [user_id, vote].join("-") }
  field :vote,    type: Integer
  field :phase
  field :comment

  belongs_to :user, inverse_of: :chr_votes
  belongs_to :face, inverse_of: :chr_votes

#  default_scope order_by(created_at: -1)

  validates_length_of :phase,   in: 1..100, allow_blank: false
  validates_length_of :comment, in: 1..100, allow_blank: true

  def self.phases
    all.distinct(:phase).sort_by{|phase| 0 - where(phase:phase).max(:created_at).to_i}
  end
end

class ChrVote
  def self.count_by_face_id
    map = %Q{
      function() {
        emit([this.phase, this.face_id], 1 );
      }
    }
    reduce = %Q{
      function(key, values) {
        var result = 0 ;
        values.forEach(function(value) {
          result += value;
        });
        return result;
      }
    }
    hash = only(:query,:face_id).map_reduce(map, reduce).out(inline: true).sort_by{|o| - o["value"]}.group_by{|o|o["_id"][0]}
    hash.keys.each do |phase|
      hash[phase].each do |o|
        o["face_id"] = o["_id"][1]
        o.delete("_id")
      end
    end
    hash
  end
end

