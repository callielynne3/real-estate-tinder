Rails.application.routes.draw do
  root 'site#index'
  # root 'hello_world#index'
  devise_for :users
  resources :users
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :rentals, only: [:index, :create, :destroy, :update]
      resources :users, only: [:index, :create, :destroy, :update]
      resources :pictures, only: [:index, :create, :destroy, :update]
      resources :votes, only: [:index, :create, :destroy, :update]
    end
  end
end
