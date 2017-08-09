set :rails_envs, ["production"]

server 'utage.family.jp',
  port: 2430,
  user: "7korobi",
  roles: [:file],
  rails_env: "production"
