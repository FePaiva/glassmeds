Rails.application.routes.draw do
  resources :posts
  resources :facilities
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/home', to: 'posts#index'
  get '/users/:id/posts/:procedures', to: 'users#post'
  get '/users/:id/posts', to: 'users#posts'
  get '/average', to: 'posts#average'
  # get '/me', to: 'users#me'


  # post '/users', to: 'users#create'
  
  
  
  # route to test your configuration
  # get '/hello', to: 'application#hello_world'

end
