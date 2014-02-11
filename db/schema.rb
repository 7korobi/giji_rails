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

ActiveRecord::Schema.define(version: 2) do

  create_table "talks", force: true do |t|
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

  add_index "talks", ["date"], name: "index_talks_on_date", using: :btree
  add_index "talks", ["event_id"], name: "index_talks_on_event_id", using: :btree
  add_index "talks", ["logid", "event_id"], name: "index_talks_on_logid_and_event_id", unique: true, using: :btree
  add_index "talks", ["story_id"], name: "index_talks_on_story_id", using: :btree

end
