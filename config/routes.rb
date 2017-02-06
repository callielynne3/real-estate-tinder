Rails.application.routes.draw do

  resources :rentals
  get 'rentals/my_rentals', to: 'rentals#my_rentals'

   get 'hello_world', to: 'hello_world#index'

  get 'welcome_hom', to: 'welcome#index'
  devise_for :users
  resources :users

  root 'site#index'


  namespace :api do
    namespace :v1 do
      resources :rentals, only: [:index, :create, :destroy, :update]
      resources :users, only: [:index, :create, :destroy, :update]
      resources :pictures, only: [:index, :create, :destroy, :update]
      resources :votes, only: [:index, :create, :destroy, :update]
    end
  end

end
