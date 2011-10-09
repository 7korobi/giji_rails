module Mongoid
  module Document
    def self.included(base)
      Rails.add_child(:models, base)
      p " #{base} include #{self}"
      def base.inherited(child)
        Rails.add_inherit(:models, child)
        p " #{child} inherit #{self}"
      end
    end
  end
end

module ActiveRecord
  class Base
  	def self.inherited(child)
      Rails.add_inherit(:models, child)
      p " #{child} inherit #{self}"
    end
  end
end

module Rails
  @@app = {
    child: {
      models:      [],
      controllers: [],
      helpers:     [],
    },
    inherit: {
      models:      [],
      controllers: [],
      helpers:     [],
    },
  }
  def self.models
    @@app[:child][:models]      | @@app[:inherit][:models]
  end
  def self.controllers
    @@app[:child][:controllers] | @@app[:inherit][:controllers]
  end
  def self.helpers
    @@app[:child][:helpers]     | @@app[:inherit][:helpers]
  end

  def self.child_models
    @@app[:child][:models]     
  end
  def self.child_controllers
    @@app[:child][:controllers] 
  end
  def self.child_helpers
    @@app[:child][:helpers]     
  end

  def self.add_child(type, base)
    (@@app[:child][type] ||= []).tap do |o|
      o.push base
      o.uniq!
    end
  end

  def self.add_inherit(type, base)
    (@@app[:inherit][type] ||= []).tap do |o|
      o.push base
      o.uniq!
    end
    @@app[:child][type] -= @@app[:inherit][type]
  end
end



