class CallTypesAndCampaignsController < ApplicationController
  def index
    @call_types = CallType.all
    @campaigns = Campaign.all
  end
end
