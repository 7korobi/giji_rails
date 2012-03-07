require 'yaml'
require 'active_support/all'

LOG_DIR = '/www/giji_log/'

Dir.glob('*/*.yml').each do |path|
  file, name = /(\w+).yml/.match(path).to_a
  const = name.upcase.to_sym

  if Kernel.constants.member? const
    raise SyntaxError.new("duplicate yaml : #{path}")
  end

  set = YAML.load_file(path).with_indifferent_access
  env = set[Rails.env] rescue nil
  Kernel.const_set( const, env ? env : set )
end

