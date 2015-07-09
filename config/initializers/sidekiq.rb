active_job = YAML.load_file('./config/active_job.yml')
schedule =   YAML.load_file('./app/yaml/schedule.yml')

Sidekiq.configure_server do |config|
  config.redis = active_job["redis"]

  Sidekiq::Cron::Job.load_from_hash schedule
end

Sidekiq.configure_client do |config|
  config.redis = active_job["redis"]
end

ActiveJob::Base.queue_adapter = :sidekiq
