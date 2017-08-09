# -*- coding: utf-8 -*-

class Talk < ActiveRecord::Base
  include Talkable

  FOLDERS = []
  VILLAGES = []

  def self.copy_from_file(folders = nil)
    rsync = Giji::RSync.new
    rsync.each_logs([]) do |folder, vid, turn, path, fname|
      next unless (!folders) || folders.member?(folder)
      GijiTalkScanner.new(path, folder, fname).save :log
    end
    rsync.each_memos([]) do |folder, vid, turn, path, fname|
      next unless (!folders) || folders.member?(folder)
      GijiTalkScanner.new(path, folder, fname).save :memo
    end
  end
end
