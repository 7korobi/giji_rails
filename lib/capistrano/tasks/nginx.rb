set :nginx_log, -> { "/utage/log/nginx-access.log" }

namespace :nginx do
  desc "check NginX log after Unicorn restart"
  task :access_check do
    on roles(:infra), in: :parallel do |server|
      execute "tail -n 10 #{fetch :nginx_log} | grep ' 200 ' | awk -F \[ '{print \$1, \$2}' | awk '{print \$4, \$9, \$1}' >&2"
    end
  end

#  after "deploy:finished", "nginx:access_check"
end
