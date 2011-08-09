require 'giji'

GIJI = YAML.load_file('config/giji.yml')[Rails.env]
SOW  = YAML.load_file('config/sow.yml' )
