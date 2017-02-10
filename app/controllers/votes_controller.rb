class VotesController < ApplicationController
  skip_before_action  :verify_authenticity_token
  before_action :authenticate_user!

  def index
    @user = current_user
    @votes = @user.votes.where(vote: 1).as_json(include: { rental: { include: { rentor: { only: [:email] } } } })
  end

end