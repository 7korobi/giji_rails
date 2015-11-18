source 'https://rubygems.org'
ruby "2.2.3"

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'unicorn'
gem 'rails', '4.2.4'
gem 'quiet_assets'
gem 'sqlite3'

# queue
gem 'sinatra', require: false
gem 'sidekiq'
gem 'sidekiq-cron'

# web_service
gem "rdropbox"
gem "mechanize"
gem "hpricot"
gem "net-ssh"
gem "net-sftp"

# authenticate
gem "devise"
gem "omniauth"
gem 'omniauth-twitter'
gem 'omniauth-facebook'
gem 'omniauth-mixi'
gem 'omniauth-google'
gem 'omniauth-yahoojp'
# gem 'omniauth-github'
# gem 'omniauth-ldap'
gem 'omniauth-openid'


# data_base
# yum install mongo-10gen mongo-10gen-server
# yum install redis
gem 'mongoid', '~> 5.0.0'
gem 'mongo_session_store-rails4'
gem "paperclip"

# javascript
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby
gem "bson_ext"
gem 'yajl-ruby'


# Use SCSS for stylesheets
# Use Uglifier as compressor for JavaScript assets
# Use CoffeeScript for .js.coffee assets and views
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'hogan_assets'

# DCI
gem 'rabl'
gem 'gon'
gem "cancan"
gem "decent_exposure"
gem "natto"

# input support
gem "formtastic"
gem "formtastic-bootstrap"

# view environment
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
# gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'
gem "slim"
gem "less-rails"
gem "bootstrap-sass"

# control support
gem "moji"
gem "jpmobile"

gem "hashie"
group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

group :development do
  gem "capistrano"
  gem "aws-sdk"

# To use debugger
  gem 'pry'
  gem 'pry-byebug'
  gem 'pry-stack_explorer'
  gem 'better_errors'
  gem 'binding_of_caller'
end

group :test do
  # Pretty printed test output
  gem 'turn' #, :require => false
  gem "minitest"
end
