# -*- coding: utf-8 -*-

require 'timeout'

class ScanLogJob < ActiveJob::Base
  queue_as :giji_vils

  def perform  path, fname, type, folder, vid, turn
    source = SowRecordFile.send(type.to_sym, path, fname, folder, vid, turn )
    return unless source

    story_id = [folder.downcase, vid].join '-'
    event_id = [folder.downcase, vid, turn].join '-'
    event = SowTurn.find(event_id)

    requests = Hash.new
    messages = event.messages
    appends = []
    stored_ids = messages.map(&:logid)
    chk_doubles = []

    source.each do |o|
      mestype = SOW_RECORD[folder][:mestypes][o.mestype.to_i]
      logid, subid  = case fname
                      when /memo.cgi/
                        loghd_map = {"ADMIN" => "a", "MAKER" => "m", "SPSAY" => "P"}
                        loghd = "#{loghd_map[mestype] || mestype[0]}M"
                        [loghd + o.logid, 'M']
                      when /log.cgi/
                        [o.logid, o.logsubid]
                      end
      if chk_doubles.member? logid
        ErrorJob.perform_now "logid is double. #{logid} add 90000 number.", o  unless  stored_ids.member? logid
        uniq_id = logid[0..1] + (90000 + logid[2..-1].to_i).to_s
      else
        uniq_id = logid
      end
      chk_doubles.push logid

      next if stored_ids.member? logid
      stored_ids.push  logid

      # message embedded in
      message = Message.new.tap do |t|
        t.id = [event_id, uniq_id].join("-")
        t.story_id = story_id
        t.event_id = event_id
        t.logid = logid
        t.mestype = mestype
        t.sow_auth_id = o.uid
        t.date = o.date
        t.log = o.log
        t.size = o.log.to_s.size
        t.subid = subid
        t.face_id = o.cid
        t.csid = o.csid
        t.style = SOW_RECORD[folder][:monospace][o.monospace.to_i]
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
        ErrorJob.perform_now "mestype: null => BSAY", message.attributes
        message.mestype = "BSAY"
      end
      begin
        message.instance_eval{ @attributes_before_type_cast = {} }
        appends.push message
        messages.push message
      end
      key = [{ remote_ip: o.remoteaddr, fowardedfor: o.fowardedfor, user_agent: o.agent },{ sow_auth_id: o.uid }]
      requests[ key ] = true
    end

    appends.each do |o|
      raise o.errors unless o.save
    end
    event.save_to_yaml

    requests.keys.each do |key| request_key, sow_auth_id = key
      account = SowAuth.where( sow_auth_id ).first || SowAuth.new( sow_auth_id )
      account.save
      request = Request.where( request_key ).first || Request.new( request_key )
      request.sow_auth_ids |= [account.id]
      request.save
    end
  end
end
