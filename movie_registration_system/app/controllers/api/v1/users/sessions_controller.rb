# frozen_string_literal: true

class Api::V1::Users::SessionsController < Devise::SessionsController
  respond_to :json

  # override devise's default create method to allow auth_token generation
  def create
    resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)
    render json: { message: "Logged in successfully", auth_token: generate_auth_token(resource) }, status: :ok
  end

  # override devise's default destroy method
  def destroy
    if current_user
      sign_out current_user
      render json: { message: "logged out successfully" }, status: :ok
    else
      render json: {message: "couldn't find an active session"}, status: :unauthorized
    end
  end

  private

  # generate JWT token
  def generate_auth_token(user)
    JWT.encode({user_id: user.id, exp: 24.hours.from_now.to_i }, Rails.application.credentials.secret_key_base)
  end

  # handle authentication options
  def auth_options
    { scope: resource_name, recall: "#{controller_path}#new"}
  end
end
