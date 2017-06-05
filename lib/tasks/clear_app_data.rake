task :clear_app_data => :environment do
  DiscoveryQuestion.all.each{ |discovery_question| discovery_question.delete }
  ProductTaskDetail.all.each{ |product_task_detail| product_task_detail.delete }
  Product.all.each{ |product| product.delete }
  ClientTask.all.each{ |client_task| client_task.delete }

  Team.all.each{ |team| team.delete }
  CallType.all.each{ |call_type| call_type.delete }
  Campaign.all.each{ |campaign| campaign.delete }
  ClientType.all.each{ |client_type| client_type.delete }
end
