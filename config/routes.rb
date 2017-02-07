Rails.application.routes.draw do

  resources :rentals
  get 'rentals/my_rentals', to: 'rentals#my_rentals'
  post 'preview', to: 'rentals#preview'

  get 'hello_world', to: 'hello_world#index'

  get 'welcome_hom', to: 'welcome#index'
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :users, except: :show
  get '/profile' => 'users#show'

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
