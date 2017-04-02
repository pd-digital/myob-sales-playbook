class RemoveProductFeatureFromTopics < ActiveRecord::Migration[5.0]
  def change
    remove_column :topics, :product_feature
  end
end
