task :clear_app_data => :environment do
  Product.all.each{ |product| product.delete }
  ProductFeature.all.each{ |product_feature| product_feature.delete }
  ClientBenefit.all.each{ |client_benefit| client_benefit.delete }
  ClientTask.all.each{ |client_task| client_task.delete }

  Team.all.each{ |team| team.delete }
  CallType.all.each{ |call_type| call_type.delete }
  Campaign.all.each{ |campaign| campaign.delete }
  ClientType.all.each{ |client_type| client_type.delete }
end
