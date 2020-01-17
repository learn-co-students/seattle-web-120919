class BooksController < ApplicationController
    def index
        @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
    end

    def new
        @authors = Author.all
        @book = Book.new
    end

    def create
        #controller validations
        #new form_for
        # strong params
        byebug
        @book = Book.new(book_params)
        if @book.save
            redirect_to book_path(@book) # "/books/#{@book.id}"
        else 
            render :new
        end
    end

    def edit
        @book = Book.find(params[:id])
    end

    def update
        # byebug
        @book = Book.find(params[:id])
        if @book.update(book_params)
            redirect_to @book
        else
            render :edit
        end
    end

    private
    def book_params
        params.require(:book).permit(:title, :snippet, author_ids: [])
    end
end
