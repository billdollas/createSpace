class SpacesController < ApplicationController
  def index

    render json: Space.all
    # render json: {
    #   spaces: [
    #     {'name': 'Art'},
    #     {'name': 'Film'},
    #     {'name': 'Photography'}
    #   ]
    # }.to_json
  end

  def create

    userid = params[:userid]
    category = params[:category]
    content = params[:content]

    newpost = Space.create!({
      userid: userid,
      category: category,
      content: content
    })
    render json: newpost

  end

  def show
    Space.where(category: 'art')
  end


end
