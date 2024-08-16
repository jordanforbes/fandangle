class AddStatusToRegistrations < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :status, :string
    add_index :reservations, :status
  end
end
