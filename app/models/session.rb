
class Session
  def self.map enum
    enum.map do |session|
      YAML.load(session.data).tap do |data|
        data["current"] = CurrentAuthenticated::Current.new(* data["current"])
      end
    end
  end

  def self.grep regexp
    map MongoidStore::Session.where(data: regexp)
  end
  def self.view
    map MongoidStore::Session.all
  end
end
