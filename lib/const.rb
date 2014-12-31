
Face
ChrSet
Dir.glob('**/*.yml').uniq.each do |path|
  next if path[/^test/]

  file, name = /(\w+).yml/.match(path).to_a
  const = name.upcase.to_sym

  if Kernel.constants.member? const
    raise SyntaxError.new("duplicate yaml : #{path}")
  end

  p path
  set = YAML.load_file(path)
  case set
  when Hash
    env = (set[Rails.env] || set).with_indifferent_access
  else
    env = set
  end
  Kernel.const_set( const, env )
end

