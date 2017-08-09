class MapReduceJob < ActiveJob::Base
  queue_as :giji_schedules

  def perform table
    "MapReduce::#{table}".constantize.generate
  end
end
