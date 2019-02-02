
module Giji
  class RSync
    def initialize
      @sh = []
      @sh_file = '/utage/giji_log_rsync'
    end

    def to_s
      @sh.join(" &\n")
    end

    def to_file
      open(@sh_file,'w') do |f|
        f.puts to_s
      end
      puts %Q|#{@sh_file}\n O.K|
    end

    def exec
      # puts @sh
      # return
      @sh.map do |cmd|
        Thread.start(cmd){|command| system command }
      end.each do |th|
        th.join
      end
      puts @sh
    end

    def each_logs target = ['none'], &block
      each_files target, "/data/vil/????_??log.cgi", /(\d\d\d\d)_(\d\d)log.cgi/, &block
    end

    def each_memos target = ['none'], &block
      each_files target, "/data/vil/????_??memo.cgi", /(\d\d\d\d)_(\d\d)memo.cgi/, &block
    end

    def each_villages target = ['none'], &block
      each_files target, "/data/vil/*_vil.cgi", /(\d\d\d\d)_vil.cgi/, &block
    end

    def each_files target = ['none'], glob, regexp, &block
      each(*target) do |folder,_,set|
        path = set[:files][:ldata] + '/data/vil'
        fnames = Dir.glob(set[:files][:ldata] + glob)
        fnames.each do |fullpath_fname|
          next  if  0 == File.size(fullpath_fname)
          match = regexp.match(fullpath_fname)
          if match
            turn  = match[2].to_i
            vid   = match[1].to_i
            fname = match[0]

            yield(folder, vid, turn, path, fname)
          end
        end
      end
    end

    def each_with_servers &block
      each 'none', &block
    end

    def each_locals &block
      each &block
    end

    def in_folder(folder, *deny_protocols)
      return unless RSYNC[folder]
      RSYNC[folder].each do |protocol, set|
        next if protocol == 'keys'
        next if deny_protocols.member? protocol
        begin
          yield(folder, protocol, set)
        end
      end
    end

    def each(*deny_protocols, &block)
      RSYNC.each do |folder, set|
        in_folder(folder, *deny_protocols, &block)
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
        @sh << %Q|lftp -u #{user},#{pass} #{open} -e 'set ftp:ssl-allow off; mirror #{option} #{excludes}  #{rpath}/ #{lpath}/; exit'|

      when 'ssh'
        option = '-t'
        port  = set[:options][:port] || 22
        excludes = %w[.svn-base .svn .bak].map do|name|
          %Q|--exclude='*#{name}'|
        end.join(' ')
        @sh << %Q|rsync -e 'ssh -p #{port}' -r #{user}@#{open}:#{rpath}/ #{lpath}/ #{excludes} #{option}|

      end
    end

    def put protocol, set, name, ltype, rtype
      lpath = set[:files][ltype]  ||  return
      rpath = set[:files][rtype]  ||  return
      lpath += "/#{name}"
      rpath += "/#{name}"
      open, user, pass = set.values_at( * %w[open user pass] )

      case protocol
      when 'ftp'
        puts %Q|#{lpath}\tput to #{open}:#{rpath}\n|

        option = '-R'
        excludes = %w[.svn-base .svn .bak].map do|name|
          %Q|-X #{name}|
        end.join(' ')
        cmd = %Q|put #{lpath} -o #{rpath}|                        if FileTest.file?      lpath
        cmd = %Q|mirror #{option} #{excludes}  #{lpath} #{rpath}| if FileTest.directory? lpath
        line = %Q|lftp -u #{user},#{pass} #{open} -e 'set ftp:ssl-allow off; #{cmd}; exit'|
        @sh << line

      when 'ssh'
        puts %Q|#{lpath}\tput to #{open}:#{rpath}\n|

        option = ''
        port  = set[:options][:port] || 22
        excludes = %w[.svn-base .svn .bak].map do|name|
          %Q|--exclude='*#{name}'|
        end.join(' ')
        line = %Q|rsync -e 'ssh -p #{port}' -r #{lpath} #{user}@#{open}:#{rpath} #{excludes} #{option}|
        @sh << line

      end
    end
  end
end

