module Rails
  @@app = {
    child: {
      models:      [],
      controllers: [],
      helpers:     [],
    },
    inherit: {
      models:      [],
      controllers: [],
      helpers:     [],
    },
  }
  def self.models
    @@app[:child][:models]      | @@app[:inherit][:models]
  end
  def self.controllers
    @@app[:child][:controllers] | @@app[:inherit][:controllers]
  end
  def self.helpers
    @@app[:child][:helpers]     | @@app[:inherit][:helpers]
  end

  def self.child_models
    @@app[:child][:models]     
  end
  def self.child_controllers
    @@app[:child][:controllers] 
  end
  def self.child_helpers
    @@app[:child][:helpers]     
  end

  def self.add_child(type, base)
    (@@app[:child][type] ||= []).tap do |o|
      o.push base
      o.uniq!
    end
  end

  def self.add_inherit(type, base)
    (@@app[:inherit][type] ||= []).tap do |o|
      o.push base
      o.uniq!
    end
    @@app[:child][type] -= @@app[:inherit][type]
  end
end





