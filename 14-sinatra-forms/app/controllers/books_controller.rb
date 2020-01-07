class BooksController < Sinatra::Base
  set :views, 'app/views'

  get '/' do
    "Hello World"
  end

  # index
  get '/books' do
    @books = Book.all
    erb :index
  end

  # show
  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :show
  end

  # create
  post '/books' do
    book = Book.create(title: params[:title], author: params[:author], snippet: params[:snippet])
  end

  # update
  patch '/books/:id' do
    book = Book.find(params[:id])
    book.update(title: params[:title], author: params[:author], snippet: params[:snippet])
  end

  # destroy
  delete '/books/:id' do
    Book.destroy(params[:id])
  end
end
