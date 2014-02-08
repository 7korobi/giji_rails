# -*- coding: utf-8 -*-

require 'timeout'

class GijiTalkScanner < GijiScanner
  def enqueue  type
#    self.class.perform(@path, @fname, type, @folder, @vid, @turn)
    Resque.enqueue(self.class, @path, @fname, type, @folder, @vid, @turn)
  end

  @queue = :giji_vils
  def self.perform  path, fname, type, folder, vid, turn
    source = SowRecordFile.send(type, path, fname, folder, vid, turn )
    return unless source

    story_id = [folder.downcase, vid].join '-'
    event_id = [folder.downcase, vid, turn].join '-'
    stored_ids = Talk.where(event_id: event_id).pluck("logid")
    chk_doubles = []
    ActiveRecord::Base.clear_active_connections!

    source.each do |o|
      logid, subid  = case fname
                      when /memo.cgi/
                      ['MM' + o.logid, 'M']
                      when /log.cgi/
                      [o.logid, o.logsubid]
                      end
      if chk_doubles.member? logid
        GijiErrorReport.enqueue "event #{event_id} logid #{logid} is duble.", o
        next
      end
      chk_doubles.push logid
      stored_ids.push  logid

      # message embedded in
      message = Talk.new.tap do |t|
        t.story_id = story_id
        t.event_id = event_id
        t.logid = logid
        t.sow_auth_id = o.uid
        t.date = o.date
        t.log = o.log 
        t.subid = subid
        t.face_id = o.cid
        t.csid = o.csid
        t.style = SOW_RECORD[folder][:monospace][o.monospace.to_i]
        t.mestype = SOW_RECORD[folder][:mestypes][o.mestype.to_i]
      end
      fix_dic = {
        'へクター' => 'ヘクター'
      }.each do |src, dst|
        o.chrname.gsub!(src, dst)  if  o.chrname[src]
      end

      case message.mestype
      when 'AIM'
        message.name, message.to = o.chrname.split(' → ')
      else
        message.name = o.chrname
      end

      if message.mestype.blank?
        GijiErrorReport.enqueue "mestype is null", message.attributes
        next
      end
      begin
        timeout(60) { message.save }
      rescue ActiveRecord::RecordNotUnique => e
        GijiErrorReport.enqueue e.inspect, o, message.attributes
      rescue Mysql2::Error => e
        GijiErrorReport.enqueue e.inspect, o, message.attributes
        sleep 10
      rescue Timeout::Error, ActiveRecord::StatementInvalid => e
        GijiErrorReport.enqueue e.inspect, o, message.attributes
        sleep 10
        exit
      end
    end
  end
end
