class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :name
      t.float :unit_price
      t.string :composer
      t.float :milliseconds
      t.integer :bytes
      t.integer :album_id
      t.integer :genre_id
    end
  end
end
