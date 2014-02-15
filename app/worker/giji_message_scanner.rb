# -*- coding: utf-8 -*-

# pretense-32


require 'timeout'

class GijiMessageScanner < GijiScanner
  def enqueue  type
    Resque.enqueue(self.class, @path, @fname, type, @folder, @vid, @turn)
  end

  @queue = :giji_vils
  def self.perform  path, fname, type, folder, vid, turn
    source = SowRecordFile.send(type, path, fname, folder, vid, turn )
    return unless source

    story_id = [folder.downcase, vid].join '-'
    event_id = [folder.downcase, vid, turn].join '-'

    stored_ids = Message.in_event(event_id).pluck("logid")
    chk_doubles = []
    requests = Hash.new

    source.each do |o|
      logid, subid  = case fname
                      when /memo.cgi/
                      ['MM' + o.logid, 'M']
                      when /log.cgi/
                      [o.logid, o.logsubid]
                      end
      if chk_doubles.member? logid
        GijiErrorReport.enqueue "logid is double. #{logid} add 90000 number.", o  unless  stored_ids.member? logid
        logid = logid[0..1] + (90000 + logid[2..-1].to_i).to_s
      end
      chk_doubles.push logid

      next if stored_ids.member? logid
      stored_ids.push  logid

      # message embedded in
      message = Message.new.tap do |t|
        t.id = [event_id, logid].join("-")
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
        GijiErrorReport.enqueue "mestype: null => BSAY", message.attributes
        message.mestype = "BSAY"
      end
      begin
        timeout(60) { message.with(collection:"msg-#{story_id}").save }
      rescue Moped::Errors::OperationFailure => e
        GijiErrorReport.enqueue e.inspect, o, message.attributes
        sleep 10
      end
      key = [{ remote_ip: o.remoteaddr, fowardedfor: o.fowardedfor, user_agent: o.agent },{ sow_auth_id: o.uid }]
      requests[ key ] = true
    end
  end
end
