module Api
  module V1
    class MoviesController < ApplicationController
      def index
        movies = Movie.all
        render json: movies
      end
    end
  end
end
