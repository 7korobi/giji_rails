# -*- coding: utf-8 -*-

class SowTurn
  include SowTurnable
  store_in collection: "events"

  def update_from_file
    Giji::RSync.new.in_folder(story.folder) do |folder, protocol, set|
      vid  = story.vid
      path = set[:files][:ldata] + "/data/vil"
      turn = self.turn

      self.messages = []
      %w[log memo].each do |type|
        fname = "%04d_%02d%s.cgi"%[vid, turn, type]
        scanner = GijiLogScanner.new(path, folder, fname)
        scanner.save
      end
    end
  end

  def talk_copy
    key = { event_id: self.id }
    logid_list = OldTalk.where(key).pluck(:logid)
    logids = logid_list.group_by{|id|id}
    return if self.messages.count == logid_list.size
    self.messages.each do |message|
      next if logids[message.logid]
      logids[message.logid] = true
      attr = message.attributes.merge key
      attr.delete "_id"
      attr.delete "_type"
      begin 
        OldTalk.new(attr).save! validate: false
      rescue Mongoid::Errors::Validations => e
      rescue Moped::Errors::OperationFailure => e
        puts "#{self.id} #{message.logid} REJECT! |#{message.log}| #{e.inspect}"
      rescue RuntimeError => e
        puts "#{self.id} #{message.logid} ERROR! #{e.inspect}"
      end
    end    
  end
end
