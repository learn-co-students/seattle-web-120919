class BrewsController < ApplicationController
    before_action :find_brew, only: [:show, :edit, :update]

    def index
        @brews = Brew.all
    end

    # def show
    #     # find_brew
    # end

    def new
        @brew = Brew.new
    end

    def create
        # byebug
        @brew = Brew.new(brew_params)
        if @brew.save
            redirect_to @brew
        else 
            render :new
        end
    end

    # def edit
    #     # find_brew
    # end

    def update
        if @brew.update(brew_params)
            redirect_to @brew
        else
            render :edit
        end

    end

    def strongest
        @strongest = Brew.strongest
    end




    private
    def brew_params
        params.require(:brew).permit(:blend_name, :origin, :notes, :strength)
    end

    def find_brew
        @brew = Brew.find(params[:id])
    end
end
