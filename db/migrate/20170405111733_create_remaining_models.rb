class CreateRemainingModels < ActiveRecord::Migration[5.0]
  def change
    create_table :call_types do |t|
      t.string :name
      t.string :key

      t.timestamps
    end

    create_table :campaigns do |t|
      t.string :name
      t.string :key

      t.timestamps
    end

    create_table :client_types do |t|
      t.string :name
      t.string :key

      t.timestamps
    end
  end
end
