set :rails_envs, ["production"]

server 'utage.family.jp',
  port: 2450,
  user: "7korobi",
  roles: [:app, :sidekiq, :queue],
  rails_env: "production"
