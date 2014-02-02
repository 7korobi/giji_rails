require 'ostruct'

if defined?(Mongoid::Document)
  require 'model_manage/form'              if defined?(SimpleForm) || defined?(Formtastic)
  require 'model_manage/mongoid_rails_erd' if defined?(RailsERD)
  require 'model_manage/mongoid'
end

require 'model_manage/rails'

if defined?(Rails)
  module ModelManage
    class Engine < ::Rails::Engine
    end
  end
end
