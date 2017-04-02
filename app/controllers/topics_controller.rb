class TopicsController < ApplicationController
  def index
    @topics = Topic.all.order(:id)
  end

  def questions
    keys = params[:id].split(',')
    @topics = Topic.where(key: keys).order(:id)
  end

  def states
    keys = params[:id].split(',')
    @topics = Topic.where(key: keys).order(:id)
  end

  def products
    keys = params[:id].split(',')
    pfds = ProductFeatureDescription.joins(product_feature: [:topic]).where('topics.key IN (?)', keys)
    @products = pfds.map(&:product).map(&:name)
    @description_summaries = pfds.group_by{ |pfd| pfd.product_feature.topic }.map do |sommat|
      topic = sommat.first
      product_feature_descriptions = sommat.second
      {
        topic_name: topic.name,
        feature_name: topic.product_feature.name,
        descriptions: product_feature_descriptions.map do |desc|
          {
            product: desc.product.name,
            description: desc.description
          }
        end
      }
    end
  end

  def update
    topics = params[:topics]
    params[:topics].each do |t|
      topic = Topic.find_by(key: t[:key])
      topic.name = t[:name]
      topic.questions = t[:questions]
      topic.save
    end

    response_json = Topic.where(key: topics.map{ |t| t[:key] }).select(:name, :key, :questions)
    render json: { topics: response_json }.to_json
  end
end
