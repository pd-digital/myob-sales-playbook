class IndustriesController < ApplicationController
  def index
    @client_types = ClientType.all
  end
end
