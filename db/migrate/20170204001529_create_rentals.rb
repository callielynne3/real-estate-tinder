class CreateRentals < ActiveRecord::Migration[5.0]
  def change
    create_table :rentals do |t|
      t.references :user, foreign_key: true
      t.string :title
      t.string :property_type
      t.string :address
      t.string :unit
      t.integer :price
      t.integer :beds
      t.integer :baths
      t.boolean :pets
      t.string :parking
      t.text :description

      t.timestamps
    end
  end
end
