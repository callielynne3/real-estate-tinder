Rails.application.routes.draw do

  devise_for :users
  resources :users
  get 'hello_world', to: 'hello_world#index'


  root 'site#index'

  devise_for :users
  resources :users
  get 'hello_world', to: 'hello_world#index'
 

  namespace :api do
    namespace :v1 do
      resources :rentals, only: [:index, :create, :destroy, :update]
      resources :users, only: [:index, :create, :destroy, :update]
      resources :pictures, only: [:index, :create, :destroy, :update]
      resources :votes, only: [:index, :create, :destroy, :update]
    end
  end

end
