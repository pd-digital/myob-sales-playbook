class ClientTasksController < ApplicationController
  def index
    @client_tasks = ClientTask.all.order(:name)
    @discovery_questions = DiscoveryQuestion.all.order(:id)
  end

  def questions
    keys = params[:id].split(',')
    @client_tasks = ClientTask.where(key: keys).order(:id)
  end

  def states
    keys = params[:id].split(',')
    @client_tasks = ClientTask.where(key: keys).order(:id)
  end

  def update
    if current_user.is_admin?
      client_task = ClientTask.find(params[:id])
      client_task.questions = client_task_param[:questions] if client_task_param[:questions]
      client_task.info = client_task_param[:info] if client_task_param[:info]
      client_task.current_state = client_task_param[:current_state] if client_task_param[:current_state]
      client_task.future_state = client_task_param[:future_state] if client_task_param[:future_state]
      client_task.insights = client_task_param[:insights] if client_task_param[:insights]
      client_task.features = client_task_param[:features] if client_task_param[:features]
      client_task.benefits = client_task_param[:benefits] if client_task_param[:benefits]
      client_task.save

      render json: client_task.to_json
    else
      render_unauthorized
    end
  end

  # TODO - should this be under products?
  def products
    keys = params[:id].split(',')
    client_benefits = ClientBenefit.joins(product_feature: [:client_task]).where('client_tasks.key IN (?)', keys).order(:id)
    @products = Product.all
    @client_tasks = client_benefits.group_by{ |cb| cb.product_feature.client_task }.map do |task_with_description|
      client_task = task_with_description.first
      client_benefits = task_with_description.second
      {
        client_task: client_task,
        feature: client_task.product_feature,
        benefits: client_benefits.uniq.map do |client_benefit|
          {
            product: client_benefit.product,
            benefits: client_benefit.benefits,
            id: client_benefit.id
          }
        end
      }
    end
  end

  def update_states
    if current_user.is_admin?
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
    else
      render_unauthorized
    end
  end

  def update_benefits
    if current_user.is_admin?
      client_benefits = params[:clientBenefits]
      client_benefits.each do |cb|
        client_benefit = cb[:id].present? ? ClientBenefit.find(cb[:id]) : ClientBenefit.new
        client_benefit.product_id = cb[:productId]
        client_benefit.product_feature_id = cb[:featureId]
        client_benefit.benefits = cb[:benefits]
        client_benefit.save
      end

      response_json = ClientBenefit.where(id: client_benefits.map{ |t| t[:id] }).select(:product_id, :product_feature_id, :benefits)
      render json: { clientBenefits: response_json }.to_json
    else
      render_unauthorized
    end
  end

  private
  def client_task_param
    @client_task_param ||= params[:client_tasks] || {}
  end
end
