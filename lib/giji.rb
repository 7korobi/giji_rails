require 'const'
require 'ostruct'
require 'current'
require 'timestamp'
require 'omniauth-openid'
require 'openid/fetchers'
require 'openid/store/filesystem'
require "redis-store"

module RedisStore
  module Rack
    module Session
      module Rails
        private
        def destroy_session(env, sid, options)
          raise RuntimeError.new rescue ::Rails.logger.debug($!.backtrace.join(', '))
          ::Rails.logger.debug "- deny destroy_session -------------"
          ::Rails.logger.debug [:env, sid, options].inspect
          ::Rails.logger.debug "------------------------------------"
          # destroy(env)
        end
      end
    end
  end
end

Rails.application.config.middleware.use OmniAuth::Builder  do
  OMNI_AUTH[:provider_secure].each do |site, values|
    open_key, private_key, options = values
    provider site, open_key, private_key
  end
  OMNI_AUTH[:provider_open].each do |site, options|
    provider :openid, options.merge(store: OpenID::Store::Filesystem.new('/tmp') )
  end
end

I18n.default_locale = :ja

module DecentExposure
  def expose_embedded(name)
    list  = name.to_s.pluralize
    proxy = name.to_s.classify.constantize
    expose(name) do
      if id = params["#{name}_id"] || params[:id]
        send(list).find(id).tap do |o|
          o.attributes = params[name] unless request.get?
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
    end
  end
end

