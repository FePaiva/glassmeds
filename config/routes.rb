Rails.application.routes.draw do
  resources :posts
  resources :facilities
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/users', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/auth', to: 'users#show'

  # route to test your configuration
  get '/hello', to: 'application#hello_world'

end
