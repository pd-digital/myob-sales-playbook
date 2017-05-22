class CreateDiscoveryQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :discovery_questions do |t|
      t.string :name
      t.text :questions
    end
  end
end
