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

  def self.gaps
    only(:folder, :vid).group_by(&:folder).map do |k,v|
      list = v.map(&:vid).sort
      rng=(list.first..list.last).to_a
      [k,rng - list]
    end.each_with_object({}) do |(key,val),hash|
      hash[key] = val
    end
  end

  def update_from_file_only_game
    Giji::RSync.new.in_folder(self.folder) do |folder, protocol, set|
      vid   = self.vid
      path  = set[:files][:ldata] + "/data/vil"
      fname = "%04d_vil.cgi"%[vid]
      SowRecordFile.village_to_mongo path, fname, folder, vid
      yield(folder,vid,path) if block_given?
    end
  end

  def update_from_file
    update_from_file_only_game do |folder,vid,path|
      self.events.each do |event|
        %w[log memo].each do |type|
          turn = event.turn
          fname = "%04d_%02d%s.cgi"%[vid, turn, type]
          source = SowRecordFile.try(type, path, fname, folder, vid, turn ) rescue next
          SowRecordFile.message_to_mongo(fname, source, folder, vid, turn)
        end
      end
    end
  end
end
