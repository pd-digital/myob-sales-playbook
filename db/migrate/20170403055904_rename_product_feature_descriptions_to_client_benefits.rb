class RenameProductFeatureDescriptionsToClientBenefits < ActiveRecord::Migration[5.0]
  def change
    rename_table :product_feature_descriptions, :client_benefits

    rename_column :client_benefits, :description, :benefits
  end
end
