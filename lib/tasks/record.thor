# -*- coding: utf-8 -*-

WATCH = {
  cgi: { file: '/www/giji_log/lock/record_cgi_clock.txt'     },
  log: { file: '/www/giji_log/lock/record_log_cgi_clock.txt' }
}

WATCH.each do |key, hash|
  hash[:time] = File.mtime( hash[:file] ) rescue  Time.at(0)
end


class Record < Thor
  desc "rsync", "rsync from servers"
  def rsync
    require 'active_support/all'
    require 'yaml'
    require '/www/giji_rails/lib/const'
    require '/www/giji_rails/lib/rsync'

    rsync = Giji::RSync.new
    rsync.each_with_servers do |folder, protocol, set|
      rsync.get(protocol, set, :config)
    end

    rsync.exec
  end

  desc "cgi", "cgi collection from other server"
  def cgi
    require '/www/giji_rails/config/environment'
    rsync

    rsync = Giji::RSync.new
    SowRecordFile.const_set(:WATCH, WATCH[:cgi])

    gaps = SowVillage.gaps
    rsync.each_locals do |folder, protocol, set|
      next unless set

      data = set[:files][:ldata] + '/data/vil'
      from = set[:files][:from]
      force = gaps[folder]
      SowRecordFile.cgi_scan_by_folder_active( data, folder, from, force )
    end

    open( WATCH[:cgi][:file], "w" ).puts SowVillage.gaps.inspect
    STDERR.puts SowVillage.gaps.inspect
  end

  desc "cgi_log", "cgi collection from other server with log"
  def cgi_log
    require '/www/giji_rails/config/environment'
    rsync

    rsync = Giji::RSync.new
    SowRecordFile.const_set(:WATCH, WATCH[:log])

    gaps = SowVillage.gaps
    rsync.each_locals do |folder, protocol, set|
      next unless set

      data = set[:files][:ldata] + '/data/vil'
      from = set[:files][:from]
      force = gaps[folder]
      SowRecordFile.cgi_scan_by_folder( data, folder, from, force )
    end

    open( WATCH[:log][:file], "w" ).puts SowVillage.gaps.inspect
    STDERR.puts SowVillage.gaps.inspect
  end

  desc "web", "web collection from other service"
  def web
    require '/www/giji_rails/config/environment'
  end
end

