class Api::V1::PaymentsController < ApplicationController
  def create
    # Find the reservation
    reservation = Reservation.find(params[:reservation_id])

    # Create a Stripe payment intent
    payment_intent = Stripe::PaymentIntent.create({
      amount: reservation.total_price_cents, # The total amount in cents
      currency: 'usd',
      payment_method: params[:payment_method_id],
      confirm: true, # Automatically confirm the payment
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never'
      }
    })

    # If payment is successful, update the reservation status
    reservation.update(status: 'paid')

    # Respond with the payment intent details
    render json: { payment_intent: payment_intent }
  rescue Stripe::CardError => e
    # Handle Stripe errors
    render json: { error: e.message }, status: :unprocessable_entity
  end
end
