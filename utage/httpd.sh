#!/bin/sh

mkdir -p /httpd/
chown -R 7korobi /httpd
chmod -R 755     /httpd

if [ -e "$1.tar.gz" ] 
then
  echo 'skip'
else
  wget http://nginx.org/download/$1.tar.gz
  tar zxf $1.tar.gz 
fi

cd /httpd/$1 && ./configure \
    --conf-path=/utage/conf/nginx.conf \
    --error-log-path=/utage/log/nginx-error.log \
    --http-log-path=/utage/log/nginx-access.log \
    --pid-path=/utage/pids/nginx.pid  \
    --lock-path=/utage/lock/nginx.lock \
    --http-client-body-temp-path=/www/tmp/client/ \
    --http-proxy-temp-path=/www/tmp/proxy/ \
    --http-fastcgi-temp-path=/www/tmp/fcgi/ \
    --user=7korobi \
    --group=7korobi \
    --with-http_stub_status_module \
    --with-http_ssl_module \
    --with-http_gzip_static_module \
    --with-http_realip_module \

mkdir -p /utage/conf
mkdir -p /utage/log
mkdir -p /utage/pids
mkdir -p /utage/lock
mkdir -p /www/tmp/client
mkdir -p /www/tmp/proxy
mkdir -p /www/tmp/fcgi

chown -R 7korobi /utage
chown -R 7korobi /www
chmod -R 755 /utage
chmod -R 755 /www

make install
