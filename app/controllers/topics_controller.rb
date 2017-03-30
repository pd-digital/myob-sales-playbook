class TopicsController < ApplicationController
  def index
    @topics = Topic.all
  end

  def show
    keys = params[:id].split(',')
    @topics = Topic.where(key: keys)
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
