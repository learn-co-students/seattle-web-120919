class BooksController < Sinatra::Base
  set :views, 'app/views'
  set :method_override, true

  get '/' do
    "Hello World"
  end

  # index
  get '/books' do
    @books = Book.all
    erb :index
  end

  # new
  get '/books/new' do
    erb :new
  end

  # show
  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :show
  end

  # create
  post '/books' do
    book = Book.create(title: params[:title], author: params[:author], snippet: params[:snippet])
    redirect '/books'
  end

  # edit
  get '/books/:id/edit' do
    @book = Book.find(params[:id])
    erb :edit
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
