require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module Sprockets
  class Manifest
    def compile(*args)
      unless environment
        raise Error, "manifest requires environment for compilation"
      end

      paths = environment.each_logical_path(*args).to_a +
      args.flatten.select { |fn| Pathname.new(fn).absolute? if fn.is_a?(String)}

      paths.each do |path|
        if asset = find_asset(path)
          files[asset.digest_path] = {
            'logical_path' => asset.logical_path,
            'mtime' => asset.mtime.iso8601,
            'size' => asset.bytesize,
            'digest' => asset.digest
          }
          logical_path = asset.logical_path
          assets[asset.logical_path] = asset.digest_path

          logical_target = File.join(dir, logical_path)
          logger.info "Writing #{logical_target}"
          asset.write_to logical_target
          asset.write_to "#{logical_target}.gz" if asset.is_a?(BundledAsset)

          save
          asset
        end
      end
    end
  end
end

module Giji
  class Application < Rails::Application
    config.assets.precompile += %w( dic.js data_pan.js data.js base.js sow.js color_white.css color_black.css color_white_box.css color_black_box.css )

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
    config.i18n.default_locale = :ja
  end
end
