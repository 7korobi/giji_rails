# -*- coding: utf-8 -*-

class SowRecordFile
  def self.account( path, fname )
    res = []
    scanner = self.new
    sow_each(path+'/'+fname) do | line |
      scanner.cgi_scan_by_line(nil,nil,nil, ["uid"],line) do |item|
        res.push item
      end
    end
    res
  end
  def self.village( path, fname, folder, vid )
    res = []
    scanner = self.new
    sow_each(path+'/'+fname) do | line |
      scanner.cgi_scan_by_line(folder,vid,nil, ["uid","makeruid"],line) do |item|
        res.push item
      end
    end
    res
  end
  def self.log( path, fname, folder, vid, turn )
    res = []
    scanner = self.new
    sow_each(path+'/'+fname) do | line | 
      scanner.cgi_scan_by_line(folder,vid,turn, ["logid"],line) do |item|
        next unless item.remoteaddr
        next unless item.agent
        next unless item.uid

        case item.mestype 
        when 1,2
          item.logsubid = 'I'
        end
        res.push item
      end
    end
    res
  end
  def self.memo( path, fname, folder, vid, turn )
    res = []
    scanner = self.new
    sow_each(path+'/'+fname) do | line | 
      scanner.cgi_scan_by_line(folder,vid,turn, ["logid"],line) do |item|
        next unless item.remoteaddr
        next unless item.agent
        next unless item.uid
        
        case item.mestype
        when 1
          item.mestype = 3
        when 2
          item.mestype = 6
        else
          # not to do.
        end
        res.push item
      end
    end
    res
  end
  
  def self.sow_each(path)
    open(path, 'r:ascii-8bit').each do | line |
      line.force_encoding('windows-31j')
      begin
        line.chomp!
        yield line
      rescue ArgumentError, Encoding::UndefinedConversionError, Encoding::InvalidByteSequenceError => e
        open('/utage/log/sow_record_file_error.txt','a:ascii-8bit').puts [e.inspect, path, line, "\n"].map{|s| s.force_encoding('ascii-8bit') }
      end
    end
  end

  def cgi_scan_by_line(folder,vid,turn, keyword, line)
    convert_val = {'_none_' => nil,'_null_' => nil}
    begin
      ary = line.split('<>').map! do |exp|
        if convert_val.has_key?(exp)
        then convert_val[exp]
        else exp
        end
      end
    end
    if keyword.index( ary[0] )
      @keys = ary.map(&:to_sym).map{|key|
        case key
        when :modifiedbsay
          :modifiedxsay
        when :cntoura
          :cntaura
        else
          key
        end
      }
      name = case @keys[0]
             when :uid
               if vid
               then 'SowRecordFileUser'
               else 'SowRecordFileAccount'
               end
             when :makeruid
               'SowRecordFileVil'
             when :logid
               'SowRecordFileLog'
             else
               'SowRecordFile'
             end
      prefix = []
      prefix.unshift :folder  if folder
      prefix.unshift :vid     if vid
      prefix.unshift :turn    if turn
      @struct = Struct.new( * ([name] + prefix + @keys) )
    elsif @keys
      item = @struct.new
      item.folder = folder if folder
      item.vid    = vid    if vid
      item.turn   = turn   if turn
      @keys.each_with_index do |key_sym,i| val = ary[i]
        key = key_sym.to_s
        if ! val
          next
        elsif [ :overhear, ].index( key_sym )
          next
        elsif [ :date,
            :updateddt,   :nextupdatedt, :nextchargedt, :nextcommitdt, :scraplimitdt,
            :entrieddt,   :limitentrydt,
            :modifiedsay, :modifiedwsay, :modifiedgsay, :modifiedspsay, :modifiedxsay, :modifiedvsay, :modifiedbsay,
            :modified,
          ].index( key_sym )
          item[key_sym] = Time.at( val.to_i )
        elsif key[/^cnt/]
          item[key_sym] = val.to_i
        elsif [
            :say,:tsay,:spsay,:wsay,:xsay,:gsay,:bsay,:psay,:esay,
            :say_act,:actaddpt,:saidcount,:saidpoint,:countinfosp,:countthink,
            :lastwritepos,
            :vote1,:vote2,:role1,:role2,:gift1,:gift2,:vote,:target,:target2,
            :gift,:role,:rolestate,:rolesubid,:selrole,:deathday,
            :mestype, :monospace,
            :commit, :draftmestype, :draftmspace, :zapcount, :clearance
          ].index( key_sym )
          item[key_sym] = val.to_i
          item[key_sym] = val.to_i - 0x10000000000000000  if  0xffffffff00000000 < val.to_i 
        else
          item[key_sym] = (val.to_s.encode('UTF-8')  rescue  '- invisible text -')
        end
      end
      begin
        yield item
      end
    end
  end
end

