# -*- coding: utf-8 -*-

class SowTurn < Event
  include Giji
  field :winner
  field :event

  field :grudge,    type:Integer
  field :riot,      type:Integer
  field :scapegoat, type:Integer
  field :epilogue,  type:Integer
  field :eclipse,   type:Array
  field :seance,    type:Array

  field :say, type:Hash

  def name
    self[:name] || "#{turn}日目"
  end

  def update_from_file
    Giji::RSync.new.in_folder(story.folder) do |folder, protocol, set|
      vid  = story.vid
      path = set[:files][:ldata] + "/data/vil"
      turn = self.turn

      self.messages = []
      %w[log memo].each do |type|
        fname = "%04d_%02d%s.cgi"%[vid, turn, type]
        GijiLogScanner.new(path, folder, Time.at(0), 60, [vid], fname).save
      end
    end
  end

  def self.gaps
    SowVillage.only(:_type, :folder).group_by(&:folder).map do |folder,v|
      out = []
      Giji::RSync.new.in_folder(folder) do |folder, protocol, set|
        good = SowTurn.only(:_type, :story_id).where(story_id:/^#{folder.downcase}/).map(&:id)
        list = []

        path = set[:files][:ldata] + "/data/vil"
        Dir.glob("#{path}/*_*log.cgi").each do |s|
          vid, turn = s.match(/(\d\d\d\d)_(\d\d)log.cgi/)[1..2]
          list << "#{folder}-#{vid.to_i}-#{turn.to_i}".downcase
        end
        out = list - good
      end
      [folder, out]
    end.each_with_object({}) do |(key,val),hash|
      hash[key] = val
    end
  end

  def self.update_gaps
    gaps.each do |folder, ids|
      Giji::RSync.new.in_folder(folder) do |folder, protocol, set|
        path = set[:files][:ldata] + "/data/vil"

        ids.map {|id| id.match(/-(\d+)-(\d+)/)[1].to_i}.uniq.each do |id|
          key = "#{folder}-#{id}".downcase
          SowVillage.find(key).update_from_file rescue next
        end
        ids.each do |id|
          vid, turn = id.match(/-(\d+)-(\d+)/)[1..2].map(&:to_i)
          %w[log memo].each do |type|
            fname = "%04d_%02d%s.cgi"%[vid, turn, type]
            GijiLogScanner.new(path, folder, Time.at(0), 60, [vid], fname).save
          end
        end
      end
    end
  end
end
