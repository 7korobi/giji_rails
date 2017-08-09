class RsyncJob < ActiveJob::Base
  queue_as :giji_rsyncs

  def perform
    rsync = Giji::RSync.new
    rsync.each_with_servers do |folder, protocol, set|
      rsync.get(protocol, set, :config)
    end

    rsync.exec
  end
end
