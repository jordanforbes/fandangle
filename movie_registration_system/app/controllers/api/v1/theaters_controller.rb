class Api::V1::TheatersController < ApplicationController
  def index
    theaters = Theater.all
    render json: theaters
  end
end
