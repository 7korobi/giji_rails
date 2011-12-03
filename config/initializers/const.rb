Dir.glob('*/*.yml').each do |path|
  file, name = /(\w+).yml/.match(path).to_a
  const = name.upcase.to_sym

  if Kernel.constants.member? const
    raise SyntaxError.new("duplicate yaml : #{path}")
  end

  set = YAML.load_file(path).with_indifferent_access
  env = set[Rails.env]
  Kernel.const_set( const, env ? env : set )
end
