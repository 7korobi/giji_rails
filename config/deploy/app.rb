set :rails_envs, ["production"]

server 'utage.family.jp',
  port: 2450,
  user: "7korobi",
  roles: [:app, :resque, :queue],
  rails_env: "production"
