class GijiRsyncWorker
  @queue = :giji_rsyncs
  def self.perform
    rsync = Giji::RSync.new
    rsync.each_with_servers do |folder, protocol, set|
      rsync.get(protocol, set, :config)
    end

    rsync.exec
  end

  def self.enqueue
    Resque.enqueue(self)
  end
end
