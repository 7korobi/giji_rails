class Event
  include Eventable
  FOLDERS = []
  GIJI[:folders].keys.each do |folder|
    self.const_set folder, child = Class.new
    child.send(:include, Eventable)
    child.store_in collection: "events_of_#{folder.downcase}"
    FOLDERS.push child
  end
end
