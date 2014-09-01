set :rails_envs, ["production"]

server '183.181.24.203',
  port: 3843,
  user: "7korobi",
  roles: [:infra],
  rails_env: "production"
