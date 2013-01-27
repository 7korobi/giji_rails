module ActiveRecord
  class Base
    def self.descendants
      Rails.models
    end
  end
end
