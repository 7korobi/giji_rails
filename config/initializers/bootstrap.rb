require 'giji'

GIJI = YAML.load_file('config/giji.yml')[Rails.env].with_indifferent_access

Rails.application.config.middleware.use OmniAuth::Builder  do
  [:twitter, :facebook].each do |site|
    open_key, private_key, options = GIJI[:provider][site]
    provider site, open_key, private_key
  end
end
