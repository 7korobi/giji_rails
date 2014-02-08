# -*- coding: utf-8 -*-

class GijiLogScanner < GijiScanner
  def self.save
    SowTurn.messages_empty.each do |o|
      o.update_from_file
    end
  end

  def enqueue  type
#    self.class.perform(@path, @fname, type, @folder, @vid, @turn)
    Resque.enqueue(self.class, @path, @fname, type, @folder, @vid, @turn)
  end


  @queue = :giji_vils
  def self.perform  path, fname, type, folder, vid, turn
    GijiTalkScanner.perform path, fname, type, folder, vid, turn

    source = SowRecordFile.send(type, path, fname, folder, vid, turn )
    return unless source

    story = SowVillage.where( folder: folder, vid: vid ).first
    return unless story

    event = story.events.where( turn: turn ).first
    unless event
      event = SowTurn.new( turn: turn, story_id: story.id )
      event.attributes["_type"] = "SowTurn"
      event.save
      event = story.events.where( turn: turn ).first
    end

    ids = event.messages.only(:logid,:subid).map{|o| [o.logid, o.subid]}

    requests = Hash.new
    source.each do |o|
      logid, subid  = case fname
                      when /memo.cgi/
                      ['MM' + o.logid, 'M']
                      when /log.cgi/
                      [o.logid, o.logsubid]
                      end
      next if ids.member? [logid, subid]

      # message embedded in
      message = Message.new( logid: logid, sow_auth_id: o.uid, date: o.date, log: o.log )
      message.subid = subid
      message.face_id = o.cid
      message.csid = o.csid
      message.style = SOW_RECORD[folder][:monospace][o.monospace.to_i]
      message.mestype = SOW_RECORD[folder][:mestypes][o.mestype.to_i]
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
      event.messages << message
      key = [{ remote_ip: o.remoteaddr, fowardedfor: o.fowardedfor, user_agent: o.agent },{ sow_auth_id: o.uid }]
      requests[ key ] = true
    end
    requests.keys.each do |key| request_key, sow_auth_id = key
      account = SowAuth.where( sow_auth_id ).first || SowAuth.new( sow_auth_id )
      account.save
      request = Request.where( request_key ).first || Request.new( request_key )
      request.sow_auth_ids |= [account.id]
      request.save
    end
    event.messages.sort_by!(&:date)
    event.save

    MapReduce::MessageByStory.generate([story.id]) if story.is_finish
  end
end
