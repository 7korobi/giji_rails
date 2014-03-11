# -*- coding: utf-8 -*-

class Talk < ActiveRecord::Base
  include Talkable

  FOLDERS = []
  VILLAGES = []

=begin
  (GIJI[:folders].keys + %w[SOYBEAN TEST]).each do |folder|
    klass = Class.new(ActiveRecord::Base) {|c| include Talkable }
    const_set(folder.upcase, klass)
    FOLDERS.push klass
  end

  ( ("PRETENSE001".."PRETENSE087").to_a +
    (  "CABALA001"..  "CABALA238").to_a +
    ( "PERJURY001".. "PERJURY217").to_a +
    (   "XEBEC001"..   "XEBEC162").to_a
  ).each do |vid|
    klass = Class.new(ActiveRecord::Base) {|c| include Talkable }
    const_set(vid, klass)
    VILLAGES.push klass
  end

  scope :search_with, ->(query) { where(%Q|match(log) against("#{query}" with query expansion)|) }
  scope :search, ->(query) { where(%Q|match(log) against("#{query}" in boolean mode)|) }
=end

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
