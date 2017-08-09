class BackupJob < ActiveJob::Base
  queue_as :giji_schedules

  def perform(mode)
  	good_data = `/usr/bin/mongo --host mongo.family.jp < /utage/mongo/validate.js`["true"]
  	if good_data
      `/usr/bin/mongodump --forceTableScan --host mongo.family.jp -d giji  -o /data/mongo/`
      `/usr/bin/mongodump --forceTableScan --host mongo.family.jp -d admin -o /data/mongo/`
  	end
    `rsync -r /data/mongo vm-7korobi@backup:/c/backup/giji/.`
    `rsync -r /www        vm-7korobi@backup:/c/backup/giji/.`
  end
end
