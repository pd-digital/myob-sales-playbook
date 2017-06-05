class CreateProductTaskDetails < ActiveRecord::Migration[5.0]
  def change
    create_table :product_task_details do |t|
      t.text :current_state
      t.text :future_state
      t.text :insights
      t.text :benefits
      t.text :features
    end

    add_reference :product_task_details, :product, foreign_key: true
    add_reference :product_task_details, :client_task, foreign_key: true
  end
end
