class Api::V1::RentalsController < Api::V1::BaseController
  def index
    respond_with Rental.all
  end

  def create
    respond_with :api, :v1, Rental.create(rental_params)
  end

  def destroy
    respond_with Rental.destroy(params[:id])
  end

  def update
    rental = Rental.find(params["id"])
    rental.update_attributes(rental_params)
    respond_with rental, json: rental
  end

  private

  def rental_params
    params.require(:rental).permit(:title, :property_type, :address, :unit, :price, :beds, :baths, :pets, :parking, :description)
  end
end