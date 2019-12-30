class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :publisher
      t.string :publishedDate
      t.integer :pageCount
    end
  end
end
