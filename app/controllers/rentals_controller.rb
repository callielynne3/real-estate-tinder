#this controller describes actions for rentals
#posted AND queried by user

class RentalsController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :authenticate_user!, only: [:show]
  skip_before_filter  :verify_authenticity_token

  def my_votes
    @user = current_user
    # array of vote.rental_ids where the votes are "likes" (positive votes)
    @rental_ids = @user.votes.where(vote: 1).pluck(:rental_id)

    @rentals = []

    @rental_ids.each do |rental_id|
      @rentals << Rental.find(rental_id)
    end

    @rentals
  end

	def my_rentals
    @user = current_user
    @rentals = @user.rentals
	end

  #user gets form to post a rental
  def new

  end

  #user posts a rental
  def create
    @rentor = current_user
    @rental = @rentor.rentals.new(rental_params)

    if @rental.save
      render 'show'
    else
      render 'new'
    end
  end

  def show
    @rental = Rental.find_by(id: params[:id])
  end

  #user previews rental post
  def preview
    @rentor = current_user
    @rental = @rentor.rentals.new(rental_params)

    if @rental.valid?
      # active record object parsed to json
      @rental = @rental.as_json
      render 'preview'
    else
      render 'new'
    end
  end

  private

  def rental_params
    params.require(:rental).permit(:title, :property_type, :address, :unit, :price, :beds, :baths, :pets, :parking, :description, :pictures_cache, pictures: [])
  end

end