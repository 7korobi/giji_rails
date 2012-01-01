# -*- coding: utf-8 -*-

WATCH = {
  cgi: { file: '/www/etc/clock/record_cgi_clock.txt'     },
  vil: { file: '/www/etc/clock/record_vil_cgi_clock.txt' }
}

WATCH.each do |key, hash|
  hash[:time] = File.mtime( hash[:file] ) rescue  Time.now - 60*60*24
end


class Record < Thor
  desc "rsync", "rsync from servers"
  def rsync
    require 'active_support/all'
    require 'yaml'
    require '/www/giji_rails/lib/const'
    require '/www/giji_rails/lib/rsync'

    rsync = Giji::RSync.new
    rsync.each do |folder, protocol, set|
      rsync.get(protocol, set, :config)
    end

    rsync.exec
  end

  desc "cgi", "cgi collection from other server"
  def cgi
    require '/www/giji_rails/config/environment'
    return
    RecordFile.class_eval do
        cgi_scan_by_folder( LOG_DIR + 'pan/data/vil'        ,'PAN'      , 60*10  ,[] )
        cgi_scan_by_folder( LOG_DIR + 'wolf/data/vil'       ,'WOLF'     , 60*10  ,[] )
        cgi_scan_by_folder( LOG_DIR + 'cabala/data/vil'     ,'CABALA'   , 60*10  ,[] )
        cgi_scan_by_folder( LOG_DIR + 'allstar/data/vil'    ,'ALLSTAR'  , 60*10  ,[] )
        cgi_scan_by_folder( LOG_DIR + 'perjury/data/vil'    ,'PERJURY'  , 60*10  ,[] )

        cgi_scan_by_folder( LOG_DIR + 'crazy/data/vil'      ,'CRAZY'    , 60*10  ,[] )
        cgi_scan_by_folder( LOG_DIR + 'lobby/data/vil'      ,'LOBBY'    , 60*10  ,[] )
        cgi_scan_by_folder( LOG_DIR + 'xebec/data/vil'      ,'XEBEC'    , 60*10  ,[] )

        cgi_scan_by_folder( LOG_DIR + 'kitchen/data/vil'    ,'OFFPARTY' , 60*10  ,[] )
        cgi_scan_by_folder( LOG_DIR + 'lobby/old/data/vil'  ,'LOBBY_OLD', 60*10  ,[] )

        cgi_scan_by_folder( LOG_DIR + 'ultimate/data/vil'   ,'ULTIMATE' , 60*10  ,[] )
        cgi_scan_by_folder( LOG_DIR + 'rp/data/vil'         ,'RP'       , 60*10  ,[] )
        cgi_scan_by_folder( LOG_DIR + 'pretense/data/vil'   ,'PRETENSE' , 60*10  ,[] )
    end
#    cgi_scan_by_account( LOG_DIR + 'sow/data/user'       , 60*10  )

    open( WATCH[:cgi][:file], "w" ).puts "TimeStamp set."
  end

  desc "cgi_vil", "cgi collection from other server villages"
  def cgi_vil
    require '/www/giji_rails/config/environment'
    RecordFile.class_eval do
        cgi_scan_by_folder_active( LOG_DIR + 'pan/data/vil'        ,'PAN'      , 60*10  ,[] )
        cgi_scan_by_folder_active( LOG_DIR + 'wolf/data/vil'       ,'WOLF'     , 60*10  ,[] )
        cgi_scan_by_folder_active( LOG_DIR + 'cabala/data/vil'     ,'CABALA'   , 60*10  ,[] )
        cgi_scan_by_folder_active( LOG_DIR + 'allstar/data/vil'    ,'ALLSTAR'  , 60*10  ,[] )
        cgi_scan_by_folder_active( LOG_DIR + 'perjury/data/vil'    ,'PERJURY'  , 60*10  ,[] )

        cgi_scan_by_folder_active( LOG_DIR + 'crazy/data/vil'      ,'CRAZY'    , 60*10  ,[] )
        cgi_scan_by_folder_active( LOG_DIR + 'xebec/data/vil'      ,'XEBEC'    , 60*10  ,[] )

        cgi_scan_by_folder_active( LOG_DIR + 'lobby/data/vil'      ,'LOBBY'    , 60*10  ,[] )
        cgi_scan_by_folder_active( LOG_DIR + 'kitchen/data/vil'    ,'OFFPARTY' , 60*10  ,[] )
        cgi_scan_by_folder_active( LOG_DIR + 'lobby/old/data/vil'  ,'LOBBY_OLD', 60*10  ,[] )
    end
    open( WATCH[:vil][:file], "w" ).puts "TimeStamp set."
  end

  desc "web", "web collection from other service"
  def web
    require '/www/giji_rails/config/environment'
  end
end

