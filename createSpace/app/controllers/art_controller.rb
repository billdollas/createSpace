class Art < ApplicationRecord


  def index

    render json: Art.all
  end

  def show
    # render json: Art.find_by(params[:userid])
    Art.where(category: 'art')

  end

  def new
    render json: Art.new
  end

  def edit
    render json: Art.find(params[:id])
  end



end
