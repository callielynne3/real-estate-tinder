class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email, :password, :password_confirmation, :remember_me, :picture, :pictures, :avatar_cache, :pictures_cache, :remove_pictures])
    devise_parameter_sanitizer.permit(:account_update, keys: [:username, :password, :password_confirmation, :current_password, :picture, :pictures, :avatar_cache, :pictures_cache, :remove_avatar, :remove_pictures])
  end
end
