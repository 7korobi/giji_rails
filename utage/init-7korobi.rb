
no = ARGV[0][0..2]
hwaddr = no[1..2]


open('/home/7korobi/web-env','w').puts <<-_SH_
echo "no: #{no}  environment set."

PATH=/utage:/home/7korobi/.rbenv/shims:/home/7korobi/.rbenv/bin:/usr/local/bin:/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin:/usr/local/rvm/bin:/home/7korobi/bin
UTAGE=#{no}
SSH_PORT=#{no}0
WEB_PORT=#{no}9

export PATH
export SSH_PORT
export WEB_PORT
eval "$(rbenv init -)"
_SH_


open('/home/7korobi/.bash_profile','w').puts <<-_SH_
# .bash_profile
[ -f ~/.bashrc ] && . ~/.bashrc
[ -f ~/web-env ] && . ~/web-env
_SH_


commands = <<-_SH_
chmod 755  ~/web-env ~/.bash_profile
_SH_
commands.each_line {|sh| system sh}
