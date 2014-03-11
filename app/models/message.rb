# -*- coding: utf-8 -*-

class Message
  include Faceable
  field :_id, default: ->{ [event_id, logid].join("-") }
  field :logid
  field :to
  field :log
  field :style
  field :date, type: Time

  field :color
  field :style
  field :subid
  field :mestype
  field :sow_auth_id

  belongs_to :potof, inverse_of: :messages
  belongs_to :story, inverse_of: :chats
  belongs_to :event, inverse_of: :chats

  def self.in_story(story_id) 
    where(story_id: story_id).order_by(:date.asc).with(collection: "msg-#{story_id}")
  end
  def self.in_event(event_id)
    story_id = event_id.split("-")[0..1].join("-")
    p story_id
    where(event_id: event_id).order_by(:date.asc).with(collection: "msg-#{story_id}")
  end

  def self.copy_from_file(folders = nil)
    rsync = Giji::RSync.new
    rsync.each_logs([]) do |folder, vid, turn, path, fname|
      next unless (!folders) || folders.member?(folder)
      GijiMessageScanner.new(path, folder, fname).enqueue :log
    end
    rsync.each_memos([]) do |folder, vid, turn, path, fname|
      next unless (!folders) || folders.member?(folder)
      GijiMessageScanner.new(path, folder, fname).enqueue :memo
    end
  end
end

