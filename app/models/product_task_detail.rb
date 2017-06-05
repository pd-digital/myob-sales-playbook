class ProductTaskDetail < ApplicationRecord
  belongs_to :product
  belongs_to :client_task
end
