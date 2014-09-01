set :rails_envs, ["production"]

server 'utage.family.jp',
  port: 2450,
  user: "7korobi",
  roles: [:app, :resque, :queue],
  rails_env: "production"

server '183.181.24.203',
  port: 3843,
  user: "7korobi",
  roles: [:infra],
  rails_env: "production"
