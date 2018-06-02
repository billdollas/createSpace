class Art < ApplicationRecord


  def index
    render json: Art.all.to_json
  end

  def show
    render json: Art.find(params[:category])

  end

  def new
    render json: Art.new
  end

  def edit
    render json: Art.find(params[:id])
  end



end
