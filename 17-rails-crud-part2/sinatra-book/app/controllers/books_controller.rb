class BooksController < Sinatra::Base
    set :views, 'app/views'

    get '/' do
        "Hello World"
    end
    # <Type of request> '<resource>'
    get '/google_books' do
        #1. Get the data
        # binding.pry
        @google_books = GoogleBook.all
        #2. Telling the route where to do
        erb :index
    end

    get '/google_books/:id' do
        #1
        @google_book = GoogleBook.find_by(id: params[:id])
        #2 telling it where to go
        # binding.pry
        erb :show
    end

    get '/fun_stuff' do
        @say_hello = "Bye"
        erb :bye
    end

end