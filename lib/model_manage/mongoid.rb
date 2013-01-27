module Mongoid
  module Document
    def self.included(base)
      Rails.add_child(:models, base)
      puts " #{base} include #{self}"
      def base.inherited(child)
        Rails.add_inherit(:models, child)
        puts " #{child} inherit #{self}"
      end

      base.class_eval do
        extend  ModelManage::Mongoid::ClassMethods
        include ModelManage::Base
      end
    end
  end
end

class Mongoid::Relations::Metadata
  attr_accessor :form
end

module ModelManage
  module Mongoid
    module ClassMethods
      def key(* keys)
        const_set :KEYS, keys.map(&:to_s)
        super
      end
      def belongs_to(name, options = {})
        super
        relation_form_set name, options
        forms.delete("#{name}_id")
      end
      def referenced_in(name, options = {})
        super
        relation_form_set name, options
        forms.delete("#{name}_id")
      end

      def has_many(name, options = {})
        super
        relation_form_set name, options
        forms.delete("#{name.to_s.singularize}_ids")
      end
      def references_many(name, options = {})
        super
        relation_form_set name, options
        forms.delete("#{name.to_s.singularize}_ids")
      end

      def embedded_in(name, options = {})
        super
        relation_form_set name, options
        forms.delete("#{name}_id")
      end
      def embeds_many(name, options = {})
        super
        relation_form_set name, options
        forms.delete("#{name.to_s.singularize}_ids")
      end

      def has_and_belongs_to_many(name, options = {})
        super
        relation_form_set name, options
        forms.delete("#{name.to_s.singularize}_ids")
      end
      def references_and_referenced_in_many(name, options = {})
        super
        relation_form_set name, options
        forms.delete("#{name.to_s.singularize}_ids")
      end
    end
  end
end
