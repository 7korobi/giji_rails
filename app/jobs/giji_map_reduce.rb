class GijiMapReduce
  @queue = :giji_schedules
  def self.perform table
    "MapReduce::#{table}".constantize.generate
  end
end