class BooksController < ApplicationController
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
end
