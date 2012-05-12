class GijiScheduler
  @queue = :giji_schedules
  def self.perform type
    case type.to_sym
    when :git
      system <<-_SH_
        cd /www/giji_log
        git add .
        git commit -a -m "regular collection"
      _SH_
    when :vil
      GijiRsyncWorker.perform
      GijiVilScanner.save

    when :log
      GijiLogScanner.save

    end
  end
end