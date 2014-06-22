require "resque/tasks"
require "resque/scheduler/tasks"

namespace :resque do
  task :setup do
    require 'resque'
    require 'resque-scheduler'
    require 'resque/scheduler'
    require './config/initializers/resque.rb'
  end
end
