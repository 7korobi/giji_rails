require "erb"
set :rbenv_script, -> { "/utage/#{fetch(:application)}.rbenv.sh" }

namespace :rbenv do
  desc "Install rbenv environment"
  task :install do
    on roles(:app), in: :parallel do |server|
      execute "mkdir -p /utage/run"
      execute "mkdir -p /utage/conf"
      execute "mkdir -p /utage/socket"
      template "rbenv.sh.erb", fetch(:rbenv_script), server
      execute "chmod +x #{fetch :rbenv_script}"
      execute fetch(:rbenv_script)
    end
  end
  after "deploy:updating", "rbenv:install"
end
