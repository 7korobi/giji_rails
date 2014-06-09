class GijiScheduler
  @queue = :giji_schedules
  def self.perform type
    case type.to_sym
    when :vil
      GijiRsyncWorker.perform
      GijiVilScanner.save

    when :log
      GijiLogScanner.save

    end
  end

  def self.set_pno
    story_ids = SowUser.where(pno:nil).map_reduce(:story_id).group_by{|o|o[:story_id]}.keys
    story_ids.each do |story_id|
      next unless story_id
      src = SowVillage.find(story_id).source rescue nil
      next unless src

      src.select{|o| Struct::SowRecordFileUser == o.class }.each_with_index do |o,i|
        potof = SowUser.where(sow_auth_id: o.uid, story_id: story_id).first
        potof.pno = i
        potof.save
      end
    end
  end
end
