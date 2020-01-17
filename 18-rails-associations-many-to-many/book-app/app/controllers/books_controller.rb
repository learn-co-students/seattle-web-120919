class BooksController < ApplicationController
    before_action :find_book, only: [:edit, :update, :destroy, :show]

    def index 
        @books = Book.all
    end

    # def show
    #     # byebug
    #     # @book = Book.find(params[:id])
    #     # find_book
    # end

    def new
        @book = Book.new
        @authors = Author.all
    end

    def create
        # byebug
        @book = Book.new(set_params)
        if @book.save
            redirect_to book_path(@book)
        else 
            @authors = Author.all
            flash[:message] = @book.errors.full_messages
            render :new
        end
    end

    # def edit
    #     # @book = Book.find(params[:id])
    # end

    def update
        # byebug
        # @book = Book.find(params[:id])
        @book.update(set_params)
        redirect_to book_path(@book)
    end

    def destroy
        # @book = Book.find(params[:id])
        @book.delete
        redirect_to books_path
    end


    private
    #questions -> somethimes the private method inside or outside the class
    def set_params
        params.require(:book).permit(:title, :snippet, author_ids: [ ])
    end

    def find_book
        @book = Book.find(params[:id])
    end
    
end
