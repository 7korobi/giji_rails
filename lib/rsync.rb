require '/www/giji/config/initializers/const'

module Giji
  class RSync
    PROTOCOLS = %w[ftp ssh]

    def initialize
      @sh = []
    end

    def to_s
      @sh.join("\n")
    end

    def exec
      %x|#{to_s}|
    end

    def each
      RSYNC.each do |folder, set|
        next if ( set.keys - PROTOCOLS ).size > 0
        set.each do |protocol, set|
          yield(folder, protocol, set)
        end
      end
    end

    def get protocol, set
      rpath = set[:files][:config]
      lpath = set[:files][:ldata]
      open, user, pass = set.values_at( * %w[open user pass] )

      puts %Q|#{open}:#{rpath}\tsync to #{lpath}\n|

      %x|mkdir -p #{lpath}|

      case protocol
      when 'ftp'
        option = '--only-newer'
        excludes = %w[.svn-base .svn .bak].map do|name|
          %Q|-X #{name}|
        end.join(' ')
        @sh << %Q|lftp -u #{user},#{pass} #{open} -e 'set ftp:ssl-allow off; mirror #{option} #{excludes}  #{rpath}/ #{lpath}/; exit' &|

      when 'ssh'
        option = '--stats'
        port  = set[:options][:port] || 22
        excludes = %w[.svn-base .svn .bak].map do|name|
          %Q|--exclude='*#{name}'|
        end.join(' ')
        @sh << %Q|rsync -e 'ssh -p #{port}' -r #{user}@#{open}:#{rpath}/ #{lpath}/ #{excludes} #{option} &|

      end
    end

    def put protocol, set, file_out
      rpath = set[:files][:config]
      open, user, pass = set.values_at( * %w[open user pass] )

      puts %Q|#{file_out}\tput to #{open}:#{rpath}\n|

      case protocol
      when 'ftp'
        @sh << %Q|lftp -u #{user},#{pass} #{open} -e 'set ftp:ssl-allow off;cd #{rpath}/; put #{file_out}; exit' &|

      when 'ssh'
        port  = set[:options][:port] || 22
        @sh << %Q|scp -P #{port} #{file_out} #{user}@#{open}:#{rpath}/ &|

      end
    end
  end
end

