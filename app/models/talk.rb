# -*- coding: utf-8 -*-

# event is duble
#  wolf-47-3 wolf-128-7 wolf-189-9 wolf-202-2 wolf-211-4
#  pan-15-0 pan-16-0 pan-32-0 pan-34-1 pan-40-1 
#  ultimate-1-0 ultimate-8-4 ultimate-75-3 ultimate-78-1 ultimate-78-3
#  rp-39-7
#  perjury-24-10 perjury-48-0 perjury-63-6 perjury-64-4 
#  soybean-3-5
#  crazy-82-5
#  cabala-51-4
#  allstar-68-5 allstar-95-3

class Talk < ActiveRecord::Base
  # self.primary_keys = :event_id, :logid

  validates_presence_of :date
  validates_uniqueness_of :logid, scope: :event_id

  scope :summary, ->{ order(:date.asc) }
  scope :search_with, ->(query) { where(%Q|match(log) against("#{query}" with query expansion)|) }
  scope :search, ->(query) { where(%Q|match(log) against("#{query}" in boolean mode)|) }

  def self.copy_from_file
    rsync = Giji::RSync.new
    rsync.each_logs([]) do |folder, vid, turn, path, fname|
      GijiTalkScanner.new(path, folder, fname).enqueue :log
    end
    rsync.each_memos([]) do |folder, vid, turn, path, fname|
      GijiTalkScanner.new(path, folder, fname).enqueue :memo
    end
  end
end
