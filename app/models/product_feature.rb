class ProductFeature < ApplicationRecord
  has_many :product_feature_descriptions
  has_many :products, through: :product_feature_descriptions
  has_one :topic
end
