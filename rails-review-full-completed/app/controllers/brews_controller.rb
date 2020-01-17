class BrewsController < ApplicationController
  before_action :find_brew, only: [:show, :edit, :update, :destroy]
  def index
    @brews = Brew.all
  end

  def show
  end

  def new
    @brew = Brew.new
  end

  def create
    @brew = Brew.new(brew_params)
    if @brew.save
      redirect_to brew_path(@brew)
    else
      render :new
    end
  end

  def edit
  end

  def update
    @brew.update(brew_params)
    redirect_to brew_path(@brew)
  end

  def destroy
    @brew.destroy
    redirect_to brews_path
  end

  def strongest
    @strongest_brews = Brew.strongest
    render :strongest
  end

  private
    def find_brew
      @brew = Brew.find(params[:id])
    end

    def brew_params
      params.require(:brew).permit(:blend_name, :origin, :notes, :strength)
    end
end
