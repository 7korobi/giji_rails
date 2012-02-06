# -*- coding: utf-8 -*-

class Web < Thor
  desc "deploy", "web-deploy shell create"
  def deploy
  end

  desc "home",   "web-ssh method create as Home"
  def home
    each_servers{|no| "192.168.0.#{no}"}
  end

  desc "utage",  "web-ssh method create as Other domain"
  def utage
    each_servers{|no| "utage.sytes.net"}
  end

  ENV = <<'_SHELL_'
echo "no: #{no}  environment set."

PATH=/utage:/home/7korobi/.rbenv/shims:/home/7korobi/.rbenv/bin:/usr/local/bin:/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin:/usr/local/rvm/bin:/home/7korobi/bin
UTAGE=#{no}
SSH_PORT=#{no}0
WEB_PORT=#{no}9

export PATH
export SSH_PORT
export WEB_PORT
eval "$(rbenv init -)"
_SHELL_

  SSH = <<'_SHELL_'
echo "no: #{no}  cmd: $* "
ssh -p #{no}0 7korobi@#{server} $*
_SHELL_

  PUSH = <<'_SHELL_'
echo "no: #{no}  to: $1  option: $2 $3 $4 $5"
TO=$1

rsync -e "ssh -p #{no}0" -r ${TO}/ 7korobi@#{server}:${TO}/ --exclude='*.svn-base' --exclude='*.svn' --exclude='*.bak'  $2 $3 $4 $5
_SHELL_

  def each_servers
    [250,251,253,254].each do |no|
      [["/utage/web-ssh-#{no}" ,SSH ],
       ["/utage/#{no}/web-env" ,ENV ],
       ["/utage/web-push-#{no}",PUSH]
      ].each do |fname, shell|
        open(fname,"w") do |f|
          server = yield(no)
          f.puts eval(%Q[%Q|#{shell}|])
        end
        `chmod 755 #{fname}`
      end
    end
  end
end
