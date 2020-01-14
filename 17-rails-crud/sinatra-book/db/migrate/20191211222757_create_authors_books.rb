class CreateAuthorsBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :authors_books do |t|
      t.integer :author_id
      t.integer :book_id
    end

    create_table :authors do |t|
      t.string :name
    end
  end
end
