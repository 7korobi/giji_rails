#!/usr/bin/env ruby-local-exec

node="v0.6.18"
ss  ="0.3.0RC2"

open('/home/7korobi/web-env','w').puts <<-_SH_
export LANG=ja_JP.UTF-8
export PATH=/utage:/home/7korobi/.rbenv/shims:/home/7korobi/.rbenv/bin:/usr/kerberos/bin:/usr/local/bin:/bin:/usr/bin:/home/7korobi/bin

eval "$(rbenv init -)"
_SH_


open('/home/7korobi/.bash_profile','w').puts <<-_SH_
# .bash_profile
test -f ~/.bashrc  && . ~/.bashrc
test -f ~/web-env  && . ~/web-env
_SH_


commands = <<-_SH_
chmod 755  ~/web-env ~/.bash_profile
~/.bash_profile

test -d ~/.node/#{node}           || nvm install #{node}
test -d ~/.npm/socketstream/#{ss} || npm install -g socketstream

_SH_
commands.each_line {|sh| system sh}
