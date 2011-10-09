require 'ostruct'
require 'current'
require 'rails_defs'
require 'timestamp'
require 'with_simple_form'
require 'mongoid_as_active_record'

class Mongoid::Relations::Metadata
  attr_accessor :form
end

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

module Giji
  def self.included(base)
    base.class_eval do
      include Mongoid::Document
      include Timestamp
      include WithSimpleForm
      include MongoidAsActiveRecord::Base
    end

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

    forms_field = base.superclass.forms.dup rescue {}.with_indifferent_access
    base.const_set :FORMS, forms_field
  end
end

