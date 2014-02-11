# -*- coding: utf-8 -*-

class SowTurn
  include SowTurnable
  store_in collection: "events"

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
