class RenameTopicsToClientTasks < ActiveRecord::Migration[5.0]
  def change
    rename_table :topics, :client_tasks
  end
end
