HoganAssets::Config.configure do |config|
  config.path_prefix = "app/assets/javascripts/hogan"
  config.template_namespace = 'HOGAN'
  config.slim_options[:ugly] = true
  config.slimstache_extensions = %w(slimstache)
end
