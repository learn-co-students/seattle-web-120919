class CreatePurchases < ActiveRecord::Migration[5.2]
  def change
    create_table :purchases do |t|
      t.string :customer_name
      t.float :price
      t.integer :brew_id

      t.timestamps
    end
  end
end
