ActiveRecord::Schema.define(version: 2019_12_19_224738) do

  create_table "brews", force: :cascade do |t|
    t.string "blend_name"
    t.string "origin"
    t.string "notes"
    t.integer "strength"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "purchases", force: :cascade do |t|
    t.string "customer_name"
    t.float "price"
    t.integer "brew_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
