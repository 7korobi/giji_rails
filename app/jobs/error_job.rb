class ErrorJob < ActiveJob::Base
  queue_as :z_failed

  def perform(*args)
    raise RuntimeError, args.inspect
  end
end
