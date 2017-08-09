
Sidekiq::Logging.logger = Logger.new("/utage/log/sidekiq.log", "daily")
Sidekiq::Logging.logger.level = Logger::INFO

Mongoid.logger = Logger.new("/utage/log/mongoid.log", "daily")
Mongoid.logger.level = Logger::INFO
