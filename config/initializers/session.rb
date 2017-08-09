Giji::Application.configure do
  config.session_store :mongoid_store
end

class ActionDispatch::Session::MongoidStore
  class Session
    def self.marshaled_binary(data)
      YAML.dump(data)
    end
  end

  private
  def unpack(packed)
    packed && YAML.load(packed)
  end
end
