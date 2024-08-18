class Api::V1::ReservationsController < ApplicationController
  before_action :authenticate_user! #ensure user is logged in
  before_action :set_reservation, only: [:show, :edit, :update, :destroy]
  before_action :authorize_admin!, only: [:destroy]

  def authorize_admin!
    redirect_to(root_path, alert: 'Not Authorized!') unless current_user.admin?
  end

  def index
    reservations = Reservation.all
    render json: reservations
  end
end
