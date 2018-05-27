class SpacesController < ApplicationController
  def index
    render json: {
      spaces: [
        {'name': 'Art'},
        {'name': 'Film'},
        {'name': 'Photography'}
      ]
    }.to_json
  end
end
