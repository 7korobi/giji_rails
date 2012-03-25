class SowVillage < Story
  include Giji
  cache

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

  def self.gaps
    only(:folder, :vid).group_by(&:folder).map do |folder,v|
      out = []
      Giji::RSync.new.in_folder(folder) do |folder, protocol, set|
        good = v.map(&:vid).sort
        list = []

        path = set[:files][:ldata] + "/data/vil"
        Dir.glob("#{path}/*_vil.cgi").each do |s|
          match = s.match(/\/(\d\d\d\d)_vil.cgi/)
          list << match[1].to_i if match
        end
        out = list - good
      end
      [folder, out]
    end.each_with_object({}) do |(key,val),hash|
      hash[key] = val
    end
  end

  def self.add_folder(folder)
    Giji::RSync.new.in_folder(folder) do |folder, protocol, set| 
      path = set[:files][:ldata] + "/data/vil"
      Dir.glob("#{path}/*_vil.cgi").each do |s|
        fname = s.match(/\d\d\d\d_vil.cgi/)[0]
        GijiVilScanner.new(path, folder, Time.at(0), 60, [], fname).save
      end

      %w[log memo].each do |type|
        Dir.glob("#{path}/*_*#{type}.cgi").each do |s|
          fname = s.match(/\d\d\d\d_\d\d#{type}.cgi/)[0]
          GijiLogScanner.new(path, folder, Time.at(0), 60, [], fname).save        
        end
      end
    end
  end

  def update_from_file_only_game force = true
    Giji::RSync.new.in_folder(self.folder) do |folder, protocol, set|
      vid   = self.vid
      path  = set[:files][:ldata] + "/data/vil"
      fname = "%04d_vil.cgi"%[vid]
      GijiVilScanner.new(path, folder, Time.at(0), 60, [vid], fname).save if force
      yield(folder,vid,path) if block_given?
    end
  end

  def update_from_file_only_log
    update_from_file_only_game(false) do |folder,vid,path|
      self.events.each do |event|
        %w[log memo].each do |type|
          turn = event.turn
          fname = "%04d_%02d%s.cgi"%[vid, turn, type]
          GijiLogScanner.new(path, folder, Time.at(0), 60, [vid], fname).save
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
          GijiLogScanner.new(path, folder, Time.at(0), 60, [vid], fname).save
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
