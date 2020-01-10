Rails.application.routes.draw do
  # resources :artists
  get '/books', to: "artists#index", as: "artists"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
