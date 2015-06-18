# -*- coding: utf-8 -*-

class SowTurn
  include SowTurnable
  store_in collection: "events"

  def save_to_yaml
    yaml_path = "/www/giji_yaml/events/#{id}.yml"
    hot = 3.days.ago < File.ctime(yaml_path) rescue nil
    return if hot

    messages = self.messages.sort_by(&:date)
    return if messages.empty?

    File.open(yaml_path, "w:utf-8") do |f|
      self.created_at = messages.first.date
      self.updated_at = messages.last.date
      self.save
      f.write messages.as_json.to_yaml
    end
  end

  def update_from_file
    Giji::RSync.new.in_folder(story.folder) do |folder, protocol, set|
      vid  = story.vid
      path = set[:files][:ldata] + "/data/vil"
      turn = self.turn

      self.messages = []
      %w[log memo].each do |type|
        fname = "%04d_%02d%s.cgi"%[vid, turn, type]
        scanner = GijiLogScanner.new(path, folder, fname)
        scanner.save
      end
    end
  end
end
