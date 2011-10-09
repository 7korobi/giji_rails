module ActiveRecord
  class Base
    def self.descendants
      MongoidAsActiveRecord::Base.descendants
    end
  end
end

module MongoidAsActiveRecord
  module Base
    def self.descendants
      @@children | @@inherit
    end
    def self.children
      @@children
    end

    def self.add_child_class(base)
      (@@children ||= []).tap do |o|
        o.push base
        o.uniq!
      end
    end

    def self.add_inherit_class(base)
      (@@inherit ||= []).tap do |o|
        o.push base
        o.uniq!
      end
      @@children -= @@inherit
    end
    def self.included(base)
      add_child_class(base)
      p " #{base} include #{self}"
      def base.inherited(child)
        MongoidAsActiveRecord::Base.add_inherit_class(child)
        p " #{child} inherit #{self}"
      end

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
        MongoidAsActiveRecord::Base.children.member? self
      end
      def base.reflect_on_all_associations(macro = nil)
        association_reflections = relations.values
        macro ? relations.select { |reflection| reflection.macro == macro } : association_reflections
      end

      def base.base_class
        class_of_active_record_descendant(self)
      end
      def base.class_of_active_record_descendant(klass)
        if not MongoidAsActiveRecord::Base.descendants.member? klass.superclass
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
