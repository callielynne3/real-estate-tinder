class WelcomeController < ApplicationController
  def index
    @rentals = Rental.all
  end
end