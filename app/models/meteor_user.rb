class MeteorUser
  class Time < ::Time
    def mongoize
      to_f * 1000
    end
    class << self
      def demongoize(time)
        at time / 1000
      end
      def mongoize(object)
        case object
        when self
          object.mongoize
        when Float
          demongoize(object).mongoize
        end
      end
      def evolve(object)
        case object
        when self
          object.mongoize
        end
      end
    end
  end

  include Mongoid::Document
  store_in collection: "users"

  field :_id
  field :createdAt, as: :created_at, type: Time
  field :"profile.name", as: :name 
  field :"services.google", as: :google, type: Hash
  field :"services.yahoo",  as: :yahoo,  type: Hash
  field :"services.email",  as: :email,  type: Hash
  field :"services.resume.loginTokens", as: :resume, type: Array

  default_scope -> { all.not.in(services: nil) }
end
