class BooksController < ApplicationController

    get '/' do
        "This is the home root Page for our book class"
    end

    #index page
    get '/books' do
        @books = Book.all
        erb :"/books/index"
    end


    get '/books/new' do
        @authors = Author.all
        erb :"/books/new"
    end

    get '/books/:id/edit' do
        @book = Book.find(params[:id])
        erb :"/books/edit"
    end

    #show page
    get '/books/:id' do
        # binding.pry
    #    @book = Book.first
        @book = Book.find(params["id"])
       erb :"/books/show"
    end

    post '/books' do
        # binding.pry
        # @book = Book.new(params)
        @book = Book.create(title: params[:title], 
            author_ids: params[:author_ids], 
            snippet: params[:snippet])
            redirect "/books/#{@book.id}"
        # if @book.save
        #     redirect "/books/#{@book.id}"
        # else
        #     redirect "/books"
        # end
    end

    patch '/books/:id' do
        # binding.pry
        @book = Book.find(params[:id])
        @book.update(title: params[:title], 
            author: params[:author], 
            snippet: params[:snippet])          
    end


    delete '/books/:id' do
        @book = Book.find(params[:id])
        @book.delete
        redirect "/books"
    end
end