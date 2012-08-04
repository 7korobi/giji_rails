# -*- coding: utf-8 -*-

class PerlCgi < Thor
  desc "push", "push files to other servers"
  def push
    sync_to_servers{|files| true }
  end

  desc "test", "push files to testbed servers"
  def test
    sync_to_servers do |files|
      files && files['lapp'] && files['lapp'][/testbed$/]
    end
  end

  def sync_to_servers
    require 'active_support/all'
    require 'fileutils'
    require 'yaml'
    require 'erubis'
    require '/www/giji_rails/lib/const'
    require '/www/giji_rails/lib/rsync'

    files = %w[index.html sow.cgi] + (0..9).map{|d| "sow#{d}.cgi"}

    rsync = Giji::RSync.new
    rsync.each do |folder, protocol, set|
      next unless yield(set['files'])

      files.each do |fname|
        rsync.put(protocol, set, fname, :lapp, :app)
      end
      rsync.put(protocol, set, 'html/', :lapp, :app)
      rsync.put(protocol, set, 'lib/',  :lapp, :app)
    end

    rsync.exec
  end
end

