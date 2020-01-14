Rails.application.routes.draw do
  # resources :books
  get '/books', to: "books#index", as: "all_books"

  get '/books/new', to: "books#new", as: "new_book"
  post '/books', to: "books#create", as: "create_book"


  get '/books/:id', to: "books#show", as: "show_book"

  get '/books/:id/edit', to: "books#edit", as: "edit_book"
  patch '/books/:id', to: "books#update", as: "update_book"

  delete "/books/:id", to: "books#destroy", as: "delete_book"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
