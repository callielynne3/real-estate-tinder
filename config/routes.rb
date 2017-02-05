Rails.application.routes.draw do

  get 'welcome_hom', to: 'welcome#index'
  devise_for :users
  resources :users

  root 'site#index'
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
