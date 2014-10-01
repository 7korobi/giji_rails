require 'capistrano/setup'
require 'capistrano/deploy'

set :rbenv_type, :user
set :rbenv_ruby, "2.1.3"

require 'capistrano/console'
import 'lib/capistrano/logger/utage.rb'
Dir.glob('lib/capistrano/tasks/*.rb').each { |rb| import rb }
