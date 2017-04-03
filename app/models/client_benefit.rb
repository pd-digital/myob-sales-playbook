class ClientBenefit < ApplicationRecord
  belongs_to :product
  belongs_to :product_feature
end
