class CreateTalks < ActiveRecord::Migration
=begin

set character_set_server = UTF8;
set character_set_database = UTF8;

grant all on *.* to 'giji'@'%';
create database giji character set utf8;
use giji

DELETE IGNORE FROM mysql.plugin WHERE name = 'mroonga';
INSTALL PLUGIN mroonga SONAME 'ha_mroonga.so';
CREATE FUNCTION last_insert_grn_id RETURNS INTEGER SONAME 'ha_mroonga.so';
CREATE FUNCTION mroonga_snippet RETURNS STRING SONAME 'ha_mroonga.so';
CREATE FUNCTION mroonga_command RETURNS STRING SONAME 'ha_mroonga.so';

show variables like 'mroonga_%';

=end

  def change
    create_table :talks, options: "ENGINE=mroonga" do |t|
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
    end
    execute <<-SQL
      ALTER TABLE talks
        CHANGE logid logid varchar(255) BINARY NOT NULL
    SQL
  end
end
