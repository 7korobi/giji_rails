
Sidekiq::Logging.logger = Logger.new("log/sidekiq.log", "daily")
Sidekiq::Logging.logger.level = Logger::INFO

Mongoid.logger = Logger.new("log/mongoid.log", "daily")
Mongoid.logger.level = Logger::INFO
