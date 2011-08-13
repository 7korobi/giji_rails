# -*- coding: utf-8 -*-

LOG_DIR = '/www/giji_log/'

class PerlCgi < Thor
  desc "push", "push files to other server"
  def push
    require '/www/giji/config/initializers/const'
    require 'fileutils'
    require 'net/ftp'
    require 'net/sftp'
    require 'yaml'
    require 'erubis'

    SOW.each_pair do |folder,cfg|
        ftp    = cfg['ssh']
        next unless ftp
        next unless cfg['config']
        Net::SFTP.start  ftp['open'], ftp['user'], ftp['options'] do |conn|
            [:DIR_LIB, :DIR_HTML, :DIR_RS].each do |dir|
                PerlDir.push(cfg, ftp, conn, dir, :upload!, :remove)
            end
        end
        p ['Net::SFTP', folder]
    end

    SOW.each_pair do |folder,cfg|
        ftp    = cfg['ftp']
        next unless ftp
        next unless cfg['config']
        conn = Net::FTP.open  ftp['open'], ftp['user'], ftp['pass'] 
        begin 
            [:DIR_LIB, :DIR_HTML, :DIR_RS].each do |dir|
                PerlDir.push(cfg, ftp, conn, dir, :puttextfile, :delete)
            end
        ensure
            conn.close
            p ['Net::FTP', folder]
        end
    end
  end
  class PerlDir
      def self.push(cfg, ftp, conn, dir, upload_cmd, remove_cmd )
        path_src = '/www/giji_log/cabala/'
        src = SOW[:CABALA_OLD]['config']['path']
        dst = cfg['config']['path'][dir]
        Dir.glob( path_src + src[dir] + '/*.pl' ) do |outfile|
            infile = [ftp['files']['config'], dst, outfile.split('/').last].join('/')
    #       conn.send(remove_cmd, errfile )
    #       conn.send(upload_cmd, outfile, infile )
            p [upload_cmd, outfile, infile]
        end
      end
  end
end

