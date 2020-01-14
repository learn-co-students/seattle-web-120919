class BooksController < ApplicationController
    before_action :set_book, only:[:show, :edit, :update, :destroy]

    def index
        @books = Book.all
    end

    # def show
    #     # byebug
    #     # @book = Book.find(params[:id])
    # end

    def new
        @authors = Author.all
        @book = Book.new
    end

    def create
        # byebug
        @book = Book.create(book_params)
        redirect_to @book #=->book_path(@book)
    end

    # def edit
    # #    @book = Book.find(params[:id])
    # end

    def update
        # byebug
        # @book = Book.find(params[:id])
        # set_book
        @book.update(book_params)
        redirect_to @book #=->book_path(@book)
    end

    def destroy
        # @book = Book.find(params[:id])
        @book.delete
        redirect_to books_path
    end

    private 

    def set_book
        @book = Book.find(params[:id])
    end

    def book_params
        params.require(:book).permit(:title, :author_id, :snippet)
    end
end
