class Api::V1::PicturesController < Api::V1::BaseController
  def index
    respond_with Picture.all
  end

  def create
    respond_with :api, :v1, Picture.create(picture_params)
  end

  def destroy
    respond_with Picture.destroy(params[:id])
  end

  def update
    picture = Picture.find(params["id"])
    picture.update_attributes(picture_params)
    respond_with picture, json: picture
  end

  private

  def picture_params
    params.require(:picture).permit(:name, :alt_text, :url, :imageable_type, :imageable_id)
  end
end