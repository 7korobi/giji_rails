# -*- coding: utf-8 -*-

class SowTurn < Event
  include Giji
  field :winner
  field :event

  field :grudge,    type:Integer
  field :riot,      type:Integer
  field :scapegoat, type:Integer
  field :epilogue,  type:Integer
  field :eclipse,   type:Array
  field :seance,    type:Array

  field :say, type:Hash

  def name
    self[:name] || "#{turn}日目"
  end

  def update_from_file
    Giji::RSync.new.in_folder(story.folder) do |folder, protocol, set|
      vid  = story.vid
      path = set[:files][:ldata] + "/data/vil"
      turn = self.turn

      self.messages = []
      %w[log memo].each do |type|
        fname = "%04d_%02d%s.cgi"%[vid, turn, type]
        scanner = GijiLogScanner.new(path, folder, fname)
        p scanner
        scanner.save
      end
    end
  end

  def self.empty_ids
    messages_empty.pluck("id")
  end

  def self.messages_empty
    exists(messages:false).not(_id: /^(trpg|lobby-8)/)
  end

  def self.breaks_each
    each do |o| 
      next if Array === o.attributes['messages']
      yield(o)
    end
  end
end
