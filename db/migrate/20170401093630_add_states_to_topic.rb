class AddStatesToTopic < ActiveRecord::Migration[5.0]
  def change
    add_column :topics, :current_state, :text
    add_column :topics, :future_state, :text
  end
end
