class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :movie
  # belongs_to :schedule
  enum status: { pending: 'pending', confirmed: 'confirmed', paid: 'paid', canceled: 'canceled'}

  validates :user_id, presence: true
  validates :movie_id, presence: true
  validates :status, inclusion: { in: %w[pending confirmed paid canceled]}
end
