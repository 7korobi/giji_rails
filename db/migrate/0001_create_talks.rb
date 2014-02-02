class CreateTalks < ActiveRecord::Migration
  def change
    create_table :talks, id: false do |t|
      t.string :story_id, null: false
      t.string :event_id, null: false
      t.string :logid,    null: false
      t.string :mestype,  null: false
      t.time   :date,     null: false

      t.string :subid
      t.string :to
      t.string :color
      t.string :style

      t.text   :log

      t.string :name
      t.string :csid
      t.string :face_id
      t.string :sow_auth_id

      t.index :story_id
      t.index :event_id
      t.index :date
      t.index [:logid, :event_id], unique: true

    end
    execute <<-SQL
      ALTER TABLE talks
        CHANGE logid logid varchar(255) BINARY NOT NULL
    SQL
    execute <<-SQL
      ALTER TABLE talks
        ENGINE = mroonga 
        COMMENT = 'engine "innodb"' DEFAULT CHARSET utf8
    SQL
    execute <<-SQL
      ALTER TABLE talks
        ADD FULLTEXT INDEX index_talks_on_log (log)
    SQL
  end
end
