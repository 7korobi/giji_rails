module SowTurnable
  extend ActiveSupport::Concern

  include Eventable
  included do
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

  def name
    self[:name] || "#{turn}日目"
  end

  module ClassMethods
    def empty_ids
      messages_empty.pluck("id")
    end

    def messages_empty
      where(story_id: SowVillage.empty_ids).not(_id: /^(trpg|lobby-8)/)
    end

    def breaks_each
      each do |o| 
        next if Array === o.attributes['messages']
        yield(o)
      end
    end
  end
end