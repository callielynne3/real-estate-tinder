#this controller describes actions for rentals
#posted AND queried by user

class RentalsController < ApplicationController
  skip_before_filter  :verify_authenticity_token

# #list all rentals on the site
# 	def index
# 	end

# #user views all rentals they posted
# 	def my_rentals
# 	end

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

# #user gets form to edit their posted rental
# 	def edit
# 	end

# #user edits their posted rental
# 	def update
# 	end

# #user deletes their posted rental
# 	def destroy
# 	end

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
    params.require(:rental).permit(:title, :property_type, :address, :unit, :price, :beds, :baths, :pets, :parking, :description)
  end

end