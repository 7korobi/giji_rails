# -*- coding: utf-8 -*-

class Web < Thor
  desc "deploy", "web-deploy shell create"
  def deploy
  end

  desc "home",   "web-ssh method create as Home"
  def home
    each_servers{|no| "192.168.0.#{no}"}
    open("/etc/hosts", "w:utf-8") do |f|
      f.puts HOST
      f.puts HOST_HOME
    end
  end

  desc "utage",  "web-ssh method create as Other domain"
  def utage
    each_servers{|no| "7korobi.ddo.jp"}
    open("/etc/hosts", "w:utf-8") do |f|
      f.puts HOST
      f.puts HOST_WEB
    end
  end

  HOST = <<'_HOSTS_'
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1 localhost
255.255.255.255 broadcasthost
::1             localhost
fe80::1%lo0 localhost

_HOSTS_

  HOST_HOME = <<'_HOSTS_'
183.181.24.203  giji.sytes.net
192.168.0.100  utage.sytes.net
192.168.0.101     tv.sytes.net
192.168.0.100   7korobi.ddo.jp
_HOSTS_

  HOST_WEB = <<'_HOSTS_'
183.181.24.203  giji.sytes.net
_HOSTS_


  SSH = <<'_SHELL_'
echo "= #{no}:$* "
ssh -p #{no}0 7korobi@#{server} $*
_SHELL_

  PUSH = <<'_SHELL_'
echo "no: #{no}  to: $1  option: $2 $3 $4 $5"
TO=$1

rsync -e "ssh -p #{no}0" -r ${TO}/ 7korobi@#{server}:${TO}/ --exclude='*.svn-base' --exclude='*.svn' --exclude='*.bak'  $2 $3 $4 $5
_SHELL_

  def each_servers
    [241,242,243,249,250,251,252,253,254].each do |no|
      [["/utage/web-ssh-#{no}" ,SSH ],
       ["/utage/web-push-#{no}",PUSH]
      ].each do |fname, shell|
        `mkdir -p /utage/#{no}`
        open(fname,"w") do |f|
          server = yield(no)
          f.puts eval(%Q[%Q|#{shell}|])
        end
        `chmod 755 #{fname}`
      end
    end
  end
end
