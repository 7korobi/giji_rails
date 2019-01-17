#!/bin/sh
### BEGIN INIT INFO
# Provides:          unicorn
# Required-Start:    $remote_fs $syslog
# Required-Stop:     $remote_fs $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Manage unicorn server
# Description:       Start, stop, restart unicorn server for a specific application.
### END INIT INFO
set -e

# Feel free to change any of the following variables for your app:
TIMEOUT=${TIMEOUT-60}
LANG=ja_JP.UTF-8
PATH=/home/7korobi/.rbenv/shims:/home/7korobi/.rbenv/bin:/usr/local/bin:/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin
BUNDLE_GEMFILE=/www/giji-rails/Gemfile
RBENV_VERSION=2.6.0
REDIS_URL=redis://localhost:6379/0
MONGO_URL=mongodb://7korobi:kotatsu3@192.168.0.200/giji

WEB_OLD_PID=/www/giji-rails/pids/unicorn.pid.oldbin
WEB_PID=/www/giji-rails/pids/unicorn.pid
WORKER_PID=/www/giji-rails/pids/queue.pid
PID=$WEB_PID

export RACK_ENV=production
export RAILS_ENV=production

export PATH
export REDIS_URL
export MONGO_URL
export MECAB_PATH
export RBENV_VERSION
export BUNDLE_GEMFILE

APP_ROOT=/www/giji-rails
AS_USER=7korobi

set -u

set_pid () {
  test -s "$1" && (! kill -0 `cat "$1"`) && rm "$1" || return 0
}
set_pids () {
#  ps -ef | grep "unicorn_rails\ master" | cut -c 10-14 > $WEB_PID
  set_pid $WEB_OLD_PID
  set_pid $WEB_PID
  set_pid $WORKER_PID
}

set_pids


pid () {
  test -s "$1" && cat "$1"
}

running () {
  test -s "$1" && kill -0 `cat "$1"`
}

sig () {
  running $2 || return 0
  kill -$1 `cat "$2"`
}

sig2 () {
  if running $3
  then
    sig QUIT $2
    kill -$1 `cat $3`
  else
    sig $1 $2
  fi
}

queue () {
  echo "boot queue ..."
  cd $APP_ROOT
  rbenv exec bundle exec sidekiq -C config/sidekiq.yml -d
  echo "done."
}

unicorn () {
  echo "boot unicorn ..."
  cd $APP_ROOT
  rbenv exec bundle exec unicorn_rails -E production -D -c config/unicorn.rb
  echo "done."
}


case "$1" in
queue)
  sig QUIT $WORKER_PID
  sleep 3
  queue
  ;;
unicorn)
  running "$WEB_OLD_PID" && echo >&2 "Already running." && exit 0
  running "$WEB_PID" && echo >&2 "Already running." && exit 0
  unicorn
  ;;
stop)
  sig QUIT $WEB_OLD_PID
  sig QUIT $WEB_PID
  sig QUIT $WORKER_PID
  ;;
force-stop)
  sig2 TERM $WEB_OLD_PID $WEB_PID
  sig TERM $WORKER_PID
  ;;
stop_start)
  sig QUIT $WEB_OLD_PID
  sig QUIT $WEB_PID
  sleep 3
  unicorn
  ;;
restart)
  sig2 HUP $WEB_OLD_PID $WEB_PID
  echo reloaded OK
  unicorn
  ;;
reload)
  sig2 USR2 $WEB_OLD_PID $WEB_PID
  ;;
bundle)
  cd $APP_ROOT
  bundle
  ;;
reopen_logs)
  sig USR1 $WEB_OLD_PID $WEB_PID
  ;;
pid_list)
  echo >&2  "  process : "`pid $WEB_PID`" $WEB_PID"
  echo >&2  "          : "`pid $WORKER_PID`" $WORKER_PID"
  ;;
*)
  echo >&2
  echo >&2  "Usage: $0 command"
  echo >&2
  echo >&2  "  command : sidekiq_web scheduler queue backend unicorn"
  echo >&2  "          : stop force-stop restart reload"
  echo >&2  "          : bundle reopen_logs pid_list help"
  echo >&2  "          : "
  $0 pid_list
  exit 1
  ;;
esac

set_pids
