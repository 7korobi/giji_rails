env = ENV["RAILS_ENV"] || "production"
app_root = "/www/giji-rails"
working_directory app_root

# Unicorn pid
pid "/www/giji-rails/pids/unicorn.pid"

stderr_path "log/stderr.log"
stdout_path "log/stdout.log"

# Unicorn socket listener
listen 4009, :backlog => 64, :tcp_nopush => true

# Unicorn worker processes
worker_processes 2

# Timeout at 30 seconds
timeout 30

preload_app true

before_fork do |server, worker|
  old_pid = "/www/giji-rails/pids/unicorn.pid.oldbin"
  if File.exists?(old_pid) && server.pid != old_pid
    begin
      Process.kill("WINCH", File.read(old_pid).to_i)
      Thread.new do
        sleep 30
        Process.kill("QUIT", File.read(old_pid).to_i)
      end
    rescue Errno::ENOENT, Errno::ESRCH
    end
  end
end

after_fork do |server, worker|
end
