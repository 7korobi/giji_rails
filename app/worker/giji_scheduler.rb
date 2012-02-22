class GijiScheduler
  @queue = :giji_schedules
  def self.perform
    GijiRsyncWorker.perform
    GijiVilScanner.save
  end
end