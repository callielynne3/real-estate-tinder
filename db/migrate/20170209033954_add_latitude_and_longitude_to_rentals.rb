class AddLatitudeAndLongitudeToRentals < ActiveRecord::Migration[5.0]
  def change
    add_column :rentals, :latitude, :float, :null => true
    add_column :rentals, :longitude, :float, :null => true
  end
end
