class AuthorsController < ApplicationController
    before_action :set_author, only: [:show]

    def index
        @authors = Author.all
    end

    # def show
    #     # @author = Author.find(params[:id])
    # end

    private
    def set_author
        @author = Author.find(params[:id])
    end
end
