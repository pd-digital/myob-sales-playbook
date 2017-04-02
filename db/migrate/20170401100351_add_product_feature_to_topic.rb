class AddProductFeatureToTopic < ActiveRecord::Migration[5.0]
  def change
    add_column :topics, :product_feature, :string
  end
end
