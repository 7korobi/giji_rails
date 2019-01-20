# -*- coding: utf-8 -*-

class Message
  include Faceable
  field :_id, default: ->{ [event_id, logid].join("-") }
  field :logid
  field :to
  field :log
  field :style
  field :date, type: Time

  field :size, type: Integer
  field :color
  field :style
  field :subid
  field :mestype
  field :sow_auth_id

  index date: 1

  belongs_to :potof, inverse_of: :messages, index: true, optional: true
  belongs_to :story, inverse_of: :chats,    index: true, optional: true
  belongs_to :event, inverse_of: :chats,    index: true, optional: true

  def self.by_event_id(event_id)
    yaml_path = "/www/giji_yaml/events/#{event_id}.yml"
    YAML.load_file(yaml_path).map{|attr| new(attr)} rescue []
  end

  def self.by_story_id(story_id)
    Event.where(story_id: story_id).map(&:id).map do |event_id|
      yaml_path = "/www/giji_yaml/events/#{event_id}.yml"
      YAML.load_file(yaml_path).map{|attr| new(attr)} rescue []
    end.flatten
  end

  def self.in_story(story_id)
    where(story_id: story_id).order_by(:date.asc)
  end
  def self.in_event(event_id)
    where(event_id: event_id).order_by(:date.asc)
  end

  def self.job_drive(folder,vid,turn,path,fname)
    story = SowVillage.where( folder: folder, vid: vid ).first
    return unless story

    case fname
    when /log.cgi/
      ScanLogJob.perform_later path, fname, "log", folder, vid, turn
    when /memo.cgi/
      ScanLogJob.perform_later path, fname, "memo", folder, vid, turn
    else
    end
  end

  def self.copy_from_file
    rsync = Giji::RSync.new
    rsync.each_logs([]) do |folder, vid, turn, path, fname|
      job_drive(folder, vid, turn, path, fname)
    end
    rsync.each_memos([]) do |folder, vid, turn, path, fname|
      job_drive(folder, vid, turn, path, fname)
    end
  end
end
