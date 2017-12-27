class BackupJob < ActiveJob::Base
  queue_as :giji_schedules

  def perform(mode)
  	good_data = `/usr/bin/mongo --host 192.168.0.200 < /www/giji-rails/config/validate.js`["true"]
  	if good_data
      `/usr/bin/mongodump --forceTableScan --host 192.168.0.200 -d giji  -o /home/7korobi/data/mongo/`
      `/usr/bin/mongodump --forceTableScan --host 192.168.0.200 -d admin -o /home/7korobi/data/mongo/`
  	end
    `rsync -r /home/7korobi/data/mongo vm-7korobi@backup:/c/backup/giji/.`
  end
end
