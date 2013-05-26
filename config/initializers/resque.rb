require 'resque'
require 'redis/namespace'
require 'resque_scheduler'
require 'resque_scheduler/server'
require './lib/const'

Resque.redis = 'mongo.family.jp:6379'
Resque::Scheduler.dynamic = true
Resque.schedule = SCHEDULE

