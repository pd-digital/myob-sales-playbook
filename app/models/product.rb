class Product < ApplicationRecord
  has_many :product_feature_descriptions
  has_many :product_feature, through: :product_feature_descriptions
end
