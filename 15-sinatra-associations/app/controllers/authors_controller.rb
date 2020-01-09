class AuthorsController < ApplicationController
    # set :views, 'app/views'
    get '/authors' do
        # get the data
        @authors = Author.all
        # pass the data to the view
        erb :"/authors/index"
    end

    get '/authors/:id' do
        # byebug
        # @author = params[:id]
        @author = Author.find(params[:id])
        erb :"/authors/show"
    end
end