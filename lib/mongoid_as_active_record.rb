module ActiveRecord
  class Base
    def self.descendants
      Rails.models
    end
  end
end

module MongoidAsActiveRecord
  module Base
    def self.included(base)
      def base.inheritance_column
        '_type'
      end

      def base.columns
        forms.values
      end
      def base.columns_hash
        forms
      end
      def base.descends_from_active_record?
        Rails.child_models.member? self
      end
      def base.reflect_on_all_associations(macro = nil)
        association_reflections = relations.values
        macro ? relations.select { |reflection| reflection.macro == macro } : association_reflections
      end

      def base.base_class
        class_of_active_record_descendant(self)
      end
      def base.class_of_active_record_descendant(klass)
        if not Rails.models.member? klass.superclass
          klass
        else
          class_of_active_record_descendant(klass.superclass)
        end
      end
    end
  end

  module Metadata
    def options
      form.data.merge(self)
    end
    def active_record
      form.owner
    end
    def check_validity!
      nil
    end
    def belongs_to?
      [:referenced_in, :embedded_in].member? macro
    end
    def collection?
      not belongs_to?
    end
    def through_reflection
      active_record.relations[ form.options[:through].to_s ]
    end
  end
end

class Mongoid::Relations::Metadata
  include MongoidAsActiveRecord::Metadata
end
