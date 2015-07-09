class Echo
  @queue = :default

  def self.perform text
  	sleep 3
  	path = File.expand_path('log/echo.log', Rails.root)
  	File.open(path, 'a') do |f|
  		f.puts "Hello #{text}!"
  	end
  end
end
