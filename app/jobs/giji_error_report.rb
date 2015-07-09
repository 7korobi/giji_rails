class GijiErrorReport
  def self.enqueue *args
    Resque.enqueue(self, args)
  end

  @queue = :z_failed
  def self.perform *args
    raise RuntimeError, args.inspect
  end
end