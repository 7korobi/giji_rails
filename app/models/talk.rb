# -*- coding: utf-8 -*-

class Talk < ActiveRecord::Base
  self.include_root_in_json = false

  validates_presence_of :date
  validates_uniqueness_of :logid, scope: :event_id

  scope :in_event, ->(event_id) { select(%i[logid mestype date subid talks.to color style log  name csid face_id sow_auth_id]).where(event_id: event_id).order("date asc") }
  scope :search_with, ->(query) { where(%Q|match(log) against("#{query}" with query expansion)|) }
  scope :search, ->(query) { where(%Q|match(log) against("#{query}" in boolean mode)|) }

  def self.copy_from_file(folders = nil)
    rsync = Giji::RSync.new
    rsync.each_logs([]) do |folder, vid, turn, path, fname|
      next unless (!folders) || folders.member?(folder)
      GijiTalkScanner.new(path, folder, fname).enqueue :log
    end
    rsync.each_memos([]) do |folder, vid, turn, path, fname|
      next unless (!folders) || folders.member?(folder)
      GijiTalkScanner.new(path, folder, fname).enqueue :memo
    end
  end
end
