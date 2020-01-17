class BooksController < ApplicationController
<<<<<<< HEAD
  def index
    @books = Book.all
  end

  def show
    @book = Book.find(params[:id])
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.create(title: params[:book][:title], 
      author: params[:book][:author], 
      snippet: params[:book][:snippet])
      redirect_to book_path(@book.id)
  end
=======
    def index 
        @books = Book.all
    end

    def show
        # byebug
        @book = Book.find(params[:id])
    end

    def new
        @book = Book.new
    end

    def create
        # byebug
        @book = Book.create(title: params[:book][:title], author: params[:book][:author], snippet: params[:book][:snippet])
        redirect_to show_book_path(@book)
    end

    def edit
        @book = Book.find(params[:id])
    end

    def update
        # byebug
        @book = Book.find(params[:id])
        @book.update(title: params[:book][:title], author: params[:book][:author], snippet: params[:book][:snippet])
        redirect_to show_book_path(@book)
    end

    def destroy
        @book = Book.find(params[:id])
        @book.delete
        redirect_to all_books_path
    end
    
>>>>>>> a6bc1f4270d447d5ed912e53bac4873ce87ce83a
end
