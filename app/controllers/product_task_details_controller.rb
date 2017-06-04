class ProductTaskDetailsController < ApplicationController
  def update
    if current_user.is_admin?
      product_task_detail = ProductTaskDetail.find(params[:id])
      product_task_detail.current_state = product_task_details_param[:current_state] if product_task_details_param[:current_state]
      product_task_detail.future_state = product_task_details_param[:future_state] if product_task_details_param[:future_state]
      product_task_detail.insights = product_task_details_param[:insights] if product_task_details_param[:insights]
      product_task_detail.benefits = product_task_details_param[:benefits] if product_task_details_param[:benefits]
      product_task_detail.features = product_task_details_param[:features] if product_task_details_param[:features]
      product_task_detail.save

      render json: product_task_detail.to_json
    else
      render_unauthorized
    end
  end

  private

  def product_task_details_param
    product_task_details_param ||= params[:product_task_details]
  end
end
