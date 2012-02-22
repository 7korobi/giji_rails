class GijiLogScheduler
  @queue = :giji_schedules
  def self.perform
    GijiLogScanner.save
  end
end