# -*- coding: utf-8 -*-

class PerlCgi < Thor
  desc "push", "push files to other servers"
  def push
    sync_to_servers do |set|
      true
    end
  end

  desc "test", "push files for testbed servers"
  def test
    sync_to_servers do |set|
      set['files'] && set['files']['lapp'] && set['files']['lapp']["testbed"]
    end
  end

  def sync_to_servers
    require 'active_support/all'
    require 'fileutils'
    require 'yaml'
    require 'erubis'
    require '/www/giji_rails/lib/const'
    require '/www/giji_rails/lib/rsync'

    rsync = Giji::RSync.new
    rsync.each do |folder, protocol, set|
      next unless yield(set)
      rsync.put(protocol, set, 'html/', :lapp, :app)
      rsync.put(protocol, set, 'lib/',  :lapp, :app)
    end

    rsync.exec
  end
end

