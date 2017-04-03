class ProductsController < ApplicationController
  def show
    @product = params[:id]
  end
end
