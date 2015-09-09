module ModelManage
  module Mongoid
    module ClassMethods
      def forms
        fields.each_with_object({}) do |(name, item), hash|
          next unless item.form
          hash[name] = item.form
        end
      end

      def form_hidden(*names)
        names.each do |name|
          fields[name.to_s].form = nil
        end
      end

      def validates_length_of(name, options = {})
        super

        range = options[:in] || options[:within] || (1..options[:maximum])
        null_ok = options[:allow_nil] || options[:allow_blank] || false
        form_attributes = {
          owner:   self,
          name:    name.to_s,
          limit:   range.max,
          null:    null_ok
        }

        fields[name.to_s].form = OpenStruct.new(form_attributes)
      end

      def characterize(name, relation, options, &block)
        type = relation.to_s.parameterize["mongoid_relations_".size .. -1]
        puts "   #{name} relate for #{type} #{options.to_json} "

        meta = super
        relation_attributes = {
          owner:    meta.class_name,
          name:     name.to_s,
          options:  options
        }
        meta.form = OpenStruct.new(relation_attributes)
        meta
      end
    end
  end
end


class Mongoid::Fields::Standard
  attr_accessor :form
end

class Mongoid::Relations::Metadata
  attr_accessor :form
end

module Mongoid::Document
  def self.included(base)
    Rails.add_child(:models, base)
    puts " #{base} include #{self}"
    def base.inherited(child)
      Rails.add_inherit(:models, child)
      puts " #{child} inherit #{self}"
    end

    base.class_eval do
      extend  ModelManage::Mongoid::ClassMethods
    end
  end
end
