Rails.application.routes.draw do
  resources :authors, only:[:index, :show]
  resources :books #, only:[:index, :show, :new, :create, :edit, :update, :destroy]
  #index -> get '/books', to: "books#index"
  #show -> get '/books/:id", to: "books#show", as: "book"
  #CREATE
  # new -> get '/books/new, to: "books#new", as:new_book
  # create -> post '/books', to: "books#create", as: "create_books"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
