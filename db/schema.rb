# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 6) do

  create_table "talk_allstars", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_allstars", ["date"], name: "index_talk_allstars_on_date", using: :btree
  add_index "talk_allstars", ["event_id"], name: "index_talk_allstars_on_event_id", using: :btree
  add_index "talk_allstars", ["logid", "event_id"], name: "index_talk_allstars_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_allstars", ["story_id"], name: "index_talk_allstars_on_story_id", using: :btree

  create_table "talk_braids", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_braids", ["date"], name: "index_talk_braids_on_date", using: :btree
  add_index "talk_braids", ["event_id"], name: "index_talk_braids_on_event_id", using: :btree
  add_index "talk_braids", ["logid", "event_id"], name: "index_talk_braids_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_braids", ["story_id"], name: "index_talk_braids_on_story_id", using: :btree

  create_table "talk_cabala001s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala001s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala001s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala001s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala001s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala002s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala002s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala002s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala002s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala002s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala003s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala003s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala003s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala003s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala003s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala004s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala004s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala004s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala004s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala004s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala005s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala005s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala005s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala005s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala005s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala006s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala006s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala006s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala006s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala006s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala007s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala007s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala007s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala007s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala007s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala008s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala008s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala008s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala008s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala008s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala009s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala009s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala009s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala009s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala009s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala010s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala010s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala010s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala010s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala010s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala011s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala011s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala011s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala011s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala011s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala012s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala012s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala012s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala012s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala012s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala013s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala013s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala013s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala013s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala013s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala014s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala014s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala014s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala014s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala014s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala015s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala015s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala015s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala015s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala015s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala016s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala016s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala016s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala016s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala016s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala017s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala017s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala017s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala017s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala017s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala018s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala018s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala018s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala018s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala018s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala019s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala019s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala019s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala019s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala019s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala020s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala020s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala020s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala020s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala020s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala021s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala021s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala021s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala021s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala021s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala022s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala022s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala022s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala022s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala022s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala023s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala023s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala023s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala023s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala023s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala024s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala024s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala024s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala024s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala024s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala025s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala025s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala025s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala025s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala025s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala026s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala026s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala026s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala026s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala026s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala027s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala027s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala027s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala027s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala027s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala028s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala028s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala028s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala028s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala028s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala029s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala029s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala029s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala029s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala029s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala030s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala030s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala030s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala030s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala030s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala031s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala031s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala031s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala031s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala031s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala032s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala032s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala032s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala032s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala032s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala033s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala033s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala033s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala033s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala033s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala034s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala034s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala034s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala034s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala034s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala035s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala035s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala035s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala035s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala035s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala036s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala036s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala036s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala036s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala036s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala037s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala037s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala037s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala037s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala037s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala038s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala038s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala038s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala038s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala038s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala039s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala039s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala039s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala039s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala039s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala040s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala040s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala040s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala040s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala040s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala041s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala041s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala041s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala041s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala041s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala042s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala042s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala042s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala042s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala042s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala043s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala043s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala043s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala043s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala043s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala044s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala044s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala044s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala044s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala044s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala045s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala045s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala045s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala045s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala045s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala046s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala046s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala046s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala046s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala046s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala047s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala047s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala047s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala047s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala047s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala048s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala048s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala048s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala048s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala048s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala049s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala049s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala049s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala049s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala049s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala050s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala050s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala050s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala050s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala050s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala051s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala051s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala051s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala051s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala051s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala052s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala052s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala052s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala052s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala052s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala053s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala053s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala053s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala053s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala053s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala054s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala054s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala054s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala054s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala054s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala055s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala055s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala055s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala055s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala055s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala056s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala056s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala056s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala056s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala056s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala057s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala057s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala057s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala057s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala057s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala058s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala058s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala058s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala058s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala058s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala059s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala059s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala059s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala059s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala059s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala060s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala060s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala060s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala060s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala060s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala061s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala061s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala061s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala061s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala061s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala062s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala062s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala062s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala062s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala062s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala063s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala063s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala063s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala063s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala063s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala064s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala064s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala064s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala064s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala064s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala065s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala065s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala065s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala065s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala065s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala066s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala066s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala066s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala066s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala066s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala067s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala067s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala067s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala067s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala067s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala068s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala068s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala068s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala068s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala068s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala069s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala069s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala069s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala069s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala069s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala070s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala070s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala070s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala070s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala070s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala071s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala071s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala071s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala071s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala071s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala072s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala072s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala072s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala072s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala072s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala073s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala073s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala073s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala073s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala073s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala074s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala074s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala074s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala074s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala074s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala075s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala075s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala075s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala075s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala075s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala076s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala076s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala076s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala076s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala076s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala077s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala077s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala077s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala077s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala077s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala078s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala078s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala078s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala078s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala078s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala079s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala079s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala079s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala079s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala079s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala080s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala080s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala080s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala080s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala080s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala081s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala081s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala081s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala081s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala081s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala082s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala082s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala082s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala082s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala082s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala083s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala083s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala083s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala083s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala083s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala084s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala084s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala084s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala084s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala084s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala085s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala085s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala085s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala085s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala085s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala086s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala086s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala086s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala086s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala086s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala087s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala087s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala087s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala087s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala087s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala088s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala088s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala088s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala088s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala088s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala089s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala089s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala089s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala089s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala089s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala090s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala090s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala090s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala090s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala090s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala091s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala091s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala091s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala091s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala091s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala092s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala092s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala092s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala092s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala092s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala093s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala093s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala093s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala093s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala093s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala094s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala094s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala094s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala094s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala094s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala095s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala095s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala095s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala095s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala095s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala096s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala096s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala096s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala096s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala096s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala097s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala097s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala097s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala097s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala097s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala098s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala098s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala098s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala098s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala098s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala099s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala099s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala099s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala099s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala099s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala100s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala100s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala100s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala100s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala100s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala101s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala101s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala101s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala101s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala101s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala102s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala102s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala102s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala102s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala102s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala103s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala103s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala103s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala103s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala103s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala104s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala104s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala104s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala104s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala104s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala105s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala105s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala105s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala105s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala105s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala106s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala106s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala106s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala106s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala106s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala107s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala107s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala107s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala107s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala107s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala108s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala108s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala108s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala108s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala108s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala109s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala109s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala109s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala109s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala109s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala110s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala110s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala110s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala110s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala110s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala111s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala111s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala111s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala111s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala111s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala112s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala112s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala112s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala112s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala112s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala113s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala113s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala113s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala113s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala113s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala114s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala114s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala114s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala114s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala114s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala115s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala115s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala115s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala115s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala115s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala116s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala116s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala116s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala116s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala116s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala117s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala117s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala117s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala117s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala117s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala118s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala118s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala118s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala118s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala118s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala119s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala119s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala119s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala119s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala119s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala120s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala120s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala120s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala120s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala120s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala121s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala121s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala121s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala121s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala121s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala122s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala122s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala122s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala122s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala122s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala123s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala123s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala123s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala123s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala123s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala124s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala124s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala124s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala124s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala124s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala125s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala125s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala125s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala125s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala125s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala126s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala126s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala126s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala126s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala126s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala127s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala127s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala127s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala127s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala127s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala128s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala128s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala128s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala128s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala128s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala129s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala129s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala129s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala129s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala129s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala130s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala130s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala130s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala130s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala130s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala131s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala131s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala131s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala131s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala131s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala132s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala132s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala132s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala132s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala132s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala133s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala133s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala133s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala133s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala133s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala134s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala134s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala134s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala134s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala134s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala135s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala135s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala135s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala135s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala135s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala136s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala136s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala136s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala136s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala136s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala137s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala137s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala137s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala137s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala137s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala138s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala138s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala138s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala138s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala138s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala139s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala139s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala139s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala139s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala139s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala140s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala140s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala140s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala140s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala140s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala141s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala141s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala141s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala141s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala141s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala142s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala142s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala142s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala142s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala142s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala143s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala143s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala143s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala143s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala143s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala144s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala144s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala144s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala144s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala144s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala145s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala145s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala145s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala145s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala145s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala146s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala146s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala146s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala146s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala146s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala147s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala147s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala147s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala147s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala147s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala148s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala148s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala148s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala148s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala148s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala149s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala149s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala149s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala149s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala149s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala150s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala150s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala150s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala150s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala150s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala151s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala151s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala151s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala151s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala151s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala152s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala152s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala152s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala152s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala152s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala153s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala153s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala153s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala153s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala153s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala154s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala154s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala154s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala154s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala154s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala155s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala155s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala155s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala155s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala155s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala156s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala156s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala156s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala156s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala156s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala157s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala157s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala157s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala157s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala157s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala158s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala158s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala158s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala158s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala158s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala159s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala159s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala159s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala159s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala159s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala160s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala160s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala160s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala160s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala160s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala161s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala161s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala161s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala161s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala161s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala162s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala162s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala162s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala162s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala162s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala163s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala163s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala163s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala163s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala163s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala164s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala164s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala164s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala164s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala164s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala165s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala165s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala165s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala165s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala165s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala166s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala166s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala166s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala166s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala166s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala167s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala167s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala167s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala167s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala167s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala168s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala168s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala168s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala168s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala168s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala169s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala169s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala169s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala169s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala169s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala170s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala170s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala170s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala170s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala170s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala171s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala171s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala171s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala171s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala171s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala172s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala172s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala172s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala172s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala172s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala173s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala173s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala173s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala173s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala173s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala174s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala174s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala174s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala174s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala174s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala175s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala175s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala175s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala175s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala175s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala176s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala176s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala176s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala176s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala176s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala177s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala177s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala177s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala177s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala177s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala178s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala178s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala178s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala178s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala178s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala179s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala179s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala179s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala179s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala179s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala180s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala180s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala180s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala180s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala180s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala181s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala181s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala181s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala181s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala181s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala182s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala182s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala182s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala182s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala182s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala183s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala183s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala183s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala183s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala183s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala184s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala184s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala184s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala184s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala184s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala185s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala185s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala185s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala185s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala185s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala186s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala186s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala186s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala186s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala186s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala187s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala187s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala187s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala187s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala187s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala188s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala188s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala188s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala188s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala188s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala189s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala189s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala189s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala189s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala189s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala190s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala190s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala190s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala190s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala190s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala191s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala191s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala191s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala191s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala191s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala192s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala192s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala192s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala192s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala192s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala193s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala193s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala193s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala193s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala193s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala194s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala194s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala194s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala194s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala194s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala195s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala195s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala195s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala195s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala195s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala196s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala196s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala196s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala196s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala196s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala197s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala197s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala197s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala197s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala197s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala198s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala198s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala198s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala198s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala198s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala199s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala199s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala199s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala199s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala199s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala200s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala200s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala200s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala200s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala200s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala201s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala201s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala201s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala201s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala201s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala202s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala202s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala202s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala202s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala202s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala203s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala203s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala203s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala203s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala203s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala204s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala204s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala204s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala204s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala204s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala205s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala205s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala205s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala205s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala205s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala206s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala206s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala206s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala206s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala206s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala207s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala207s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala207s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala207s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala207s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala208s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala208s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala208s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala208s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala208s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala209s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala209s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala209s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala209s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala209s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala210s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala210s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala210s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala210s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala210s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala211s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala211s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala211s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala211s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala211s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala212s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala212s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala212s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala212s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala212s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala213s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala213s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala213s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala213s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala213s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala214s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala214s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala214s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala214s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala214s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala215s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala215s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala215s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala215s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala215s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala216s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala216s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala216s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala216s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala216s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala217s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala217s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala217s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala217s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala217s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala218s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala218s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala218s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala218s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala218s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala219s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala219s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala219s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala219s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala219s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala220s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala220s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala220s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala220s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala220s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala221s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala221s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala221s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala221s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala221s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala222s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala222s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala222s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala222s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala222s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala223s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala223s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala223s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala223s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala223s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala224s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala224s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala224s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala224s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala224s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala225s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala225s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala225s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala225s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala225s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala226s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala226s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala226s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala226s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala226s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala227s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala227s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala227s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala227s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala227s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala228s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala228s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala228s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala228s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala228s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala229s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala229s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala229s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala229s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala229s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala230s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala230s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala230s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala230s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala230s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala231s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala231s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala231s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala231s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala231s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala232s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala232s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala232s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala232s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala232s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala233s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala233s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala233s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala233s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala233s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala234s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala234s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala234s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala234s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala234s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala235s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala235s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala235s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala235s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala235s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala236s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala236s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala236s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala236s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala236s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala237s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala237s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala237s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala237s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala237s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabala238s", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabala238s", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabala238s", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabala238s", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabala238s", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_cabalas", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_cabalas", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talk_cabalas", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talk_cabalas", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_cabalas", ["story_id"], name: "index_talks_on_story_id", using: :btree

  create_table "talk_ciels", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_ciels", ["date"], name: "index_talk_ciels_on_date", using: :btree
  add_index "talk_ciels", ["event_id"], name: "index_talk_ciels_on_event_id", using: :btree
  add_index "talk_ciels", ["logid", "event_id"], name: "index_talk_ciels_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_ciels", ["story_id"], name: "index_talk_ciels_on_story_id", using: :btree

  create_table "talk_crazies", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_crazies", ["date"], name: "index_talk_crazies_on_date", using: :btree
  add_index "talk_crazies", ["event_id"], name: "index_talk_crazies_on_event_id", using: :btree
  add_index "talk_crazies", ["logid", "event_id"], name: "index_talk_crazies_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_crazies", ["story_id"], name: "index_talk_crazies_on_story_id", using: :btree

  create_table "talk_lobbies", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_lobbies", ["date"], name: "index_talk_lobbies_on_date", using: :btree
  add_index "talk_lobbies", ["event_id"], name: "index_talk_lobbies_on_event_id", using: :btree
  add_index "talk_lobbies", ["logid", "event_id"], name: "index_talk_lobbies_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_lobbies", ["story_id"], name: "index_talk_lobbies_on_story_id", using: :btree

  create_table "talk_morphes", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_morphes", ["date"], name: "index_talk_morphes_on_date", using: :btree
  add_index "talk_morphes", ["event_id"], name: "index_talk_morphes_on_event_id", using: :btree
  add_index "talk_morphes", ["logid", "event_id"], name: "index_talk_morphes_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_morphes", ["story_id"], name: "index_talk_morphes_on_story_id", using: :btree

  create_table "talk_offparties", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_offparties", ["date"], name: "index_talk_offparties_on_date", using: :btree
  add_index "talk_offparties", ["event_id"], name: "index_talk_offparties_on_event_id", using: :btree
  add_index "talk_offparties", ["logid", "event_id"], name: "index_talk_offparties_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_offparties", ["story_id"], name: "index_talk_offparties_on_story_id", using: :btree

  create_table "talk_pans", force: true do |t|
    t.string   "story_id",    null: false
    t.string   "event_id",    null: false
    t.string   "logid",       null: false
    t.string   "mestype",     null: false
    t.datetime "date",        null: false
    t.string   "subid"
    t.string   "to"
    t.string   "color"
    t.string   "style"
    t.text     "log"
    t.string   "name"
    t.string   "csid"
    t.string   "face_id"
    t.string   "sow_auth_id"
  end

  add_index "talk_pans", ["date"], name: "index_talk_pans_on_date", using: :btree
  add_index "talk_pans", ["event_id"], name: "index_talk_pans_on_event_id", using: :btree
  add_index "talk_pans", ["logid", "event_id"], name: "index_talk_pans_on_logid_and_event_id", unique: true, using: :btree
  add_index "talk_pans", ["story_id"], name: "index_talk_pans_on_story_id", using: :btree

