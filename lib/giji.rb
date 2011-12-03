require 'ostruct'
require 'current'
require 'timestamp'

Rails.application.config.middleware.use OmniAuth::Builder  do
  [:twitter, :facebook].each do |site|
    open_key, private_key, options = OMNI_AUTH[:provider][site]
    provider site, open_key, private_key
  end
end

Time::DATE_FORMATS[:default] = "%Y-%m-%d %H:%M"
I18n.default_locale = :ja

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
    end
  end
end

