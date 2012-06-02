# -*- coding: utf-8 -*-

class PerlCgi < Thor
  desc "push", "push files to other server"
  def push
    require 'active_support/all'
    require 'fileutils'
    require 'yaml'
    require 'erubis'
    require '/www/giji_rails/lib/const'
    require '/www/giji_rails/lib/rsync'

    rsync = Giji::RSync.new
    rsync.each do |folder, protocol, set|
      rsync.put(protocol, set, 'html/', :lapp, :app)
      rsync.put(protocol, set, 'lib/',  :lapp, :app)
    end

    rsync.exec
  end
end

