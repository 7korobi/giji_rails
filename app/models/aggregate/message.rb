class Aggregate::Message
  include Aggregateable

  module Base
    extend ActiveSupport::Concern
    include Mongoid::Document
    included do
      field :date_min, type: Time
      field :date_max, type: Time
      field :max, type: Integer
      field :all, type: Integer
      field :vil, type: Integer
      field :count, type: Integer
    end
  end

  module ByStory
    extend ActiveSupport::Concern
    include Aggregateable
    included do
      field :date_min, type: Time
      field :date_max, type: Time
      field :max, type: Integer
      field :all, type: Integer
      field :count, type: Integer
    end

    module ClassMethods
      def frontier_story
        done = only("_id.story_id").map{|o|o["_id.story_id"]}.uniq
        SowVillage.not.in(id: done).where(is_finish: true)
      end

      def frontier_story_ids
        frontier_story.pluck("id")
      end

      def generate(story_ids = frontier_story_ids)
        p [self, story_ids]
        story_ids.each do |story_id|
          where("_id.story_id": story_id).delete
          calc(::Message, deep_merge(:message_by_stories, query(story_id))).each do |attr|
            new(attr).save
          end
        end
      end
    end
  end

  class BySowAuth
    include Base
    class ByStory
      include ::Aggregate::Message::ByStory
      def self.query(story_id)
        YAML.load(<<-_YML_)
          - $match:
              story_id: #{story_id}
          - $project:
              _id:
                face_id: $face_id
                story_id: $story_id
        _YML_
      end
    end
  end

  class ByFace
    include Base
    class ByStory
      include ::Aggregate::Message::ByStory
      def self.query(story_id)
        YAML.load(<<-_YML_)
          - $match:
              story_id: #{story_id}
          - $project:
              _id:
                sow_auth_id: $sow_auth_id
                story_id: $story_id
        _YML_
      end
    end
  end

  def self.generate
    BySowAuth::ByStory.generate
    calc BySowAuth::ByStory, deep_merge(:aggregate_messages, :aggregate_message_by_sow_auths)

    ByFace::ByStory.generate
    calc ByFace::ByStory, deep_merge(:aggregate_messages, :aggregate_message_by_faces)
  end

  def self.aggregate csid
    %w[SS VS GS TS WS XS].each do |mestype|
      AGGREGATE.message.aggregate[0]["$group"]._id = [csid, mestype]
    end
  end
end
