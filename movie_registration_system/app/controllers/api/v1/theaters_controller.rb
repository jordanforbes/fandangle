module Api
  module V1
    class TheatersController < ApplicationController
      def index
        theaters = Theater.all
        render json: theaters
      end
    end
  end
end
