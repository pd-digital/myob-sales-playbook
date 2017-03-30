class AddQuestionsToTopic < ActiveRecord::Migration[5.0]
  def change
    add_column :topics, :questions, :text
  end
end
