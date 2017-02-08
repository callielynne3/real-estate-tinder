class AddPicturesToRentals < ActiveRecord::Migration[5.0]
  def change
    add_column :rentals, :pictures, :json, :null => true
  end
end
