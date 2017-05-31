class ClientTasksController < ApplicationController
  def index
    @client_tasks = ClientTask.all.order(:name)
    @discovery_questions = DiscoveryQuestion.all.order(:id)
  end

  def questions
    keys = params[:id].split(',')
    @client_tasks = ClientTask.where(key: keys).order(:id)
  end

  # TODO; eh this should be renamed
  def states
    keys = params[:id].split(',')
    @products = Product.all
    product_task_details = ProductTaskDetail.joins(:product, :client_task).where('client_tasks.key IN (?)', keys).order(:id)
    @client_tasks = product_task_details.group_by(&:client_task)
  end

  def update
    if current_user.is_admin?
      client_task = ClientTask.find(params[:id])
      client_task.questions = client_task_param[:questions] if client_task_param[:questions]
      client_task.info = client_task_param[:info] if client_task_param[:info]
      client_task.save

      render json: client_task.to_json
    else
      render_unauthorized
    end
  end

  private
  def client_task_param
    @client_task_param ||= params[:client_tasks] || {}
  end
end
