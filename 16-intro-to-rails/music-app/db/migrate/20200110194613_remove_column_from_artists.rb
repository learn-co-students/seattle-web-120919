class RemoveColumnFromArtists < ActiveRecord::Migration[6.0]
  def change

    remove_column :artists, :age, :integer
  end
end
