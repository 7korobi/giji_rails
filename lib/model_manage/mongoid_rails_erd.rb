module ModelManage
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

  module Mongoid
    module ClassMethods
      def inheritance_column
        '_type'
      end

      def columns
        forms.values
      end

      def columns_hash
        forms
      end

      def descends_from_active_record?
        Rails.child_models.member? self
      end

      def reflect_on_all_associations(macro = nil)
        association_reflections = relations.values
        macro ? relations.select { |reflection| reflection.macro == macro } : association_reflections
      end

      def base_class
        class_of_active_record_descendant(self)
      end

      def class_of_active_record_descendant(klass)
        if not Rails.models.member? klass.superclass
          klass
        else
          class_of_active_record_descendant(klass.superclass)
        end
      end
    end
  end
end

class Mongoid::Relations::Metadata
  include ModelManage::Metadata
end
