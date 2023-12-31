Rails.application.routes.draw do
  resources :authors, only: [:index, :show]
  resources :categories, only: [:index, :show]
  resources :articles, only: [:index, :show, :create, :destroy]
  resources :users, only:[:create, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'

  get '/hello', to: 'application#hello_world'
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
