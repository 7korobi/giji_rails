class AddIndexTalks < ActiveRecord::Migration
  def change
=begin
    execute <<-SQL
      ALTER TABLE talks
        ADD FULLTEXT INDEX index_talks_on_log (log) COMMENT 'parser "TokenMecab"'
    SQL
=end
  end
end
