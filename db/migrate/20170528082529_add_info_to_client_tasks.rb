class AddInfoToClientTasks < ActiveRecord::Migration[5.0]
  def change
    add_column :client_tasks, :info, :text
  end
end
