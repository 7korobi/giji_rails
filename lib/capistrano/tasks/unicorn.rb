require 'erb'
set :pty, false
set :queue_pid,     -> { "/utage/run/#{fetch :application}.queue.pid" }
set :unicorn_pid,   -> { "/utage/run/#{fetch :application}.unicorn.pid" }

set :unicorn_socket, -> { "/utage/socket/#{fetch :application}.unicorn.sock" }
set :unicorn_timeout, 30
set :unicorn_workers, 2
set :unicorn_config, -> { "/utage/conf/#{fetch :application}.unicorn.rb" }
set :unicorn_err_log, "/utage/log/unicorn_err.log"
set :app_script, -> { "/utage/#{fetch(:application)}.app.sh" }

set :diff_exclude, %w[
  public/javascripts/
  public/stylesheets/
  REVISION
  Capfile
  lib/tasks/
  lib/capistrano/
  config/deploy/
  config/deploy.rb
] + ["public: maintenance.html"]

def template(template_name, target, server)
  config_file = "lib/capistrano/templates/#{template_name}"
  erb = ERB.new(File.read(config_file))
  upload! StringIO.new(erb.result(binding)), target
end

def started
  test("[ -e #{fetch(:unicorn_pid)} ] && kill -0 `cat #{fetch(:unicorn_pid)}`")
end

namespace :unicorn do
  desc "Setup Unicorn initializer and app configuration(note: can not be rollback)"
  task :setup do
    on roles(:app, :queue, :sidekiq), in: :parallel do |server|
      execute "mkdir -p /utage/run"
      execute "mkdir -p /utage/conf"
      execute "mkdir -p /utage/socket"
      template "app.sh.erb", fetch(:app_script), server
      template "unicorn.rb.erb", fetch(:unicorn_config), server
      execute "chmod +x #{fetch :app_script}"
    end
  end
  after "deploy:updating", "unicorn:setup"

  desc "Stop Unicorn"
  task :stop do
    on roles(:app), in: :parallel do
      execute fetch(:app_script), :stop
    end
    on roles(:app, :sidekiq, :queue), in: :parallel do
      execute fetch(:app_script), :pid_list
    end
  end

  desc "Reload unicorn"
  task :reload do
    on roles(:app), in: :parallel do
      execute fetch(:app_script), :reload
    end
    on roles(:app, :sidekiq, :queue), in: :parallel do
      execute fetch(:app_script), :pid_list
    end
  end

  desc "Restart unicorn"
  task :restart do
    on roles(:app), in: :parallel do
      execute fetch(:app_script), :restart
    end
    on roles(:app, :sidekiq, :queue), in: :parallel do
      execute fetch(:app_script), :pid_list
    end
  end

  desc "Zero-downtime restart strategy."
  task :start do
    on roles(:app, :sidekiq, :queue), in: :parallel do |server|
      if previous_path(server) && remote_diff?(server, "Gemfile.lock", ".ruby-version")
        execute fetch(:app_script), :bundle
        execute fetch(:app_script), :stop
      end
    end

    on roles(:sidekiq), in: :parallel do |server|
      execute fetch(:app_script), :queue
    end

    on roles(:app), in: :parallel do |server|
      if previous_path(server) && remote_diff?(server, "Gemfile.lock", ".ruby-version")
        execute fetch(:app_script), :unicorn
      else
        execute fetch(:app_script), :reload
      end
    end

    on roles(:app, :sidekiq, :queue), in: :parallel do
      execute fetch(:app_script), :pid_list
    end
  end

  after "deploy:publishing", "unicorn:start"
end
