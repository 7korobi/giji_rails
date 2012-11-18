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

    when :clean
      errors = Potof.where(story_id: /......................../ ).count
      begin
        raise RuntimeError.new("#{errors} record has illegal story id") if 0 < errors
      rescue RuntimeError => e
        Potof.where(story_id: /......................../ ).delete
        raise e
      end
    end
  end

  def self.set_pno
    story_ids = SowUser.where(pno:nil).map_reduce(:story_id).group_by{|o|o[:story_id]}.keys
    story_ids.each do |story_id|
      next unless story_id
      src = SowVillage.find(story_id).source rescue nil
      next unless src

      p story_id
      src.select{|o| Struct::SowRecordFileUser == o.class }.each_with_index do |o,i|
        potof = SowUser.where(sow_auth_id: o.uid, story_id: story_id).first
        potof.pno = i
        potof.save
      end
    end
  end
end
