class ClientTasksController < ApplicationController
  def index
    @client_tasks = ClientTask.all.order(:id)
  end

  def questions
    keys = params[:id].split(',')
    @client_tasks = ClientTask.where(key: keys).order(:id)
  end

  def states
    keys = params[:id].split(',')
    @client_tasks = ClientTask.where(key: keys).order(:id)
  end

  def products
    keys = params[:id].split(',')
    client_benefits = ClientBenefit.joins(product_feature: [:client_task]).where('client_tasks.key IN (?)', keys)
    @products = client_benefits.map(&:product).uniq
    @client_tasks = client_benefits.group_by{ |cb| cb.product_feature.client_task }.map do |task_with_description|
      client_task = task_with_description.first
      client_benefits = task_with_description.second
      {
        client_task: client_task.name,
        feature: client_task.product_feature.name,
        benefits: client_benefits.uniq.map do |client_benefit|
          {
            product: client_benefit.product.name,
            benefits: client_benefit.benefits
          }
        end
      }
    end
  end

  def update_questions
    client_tasks = params[:clientTasks]
    Rails.logger.info(client_tasks)
    client_tasks.each do |t|
      client_task = ClientTask.find_by(key: t[:key])
      client_task.name = t[:name]
      client_task.questions = t[:questions]
      client_task.save
    end

    response_json = ClientTask.where(key: client_tasks.map{ |t| t[:key] }).select(:name, :key, :questions)
    render json: { clientTasks: response_json }.to_json
  end

  def update_states
    client_tasks = params[:clientTasks]
    client_tasks.each do |t|
      client_task = ClientTask.find_by(key: t[:key])
      client_task.name = t[:name]
      client_task.current_state = t[:currentState]
      client_task.future_state = t[:futureState]
      client_task.save
    end

    response_json = ClientTask.where(key: client_tasks.map{ |t| t[:key] }).select(:name, :key, :current_state, :future_state)
    render json: { clientTasks: response_json }.to_json
  end
end
