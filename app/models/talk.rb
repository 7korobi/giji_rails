# -*- coding: utf-8 -*-

class Talk < ActiveRecord::Base
  self.primary_keys = :event_id, :logid

  # validates_presence_of :date
  # validates_uniqueness_of :logid, scope: :event_id

  scope :summary, ->{ order(:date.asc) }
  scope :search_with, ->(query) { where(%Q|match(log) against("#{query}" with query expansion)|) }
  scope :search, ->(query) { where(%Q|match(log) against("#{query}" in boolean mode)|) }

  def self.copy_from_file
    rsync = Giji::RSync.new
    rsync.each_logs([]) do |folder, vid, turn, path, fname|
      GijiTalkScanner.new(path, folder, fname).enqueue :log
    end
    rsync.each_memos([]) do |folder, vid, turn, path, fname|
      GijiTalkScanner.new(path, folder, fname).enqueue :memo
    end
  end
end

=begin
  store_in collection: "talks", database: "talks"

  field :color
  field :style
  field :subid
  field :mestype
  field :sow_auth_id


  def self.skip_stories
    %w[
      cabala-118
      cabala-231
      crazy-17
      crazy-69
      morphe-1
      perjury-98
      perjury-116
      wolf-211
      xebec-3
      wolf-41
      allstar-68
      allstar-89
      allstar-93
      allstar-95
      allstar-101
      crazy-57
      crazy-58
      cabala-135
      cabala-187
      cabala-231
      perjury-19
      perjury-36
      perjury-40
      perjury-63
      ultimate-72
      xebec-18
      xebec-78
      wolf-211
    ]
  end

  def self.skip_events(folder = Event)
    skip_stories.map do |story_id|
      folder.where(story_id: story_id).pluck(:id)
    end.flatten.uniq
  end

  def self.listup_event_ids(folder = Event)
    folder.all.pluck(:id) - skip_events(folder)
  end

  def self.copy_from_messages(folder = Event, events = listup_event_ids)
    events.dup.each do |event_id|
      event = folder.find(event_id)
      begin
        event.talk_copy
        events.shift
      rescue NoMethodError => e
        puts "#{event_id} SKIP! #{e.inspect}"
        events.shift
      rescue RuntimeError => e
        puts "#{event_id} ERROR! #{e.inspect}"
      rescue Exception => e
        puts "#{event_id} REJECT! #{e.inspect}"
        raise e
      end
    end
  end
=end

