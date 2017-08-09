
class Session
  def self.map enum
    enum.map do |session|
      YAML.load(session.data).tap do |data|
        data["current"] = CurrentAuthenticated::Current.new(* data["current"])
      end
    end
  end

  def self.all
    MongoidStore::Session.all
  end

  def self.grep regexp
    map all.where(data: regexp)
  end
  def self.view
    map all
  end
end
