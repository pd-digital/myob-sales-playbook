class AddProductFeatures < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name

      t.timestamps
    end

    create_table :product_features do |t|
      t.string :name

      t.timestamps
    end

    create_table :product_feature_descriptions do |t|
      t.string :description
      t.integer :product_feature_id
      t.integer :product_id

      t.timestamps
    end

    add_column :topics, :product_feature_id, :integer
  end
end
