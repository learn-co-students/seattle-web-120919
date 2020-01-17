Rails.application.routes.draw do
  resources :authors, only: [:index, :show]
  resources :books , only:[:index, :show, :new, :create, :edit, :update]
  # get '/authors', to: "authors#index"
  # get '/authors/:id', to: "authors#show"
  # get '/any_route', to: "books#new"
  # get '/books', to: "books#index"
end
