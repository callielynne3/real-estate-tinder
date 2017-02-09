class WelcomeController < ApplicationController
  def index
    @rentals = Rental.all
    @rentors = @rentals.as_json(include: { rentor: { only: [:email] } })
  end
end