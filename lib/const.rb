
Face
ChrSet

Dir.glob('../giji/*/yaml/*.yml').uniq.each do |path|
  file, name = /(\w+).yml/.match(path).to_a
  next if name[/^work_/]

  const = name.upcase.to_sym

  if Kernel.constants.member? const
    raise SyntaxError.new("duplicate yaml : #{path}")
  end

  set = Hashie::Mash.new(yaml: YAML.load_file(path)).yaml
  case set
  when Hash
    env = (set[Rails.env] || set)
  else
    env = set
  end
  Kernel.const_set( const, env )
end

