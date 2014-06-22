# -*- coding: utf-8 -*-

require 'timeout'

class GijiEventScanner < GijiScanner
  def save(type)
    @keys = nil
    case @fname
    when /vil.cgi/
      Resque.enqueue(self.class, @path, @fname, type, @folder, @vid, @turn)
    else
    end
  end

  @queue = :giji_vils
  def self.perform  path, fname, type, folder, vid, turn
    story_id = [folder.downcase, vid].join '-'
    event_id = [folder.downcase, vid, turn].join '-'

    SowTurn.find(event_id) && return  rescue  nil

    event = SowTurn.new.tap do |t|
      t["_type"] = "SowTurn"
      t.story_id = story_id
      t.vid = vid
      t._id = event_id
    end
    begin
      timeout(60) { event.save }
    rescue
      GijiErrorReport.enqueue e.inspect, o, event.attributes
      sleep 10
    end
  end
end
