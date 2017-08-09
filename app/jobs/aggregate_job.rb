class AggregateJob < ActiveJob::Base
  queue_as :giji_schedules

  def perform table
    "Aggregate::#{table}".constantize.generate
  end
end
