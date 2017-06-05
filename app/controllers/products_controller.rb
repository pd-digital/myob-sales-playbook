class ProductsController < ApplicationController
  def show
    @product = Product.where('lower(name) = ?', params['id']).first
    @product_task_details = ProductTaskDetail.where('product_id = ? AND client_task_id in (?)', @product.id, client_tasks.map(&:id))
  end

  private

  def client_task_keys
    @client_task_keys ||= params[:client_tasks].split(',')
  end

  def client_tasks
    @client_tasks ||= ClientTask.where(key: client_task_keys).order(:id)
  end
end
