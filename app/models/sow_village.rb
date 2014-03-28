class SowVillage < Story
  include Giji

  field :sow_auth_id
  field :password
  field :vpl, type:Array

  field :name
  field :comment
  field :rating

  field :type,  type:Hash
  field :card,  type:Hash
  field :options, type:Array

  field :upd,   type:Hash
  field :timer, type:Hash


  def self.empty_ids
    has_messages_ids = Dir.glob("/www/giji_yaml/events/*.yml").map do |path|
      fname, name = path.match(%r|/([^/]+)\-\d+.yml|).to_a
      name
    end
    pluck("id") - has_messages_ids
  end

  def self.repair_from_file(folders = nil)
    rsync = Giji::RSync.new
    rsync.each_villages([]) do |folder, vid, turn, path, fname|
      next unless (!folders) || folders.member?(folder)
      GijiVilScanner.new(path, folder, fname).enqueue :repair
    end
  end

  def update_from_file_only_game force = true
    Giji::RSync.new.in_folder(self.folder) do |folder, protocol, set|
      vid   = self.vid
      path  = set[:files][:ldata] + "/data/vil"
      fname = "%04d_vil.cgi"%[vid]
      GijiVilScanner.new(path, folder, fname).save if force
      yield(folder,vid,path) if block_given?
    end
  end

  def update_from_file_only_log_cleanup
    update_from_file_only_game(false) do |folder,vid,path|
      if self.events.blank?
        self.old_events.each do |event|
          self.events << event
        end
        self.events.each do |event|
          event.new_record = true
          event.attributes["messages"] = []
          event.save!
        end
      end
      self.events.each do |event|
        %w[log memo].each do |type|
          turn = event.turn
          fname = "%04d_%02d%s.cgi"%[vid, turn, type]
          GijiLogScanner.new(path, folder, fname).save

          if type == "log" && SowRecordFile.send(type, path, fname, folder, vid, turn )
            hash = event.attributes.except("_id", "_type", "messages")
            event.delete
            turn = SowTurn.new(hash)
            turn.messages = []
            turn["_type"] = "SowTurn"
            turn.save!
          end
        end
      end
      nil
    end
  end

  def update_from_file_only_log
    update_from_file false
  end

  def update_from_file force = true
    update_from_file_only_game(force) do |folder,vid,path|
      self.events.each do |event|
        %w[log memo].each do |type|
          turn = event.turn
          fname = "%04d_%02d%s.cgi"%[vid, turn, type]
          GijiLogScanner.new(path, folder, fname).save
        end
      end
    end
  end
  def source
    Giji::RSync.new.in_folder(self.folder) do |folder, protocol, set|
      vid   = self.vid
      path  = set[:files][:ldata] + "/data/vil"
      fname = "%04d_vil.cgi"%[vid]
      return SowRecordFile.village( path, fname, folder, vid )
    end
  end
end
