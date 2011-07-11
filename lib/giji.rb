require 'current'
require 'timestamp'
require 'with_simple_form'

module Giji
  def self.included(base)
    base.class_eval do
      include Mongoid::Document
      include Timestamp
      include WithSimpleForm
    end
    base.const_set :FORMS, {}
    def base.forms(name)
      const_get(:FORMS)[name.to_sym]
    end
    def base.forms(name)
      const_get(:FORMS)[name.to_sym]
    end
    def base.key?(key)
      const_get(:KEYS).member? key 
    rescue
      const_set :KEYS, []
      false
    end
    def base.key(* keys)
      const_set :KEYS, keys
      super
    end
  end
end

