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
    pfds = ProductFeatureDescription.joins(product_feature: [:client_task]).where('client_tasks.key IN (?)', keys)
    @products = pfds.map(&:product).uniq
    @description_summaries = pfds.group_by{ |pfd| pfd.product_feature.client_task }.map do |sommat|
      client_task = sommat.first
      product_feature_descriptions = sommat.second
      {
        client_task: client_task.name,
        feature: client_task.product_feature.name,
        descriptions: product_feature_descriptions.uniq.map do |desc|
          {
            product: desc.product.name,
            description: desc.description
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
