class AddFieldsToClientTasks < ActiveRecord::Migration[5.0]
  def change
    add_column :client_tasks, :insights, :text
    add_column :client_tasks, :features, :text
    add_column :client_tasks, :benefits, :text
  end
end
