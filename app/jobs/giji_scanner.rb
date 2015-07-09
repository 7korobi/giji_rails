# -*- coding: utf-8 -*-

class GijiScanner
  WATCH = {
    cgi: { file: '/www/giji_log/lock/record_cgi_clock.txt'     },
    log: { file: '/www/giji_log/lock/record_log_cgi_clock.txt' }
  }

  WATCH.each do |key, hash|
    hash[:time] = File.mtime( hash[:file] ) rescue  Time.at(0)
  end

  def initialize(path, folder, fname, vid = fname[0..3].to_i, turn = fname[5..6].to_i)
    @path = path
    @fname = fname
    @folder = folder
    @vid  = vid
    @turn = turn
  end
end
