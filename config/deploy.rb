lock '3.3.5'

set :application, "giji_rails"
set :org, "7korobi"
set :deploy_to, "/www/giji_rails"

### multistage settings
set :stage_dir, "config/deploy"

# shared link
set :linked_files, []
set :linked_dirs, %w[
  log
  tmp/pids
  public/system
]

### transfer settings
set :rsync_options, %w[
  --links
  --recursive
  --delete
  --delete-excluded
  --exclude '.git'
  --exclude '.svn'
]

###
### shared settings
###
set :use_sudo, false
set(:ssh_options,
  user: '7korobi',
  keys: [File.expand_path('~/.ssh/id_rsa')],
  forward_agent: true,
  auth_methods: %w(publickey)
)

set :format, :utage
set :log_level, :info
