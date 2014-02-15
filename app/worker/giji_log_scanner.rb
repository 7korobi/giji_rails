# -*- coding: utf-8 -*-

class GijiLogScanner < GijiScanner
  def self.save
    SowTurn.messages_empty.each do |o|
      o.update_from_file
    end
  end

  def enqueue  type
#    self.class.perform(@path, @fname, type, @folder, @vid, @turn)
    Resque.enqueue(self.class, @path, @fname, type, @folder, @vid, @turn)
  end


  @queue = :giji_vils
  def self.perform  path, fname, type, folder, vid, turn
    story = SowVillage.where( folder: folder, vid: vid ).first
    return unless story

#    GijiTalkScanner.perform  path, fname, type, folder, vid, turn
    GijiMessageScanner.perform path, fname, type, folder, vid, turn

#    MapReduce::MessageByStory.generate([story.id]) if story.is_finish
  end
end
