require 'ostruct'
require 'current'
require 'timestamp'
require 'with_simple_form'
require 'mongoid_as_active_record'


module DecentExposure
  def expose_embedded(name)
    list  = name.to_s.pluralize 
    proxy = name.to_s.classify.constantize
    expose(name) do
      if params[:id]
        send(list).find(params[:id]).tap do |o|
          o.attributes = params[name]
        end
      else
        proxy.new(params[name])
      end
    end
  end
end

class Mongoid::Relations::Metadata
  attr_accessor :form
end

module Giji
  def self.descendants
    @@children
  end
  def self.add_child_class(base)
    (@@children ||= []).tap do |o|
      o.push base
      o.uniq!
    end
  end

  def self.included(base)
    add_child_class(base)
    p " #{base} include #{self}"

    base.class_eval do
      include Mongoid::Document
      include Timestamp
      include WithSimpleForm
      include MongoidAsActiveRecord
    end

    def base.inherited(child)
      Giji.add_child_class(child)
      p " #{child} inherite #{self}"
    end

    forms_field = base.superclass.forms.dup rescue {}.with_indifferent_access
    base.const_set :FORMS, forms_field

    def base.forms
      const_get(:FORMS)
    end

    def base.key?(key)
      const_get(:KEYS).member? key.to_s
    rescue
      const_set :KEYS, []
      false
    end
    def base.key(* keys)
      const_set :KEYS, keys.map(&:to_s)
      super
    end
  end
end

