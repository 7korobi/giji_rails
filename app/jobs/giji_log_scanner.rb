# -*- coding: utf-8 -*-

class GijiLogScanner < GijiScanner
  def save
    case @fname
    when /log.cgi/
      Resque.enqueue(self.class, @path, @fname, :log, @folder, @vid, @turn)
    when /memo.cgi/
      Resque.enqueue(self.class, @path, @fname, :memo, @folder, @vid, @turn)
    else
    end
  end

  def self.save
    SowTurn.messages_empty.each do |o|
      o.update_from_file
    end
  end

  @queue = :giji_vils
  def self.perform  path, fname, type, folder, vid, turn
    story = SowVillage.where( folder: folder, vid: vid ).first
    return unless story

#    GijiTalkScanner.perform  path, fname, type, folder, vid, turn
#    GijiMessageScanner.perform path, fname, type, folder, vid, turn
    GijiYamlScanner.perform path, fname, type, folder, vid, turn

#    MapReduce::MessageByStory.generate([story.id]) if story.is_finish
  end
end
