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

ActiveRecord::Schema.define(version: 20170403055904) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "client_benefits", force: :cascade do |t|
    t.string   "benefits"
    t.integer  "product_feature_id"
    t.integer  "product_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "client_tasks", force: :cascade do |t|
    t.string   "name"
    t.string   "key"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.text     "questions"
    t.text     "current_state"
    t.text     "future_state"
    t.integer  "product_feature_id"
    t.index ["key"], name: "index_client_tasks_on_key", unique: true, using: :btree
  end

  create_table "product_features", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string   "name"
    t.string   "key"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["key"], name: "index_teams_on_key", unique: true, using: :btree
  end

end
