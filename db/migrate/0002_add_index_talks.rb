class AddIndexTalks < ActiveRecord::Migration
  def change
    add_index :talks, [:story_id]
    add_index :talks, [:event_id]
    add_index :talks, [:date]
    add_index :talks, [:logid, :event_id], unique: true

    execute <<-SQL
      ALTER TABLE talks
        ADD FULLTEXT INDEX index_talks_on_log (log) COMMENT 'parser "TokenMecab"'
    SQL
  end
end
