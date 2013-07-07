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
    SowTurn.messages_empty.pluck("story_id").uniq
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

  def update_from_file_only_log
    update_from_file_only_game(false) do |folder,vid,path|
      self.events.each do |event|
        %w[log memo].each do |type|
          turn = event.turn
          fname = "%04d_%02d%s.cgi"%[vid, turn, type]
          GijiLogScanner.new(path, folder, fname).save
        end
      end
    end
  end

  def update_from_file
    update_from_file_only_game(true) do |folder,vid,path|
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
