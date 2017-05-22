class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :authenticate_user!

  private

  def render_unauthorized
    render json: { error: 'unauthorized' }, status: :unauthorized
  end
end
