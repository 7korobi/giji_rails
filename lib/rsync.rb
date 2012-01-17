
module Giji
  class RSync
    PROTOCOLS = %w[ftp ssh]

    def initialize
      @sh = []
      @sh_file = '/utage/giji_log_rsync'
    end

    def to_s
      @sh.join("\n")
    end

    def exec
      open(@sh_file,'w') do |f|
        f.puts to_s
      end
      puts %Q|#{@sh_file}\n O.K|
    end

    def each
      RSYNC.each do |folder, set|
        next if ( set.keys - PROTOCOLS ).size > 0
        set.each do |protocol, set|
          yield(folder, protocol, set)
        end
      end
    end

    def get protocol, set, rtype, ltype = :ldata
      rpath = set[:files][rtype]  ||  return
      lpath = set[:files][ltype]  ||  return
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

    def put protocol, set, name, ltype, rtype
      lpath = set[:files][ltype]  ||  return
      rpath = set[:files][rtype]  ||  return
      lpath += "/#{name}"
      rpath += "/#{name}"
      open, user, pass = set.values_at( * %w[open user pass] )

      puts %Q|#{lpath}\tput to #{open}:#{rpath}\n|

      case protocol
      when 'ftp'
        option = '-R --only-newer'
        excludes = %w[.svn-base .svn .bak].map do|name|
          %Q|-X #{name}|
        end.join(' ')
        @sh << %Q|lftp -u #{user},#{pass} #{open} -e 'set ftp:ssl-allow off; mirror #{option} #{excludes}  #{lpath} #{rpath}; exit' &|

      when 'ssh'
        option = '--stats'
        port  = set[:options][:port] || 22
        excludes = %w[.svn-base .svn .bak].map do|name|
          %Q|--exclude='*#{name}'|
        end.join(' ')
        @sh << %Q|rsync -e 'ssh -p #{port}' -r #{lpath} #{user}@#{open}:#{rpath} #{excludes} #{option} &|

      end
    end
  end
end

