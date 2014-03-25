require 'resque'
require 'redis/namespace'
require 'resque_scheduler'
require 'resque_scheduler/server'

Resque.redis = 'mongo.family.jp:6379'
Resque::Scheduler.dynamic = true
Resque.schedule = YAML.load_file './app/yaml/schedule.yml'

