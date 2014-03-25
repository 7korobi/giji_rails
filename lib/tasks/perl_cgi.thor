# -*- coding: utf-8 -*-

class PerlCgi < Thor
  desc "init", "push files initial to server"
  def init(folder)
    files = %w[index.html sow.cgi] + (0..9).map{|d| "sow#{d}.cgi"}
    sync_to_servers(files) do |folder, files|
      next if files['skip']
      files && files['lapp'] && files['lapp'][/testbed$/]
    end
  end

  desc "push_only", "push files to other servers"
  def push_only(*folders)
    sync_to_servers do |folder, files|
      folders.include? folder
    end

    files = %w[index.html sow.cgi] + (0..9).map{|d| "sow#{d}.cgi"}
    sync_to_servers(files) do |folder, files|
      folders.include? folder
    end
  end

  desc "push", "push files to other servers"
  def push
    sync_to_servers{|folder, files| true }
  end

  desc "cabala", "push files to cabala servers"
  def cabala
    files = %w[index.html sow.cgi]
    sync_to_servers(files) do |folder, files|
      next if files['skip']
      files && files['lapp'] && files['lapp'][/cabala$/]
    end
  end

  desc "angular", "push files to angular servers"
  def angular
    files = %w[index.html sow.cgi]
    sync_to_servers(files) do |folder, files|
      next if files['skip']
      files && files['lapp'] && files['lapp'][/angular$/]
    end
  end

  desc "test", "push files to testbed servers"
  def test
    files = %w[index.html sow.cgi]
    sync_to_servers(files) do |folder, files|
      next if files['skip']
      files && files['lapp'] && files['lapp'][/active-event$/]
    end
  end

  def sync_to_servers(files = [])
    require 'active_support/all'
    require 'fileutils'
    require 'yaml'
    require 'erubis'
    require './config/environment'
#    require '/www/giji_rails/lib/const'
#    require '/www/giji_rails/lib/rsync'


    rsync = Giji::RSync.new
    rsync.each do |folder, protocol, set|
      next unless yield(folder, set['files'])

      files.each do |fname|
        rsync.put(protocol, set, fname, :lapp, :app)
      end
      rsync.put(protocol, set, 'html/', :lapp, :app)
      rsync.put(protocol, set, 'lib/',  :lapp, :app)
      rsync.put(protocol, set, 'rs/',   :lapp, :app)
    end

    rsync.exec
  end
end

