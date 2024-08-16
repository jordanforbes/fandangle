class AddTotalPriceCentsToReservations < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :total_price_cents, :integer
  end
end
