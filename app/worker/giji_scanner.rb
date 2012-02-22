# -*- coding: utf-8 -*-

class GijiScanner
  WATCH = {
    cgi: { file: '/www/giji_log/lock/record_cgi_clock.txt'     },
    log: { file: '/www/giji_log/lock/record_log_cgi_clock.txt' }
  }

  WATCH.each do |key, hash|
    hash[:time] = File.mtime( hash[:file] ) rescue  Time.at(0)
  end

  def initialize(path, folder, watch, timeout =  60*60*24*365*2009, force=[], fname)
    @old  = watch - File.mtime(path+'/'+fname)
    @timeout = timeout
    @force = force

    @path = path
    @fname = fname
    @folder = folder
    @vid  = @fname[0..3].to_i
    @turn = @fname[5..6].to_i
  end

  def out?
    return false if @force.include? @vid 
    return false if @old < @timeout
    return true
  end

  def save
    return if out?

    @keys = nil
    case @fname
    when /vil.cgi/
      enqueue
    when /logcnt.cgi/
    when /log.cgi/
      enqueue  :log
    when /memo.cgi/
      enqueue  :memo
    when /memoidx.cgi/
    when /logidx.cgi/
    else
    end
  end
end
