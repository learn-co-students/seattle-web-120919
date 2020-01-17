Rails.application.routes.draw do
<<<<<<< HEAD
  get '/books', to: "books#index", as: "books"
  get '/books/new', to: "books#new", as: "new_book"
  get '/books/:id', to: "books#show", as: "book"
  post '/books', to: "books#create"
=======
  # resources :books
  get '/books', to: "books#index", as: "all_books"

  get '/books/new', to: "books#new", as: "new_book"
  post '/books', to: "books#create", as: "create_book"


  get '/books/:id', to: "books#show", as: "show_book"

  get '/books/:id/edit', to: "books#edit", as: "edit_book"
  patch '/books/:id', to: "books#update", as: "update_book"

  delete "/books/:id", to: "books#destroy", as: "delete_book"
>>>>>>> a6bc1f4270d447d5ed912e53bac4873ce87ce83a
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
