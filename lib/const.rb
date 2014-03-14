require 'yaml'
require 'active_support/all'

Face
ChrSet
Dir.glob('**/*.yml').uniq.each do |path|
  file, name = /(\w+).yml/.match(path).to_a
  const = name.upcase.to_sym

  if Kernel.constants.member? const
    raise SyntaxError.new("duplicate yaml : #{path}")
  end

  set = YAML.load_file(path)
  case set
  when Hash
    env = (set[Rails.env] || set).with_indifferent_access
  else
    env = set
  end
  Kernel.const_set( const, env )
end

