require 'resque'
require 'redis/namespace'
require 'resque_scheduler'
require 'resque_scheduler/server'
require './lib/const'

Resque.redis = 'utage.family.jp:6379'

if  '2519' == ENV['WEB_PORT']
  Resque.schedule = SCHEDULE
  Resque::Scheduler.dynamic = true
end

