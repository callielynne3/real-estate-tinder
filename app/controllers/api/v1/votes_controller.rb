class Api::V1::VotesController < Api::V1::BaseController
  def index
    respond_with Vote.all
  end

  def create
    respond_with :api, :v1, Vote.create(vote_params)
  end

  def destroy
    respond_with Vote.destroy(params[:id])
  end

  def update
    vote = Vote.find(params["id"])
    vote.update_attributes(vote_params)
    respond_with vote, json: vote
  end

  private

  def vote_params
    params.require(:vote).permit(:vote)
  end
end