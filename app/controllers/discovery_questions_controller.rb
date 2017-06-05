class DiscoveryQuestionsController < ApplicationController
  def update
    if current_user.is_admin?
      discovery_question = DiscoveryQuestion.find(params[:id])
      discovery_question.questions = params[:discovery_questions][:questions]
      discovery_question.save

      render json: discovery_question.to_json
    else
      render_unauthorized
    end
  end
end
