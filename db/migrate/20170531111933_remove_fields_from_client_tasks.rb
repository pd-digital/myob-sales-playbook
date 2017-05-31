class RemoveFieldsFromClientTasks < ActiveRecord::Migration[5.0]
  def change
    remove_column :client_tasks, :current_state, :text
    remove_column :client_tasks, :future_state, :text
    remove_column :client_tasks, :product_feature_id, :integer
    remove_column :client_tasks, :insights, :text
    remove_column :client_tasks, :features, :text
    remove_column :client_tasks, :benefits, :text
  end
end
