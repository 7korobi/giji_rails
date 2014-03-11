class CreateTalks < ActiveRecord::Migration
=begin
rpm -ivh http://dl.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
cd /etc/yum.repos.d/
wget http://wing-net.ddo.jp/wing/6/EL6.wing.repo
vi /etc/yum.repos.d/EL6.wing.repo
  # enabled = 1
yum clean all
yum update
yum install http://wing-repo.net/wing/6/x86_64/mysql56-mroonga-3.12-1.el6_27.wing.x86_64.rpm

# もしかしたら必要かも。
yum install aio
yum install libaio

set character_set_server = UTF8;
set character_set_database = UTF8;

grant all on *.* to 'giji'@'%';
create database giji character set utf8;
use giji

set global key_buffer_size = 64 * 1024 * 1024;
set global join_buffer_size = 1024 * 1024;
set global thread_cache_size = 32;
set global mroonga_lock_timeout = 10;
show variables like '%size';


DELETE IGNORE FROM mysql.plugin WHERE name = 'mroonga';
INSTALL PLUGIN mroonga SONAME 'ha_mroonga.so';
CREATE FUNCTION last_insert_grn_id RETURNS INTEGER SONAME 'ha_mroonga.so';
CREATE FUNCTION mroonga_snippet RETURNS STRING SONAME 'ha_mroonga.so';
CREATE FUNCTION mroonga_command RETURNS STRING SONAME 'ha_mroonga.so';

show variables like 'mroonga_%';

        talk_pans
        talk_offparties
        talk_lobbies
        talk_rps
        talk_pretenses
        talk_perjuries
        talk_xebecs
        talk_crazies
        talk_braids
        talk_ciels
        talk_wolves
        talk_ultimates
        talk_allstars
        talk_cabalas
        talk_morphes
        talk_soybeans
        talk_tests
      execute <<-SQL
        ALTER TABLE #{talks}
          CHANGE logid logid varchar(255) BINARY NOT NULL
      SQL
    # options: %q|ENGINE=mroonga DEFAULT CHARSET=utf8 COMMENT='engine "InnoDB"'|

=end

  def change
    %w[ talks
    ].each do |talks|
      create_table talks do |t|
        t.string :story_id, null: false
        t.string :event_id, null: false
        t.string :logid,    null: false
        t.string :mestype,  null: false
        t.datetime :date,   null: false

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

      add_index talks, [:story_id]
      add_index talks, [:event_id]
      add_index talks, [:date]
      add_index talks, [:logid, :event_id], unique: true
    end
  end
end
