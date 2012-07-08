#!/usr/bin/env ruby-local-exec

no = ARGV[0][0..2]
hwaddr = no[1..2]

system %Q|chmod 777 /usr/local/bin/rbenv-install /usr/local/bin/ruby-build|
system %Q|mkdir -p     /usr/local/share/ruby-build/|
system %Q|chmod -R 777 /usr/local/share/ruby-build/|

open('/etc/sysconfig/network-scripts/ifcfg-eth0','w').puts <<-_SH_
DEVICE="eth0"
BOOTPROTO="static"
BROADCAST="192.168.0.255"
DNS1="192.168.0.1"
GATEWAY="192.168.0.1"
HWADDR="08:00:27:C2:31:#{hwaddr}"
IPADDR="192.168.0.#{no}"
NETMASK="255.255.255.0"
NM_CONTROLLED="yes"
ONBOOT="yes"
TYPE="Ethernet"
_SH_


open('/etc/ssh/sshd_config','w').puts <<-_SH_
Port #{no}0
SyslogFacility AUTHPRIV
PasswordAuthentication yes
ChallengeResponseAuthentication no
GSSAPIAuthentication yes
GSSAPICleanupCredentials yes
UsePAM yes
AcceptEnv LANG LC_CTYPE LC_NUMERIC LC_TIME LC_COLLATE LC_MONETARY LC_MESSAGES
AcceptEnv LC_PAPER LC_NAME LC_ADDRESS LC_TELEPHONE LC_MEASUREMENT
AcceptEnv LC_IDENTIFICATION LC_ALL LANGUAGE
AcceptEnv XMODIFIERS
X11Forwarding yes
Subsystem sftp  /usr/libexec/openssh/sftp-server
_SH_


open('/etc/hosts','w').puts <<-_SH_
183.181.24.203  giji.sytes.net
192.168.0.100  utage.sytes.net
192.168.0.101     tv.sytes.net
_SH_


open('/home/7korobi/.ssh/authorized_keys','w').puts <<-_SH_
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDaTyTVqSRr/kH4ZPkH1Y0cpKhGlUmGbUWwSMRcQiXMik3cJfGCVWahUT36snbVzbjJtE15WXi3yfeaIrj2BVn7VDrNabUvSgELKyMzjUEfH1DROQrZN9e0fOwifEGDPlDr/iD0bSX92ZCM/aICaf/awkbs4lZIKAs6V7sG8szk5MZ7rbF+rUAuwh+nLPfboV2ssfCHc72nyeY9+wvhHMD4HDvDSbutPnjAXS5E5JbW82XILLo1PWbN10hJuud16Cui9t5aXYPslJ/GXnKTmqwGy4DYF4aC/VvzpQ5p9vhptmcG0hYlNro3kSgUKn5ZgZlRnFM+6Xo0tKo3LtZIfCbV 7korobi@7korobi-Air.local
ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEA35zPfcfVXpdORYti8MFr2TaEGHHk+GCCFI9Refys8fEsqAsAWzpSuuFWt4h4LEypXBkfJhuRvSV9mr1yqP3gWS2hUvfmUtb86Kk7RbSJDMmGCS5DsjS+utjGyjt2i4YGZeVfzjW0YNsHy6TmSjj6hWhLCBPYh5xY0D8pucfoSaDDEvz86mws6uZCArpWgZ0PmYcXSDDn73+O/BmlzQh0dFnZ6qL3dlKZwLPtAmQp3ukYSlW8PgHK5LXKt2HgoYAQogCXOpFSfIMLZHO8Aac9sGFkGs7Apy930ShDf0M/Uwd0ektflFFNorpb57L0EnxGXCwNT/aO/ATt28Lxp1c3Bw== 7korobi@ultra6
_SH_


commands = <<-_SH_
mkdir -p /www/giji_rails /utage
chown -R 7korobi:users /www /utage /home/7korobi/.bash_profile /home/7korobi/.ssh/authorized_keys
chmod 600  /home/7korobi/.ssh/authorized_keys
cd /  && git init
_SH_
commands.each_line {|sh| system sh}

