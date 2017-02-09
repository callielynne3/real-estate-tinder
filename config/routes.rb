Rails.application.routes.draw do
  get 'rentals/browse' => 'rentals#browse'

  resources :rentals
  get 'my_rentals', to: 'rentals#my_rentals'
  get 'my_votes', to: 'rentals#my_votes'
  post 'preview', to: 'rentals#preview'

  get 'hello_world', to: 'hello_world#index'

  get 'welcome_hom', to: 'welcome#index'
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :users, except: :show
  get '/profile' => 'users#show'

  root 'welcome#index'

end
