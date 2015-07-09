# -*- coding: utf-8 -*-

require 'timeout'

class ReplaceEventJob < ActiveJob::Base
  queue_as :giji_vils

  def perform  path, fname, type, folder, vid, turn
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
      ErrorJob.perform_now e.inspect, o, event.attributes
      sleep 10
    end
  end
end
