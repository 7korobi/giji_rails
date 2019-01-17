source 'https://rubygems.org'
ruby "2.6.0"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw]
gem "nokogiri", ">= 1.10.1"

# gem "natto"

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'unicorn'
gem 'rails', ">= 5.2.2"
gem 'sqlite3'
gem 'responders', '~> 2.0'

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
# gem "devise"
# gem "omniauth"
# gem 'omniauth-twitter'
# gem 'omniauth-facebook'
# gem 'omniauth-mixi'
# gem 'omniauth-google'
# gem 'omniauth-yahoojp'
# gem 'omniauth-github'
# gem 'omniauth-ldap'
gem 'omniauth-openid'
gem "decent_exposure"


# data_base
# yum install mongo-10gen mongo-10gen-server
# yum install redis
gem 'mongoid', '= 6.4.2'
gem "paperclip"
gem 'redis-namespace'

# javascript
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby
gem "bson_ext"
gem 'yajl-ruby'


# Use SCSS for stylesheets
# Use Uglifier as compressor for JavaScript assets
# Use CoffeeScript for .js.coffee assets and views
gem 'uglifier', '>= 1.3.0'


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
  gem "minitest"
end
