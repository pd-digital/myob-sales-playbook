class AddUniqueConstraintToKeys < ActiveRecord::Migration[5.0]
  def change
    add_index :topics, [:key], :unique => true
    add_index :teams, [:key], :unique => true
  end
end
