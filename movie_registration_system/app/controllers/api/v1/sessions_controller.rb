# frozen_string_literal: true

class Api::V1::SessionsController < Devise::SessionsController

  respond_to :json

  # POST /api/v1/users/sign_in
  def create
    resource = warden.authenticate!(auth_options)
    if resource
      sign_in(resource_name, resource)
      render json: { message: "Logged in successfully", auth_token: generate_auth_token(resource) }, status: :ok
    else
      render json:{ message: "invalid email or password"}
    end
  rescue StandardError => e
    render json: { error: e.message }, status: :unauthorized
  end

  # DELETE /api/v1/users/sign_out
  def destroy
    if current_user
      sign_out current_user
      render json: { message: "Logged out successfully" }, status: :ok
    else
      render json: { message: "Couldn't find an active session" }, status: :unauthorized
    end
  end

  protected

  # Handle custom parameters if needed
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password])
  end

  # Generate JWT token
  def generate_auth_token(user)
    JWT.encode({ user_id: user.id, exp: 24.hours.from_now.to_i }, Rails.application.credentials.secret_key_base)
  end

  # Handle authentication options
  def auth_options
    { scope: resource_name, recall: "#{controller_path}#new" }
  end
end
