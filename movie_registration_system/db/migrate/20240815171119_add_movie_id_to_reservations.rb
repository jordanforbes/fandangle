class AddMovieIdToReservations < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :movie_id, :integer
  end
end
