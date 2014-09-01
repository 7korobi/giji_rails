
set :rsync_script, -> { "/utage/#{fetch(:application)}.rsync.sh" }

def repo_path; deploy_path end
module NopStrategy
  def test; true end
  def check; true end
  def clone; end
  def update; end
  def release; end
  def fetch_revision; end
end
set :git_strategy, NopStrategy

Rake::Task["deploy:set_previous_revision"].clear

namespace :rsync do
  desc "Stage and rsync to the server (or its cache)."
  task :run do
    open(fetch(:rsync_script),"w") do |f|
      on roles(:app, :resque, :queue, :infra) do |server|
        options = "--links --recursive --delete --exclude='run' --exclude='.git' --exclude='.svn'"
        path = "/utage/"
        f.puts %Q|TARGET=#{path}; rsync -e "ssh -p #{server.port}" #{options} $TARGET #{server.user}@#{server.hostname}:$TARGET &|
      end

      on roles(:all), in: :parallel do |server|
        rsync = %w[rsync]
        rsync.push %Q|-e "ssh -p #{server.port || 22}"|
        rsync.concat fetch(:rsync_options)
        rsync << "#{fetch :deploy_to}/"
        rsync << "#{server.user}@#{server.hostname}:#{shared_path}/deploy/"
        f.puts rsync.join(" ")
      end
    end
    run_locally do
      execute "chmod +x #{fetch :rsync_script}"
      execute fetch(:rsync_script)
    end
  end

  desc "Copy the code to the releases directory."
  task :copy_to_release do
    on roles(:all) do
      execute "cp -r #{shared_path}/deploy #{release_path}/"
    end
  end

  before "deploy:updating", "rsync:run"
  before "deploy:updating", "rsync:copy_to_release"
end
