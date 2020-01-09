class BooksController < ApplicationController
  get '/' do
    "Hello World"
  end

  # index
  get '/books' do
    @books = Book.all
    erb :"/books/index"
  end

  # new
  get '/books/new' do
    erb :"/books/new"
  end

    # show
    get '/books/:id' do
      @book = Book.find(params[:id])
      erb :"/books/show"
    end

  # create
  post '/books' do
    byebug
    book = Book.create(title: params[:title], author: params[:author], snippet: params[:snippet])
    redirect '/books'
  end

  # edit
  get '/books/:id/edit' do
    @book = Book.find(params[:id])
    erb :"/books/edit"
  end

  # update
  patch '/books/:id' do
    book = Book.find(params[:id])
    book.update(title: params[:title], author: params[:author], snippet: params[:snippet])
    redirect "/books/#{book.id}"
  end

  # destroy
  delete '/books/:id' do
    Book.destroy(params[:id])
    redirect '/books'
  end
end
