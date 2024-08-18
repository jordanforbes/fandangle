class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!, only: [:show, :update]

  # GET /api/v1/users/:id
  def show
    render json: current_user
  end

  # PUT /api/v1/users/:id
  def update
    if current_user.update(user_params)
      render json: current_user
    else
      render json: { errors: current_user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
