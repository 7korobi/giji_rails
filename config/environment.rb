# Load the Rails application.
require File.expand_path('../application', __FILE__)
Tilt::CoffeeScriptTemplate.default_bare = true

# Initialize the rails application
Giji::Application.initialize!
