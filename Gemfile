source 'http://rubygems.org'
# ruby "1.9.3-p194"

# ruby on rails
gem 'unicorn', '< 4.4.0'
gem 'rails', '3.2.9'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'coffee-rails'
  gem 'uglifier',     ">= 1.0.3"

  #gem 'sass'
  #gem 'coffee-script'
  #gem 'uglifier'
  #gem 'execjs'
  #gem 'therubyracer'
end

# DCI
gem 'gon'
gem "decent_exposure"
gem "cells"
gem "active_decorator"

# view environment
gem "slim"
gem 'jquery-rails'
# gem 'jquery_mobile_rails'
gem 'twitter-bootstrap-rails', '= 2.1.3'
# gem 'spreadsheet'
# gem 'rabl'
gem 'codemirror-rails'

# queue
gem 'resque'
gem 'resque-scheduler'

# menus
#gem "typus"
#gem "web-app-theme"

# input support
gem "formtastic"
#gem "simple_form"
# gem "mercury-rails"

# control support
gem "kaminari"
gem "moji"
gem "jpmobile"

# authenticate
gem "devise"
gem "omniauth"
gem 'omniauth-twitter'
gem 'omniauth-facebook'
# gem 'omniauth-github'
# gem 'omniauth-google'
# gem 'omniauth-ldap'
gem 'omniauth-openid'

# web_service
gem "mechanize"
gem "hpricot"

# giji support
gem "net-ssh"
gem "net-sftp"
gem "whenever", :require => false

# javascript
gem "therubyracer"
gem "bson_ext"
gem 'yajl-ruby'

# storage
gem "rdropbox"

# data_base
gem "paperclip"
gem "mongoid", '2.4.11'
gem "redis-store", '1.0.0.1'
gem 'sqlite3'
gem "sqlite3-ruby"

# model support
gem "model_manage"
# gem "pattern-match"

# management
#gem "rubygems-update"
#gem "jeweler"

# Deploy work with Capistrano
#gem 'capistrano'

group :development do
# documentation
  gem 'rails-erd'

# To use debugger
  gem 'pry'
  gem 'pry-doc'
  gem "factory_girl_rails", :require => nil
  gem 'rspec-rails', '>= 2.6.1'
end

group :test do
  # Pretty printed test output
  gem 'turn', :require => false
  gem 'rspec-rails', '>= 2.6.1'
end
