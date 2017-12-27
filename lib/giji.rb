require 'yajl/json_gem'

require 'yaml'
require 'active_support/all'
require 'ostruct'
require 'current_auth'
require 'rsync'

require 'serializer'

require 'omniauth-openid'
require 'openid/fetchers'
require 'openid/store/filesystem'
require "model_manage"

# I18n.default_locale = :ja

module Giji
  def self.included(base)
    base.class_eval do
      include Mongoid::Document
    end
  end
end

module DecentExposure
  def expose_embedded(name)
    list  = name.to_s.pluralize
    proxy = name.to_s.classify.constantize
    expose(name) do
      if id = params["#{name}_id"] || params["id"]
        send(list).find(id).tap do |o|
          o.attributes = params[name] unless request.get?
        end
      else
        proxy.new(params[name])
      end
    end
  end
end
