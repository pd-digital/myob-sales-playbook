# Teams
Team.create(name: 'SME Sales', key: 'sme-sales')
Team.create(name: 'SME Support', key: 'sme-support')
Team.create(name: 'Partners', key: 'partners')
Team.create(name: 'Transaction Services', key: 'transactional-services')

# Call types
CallType.create(name: 'Trial', key: 'trial')
CallType.create(name: 'Upsell/Winback', key: 'upsell-winback')
CallType.create(name: 'Inbound Leads', key: 'inbound-leads')

# Campaigns
Campaign.create(name: 'MMEM', key: 'mmem')
Campaign.create(name: 'Power play', key: 'power-play')
Campaign.create(name: 'Mission 3', key: 'mission-3')

# ClientType
ClientType.create(name: 'Trade', key: 'trade')
ClientType.create(name: 'Hospitality', key: 'hospitality')
ClientType.create(name: 'Retail and Manufacturing', key: 'retail-and-manufacturing')
ClientType.create(name: 'Professional Services', key: 'professional-services')

# Products
essentials = Product.create(name: 'Essentials')
accountRight = Product.create(name: 'AccountRight')
accountEdge = Product.create(name: 'AccountEdge')

# Product Features
sales = ProductFeature.create(name: 'Sales')
payroll = ProductFeature.create(name: 'Payroll')
bank_feeds = ProductFeature.create(name: 'Bank feeds')
time_sheets_time_billing = ProductFeature.create(name: 'Time Sheets/Time Billing')
purchases_smart_bills = ProductFeature.create(name: 'Purchases, Smart Bills')
banking_smart_bills = ProductFeature.create(name: 'Banking, Smart Bills')
manage_inventory = ProductFeature.create(name: 'Manage Inventory')
manage_purchases = ProductFeature.create(name: 'Manage Purchases')
bank_feeds_2 = ProductFeature.create(name: 'Bank feeds')

# Client tasks
ClientTask.create(name: 'Banking', key:'banking', product_feature: bank_feeds_2)
ClientTask.create(name: 'Business Expenses', key:'business-expenses', product_feature: purchases_smart_bills)
ClientTask.create(name: 'Invoicing', key:'invoicing', product_feature: sales)
ClientTask.create(name: 'Managing Cash Flow', key:'managing-cash-flow', product_feature: banking_smart_bills)
ClientTask.create(name: 'Managing Projects & Jobs', key:'managing-projects-and-jobs', product_feature: nil)
ClientTask.create(name: 'Managing Staff & Payroll', key:'managing-staff-and-payroll', product_feature: payroll)
ClientTask.create(name: 'Managing Stock & Supplies', key:'managing-stock-and-suplliers', product_feature: manage_inventory)
ClientTask.create(name: 'Managing Tax', key:'managing-tax', product_feature: bank_feeds)
ClientTask.create(name: 'Quoting', key:'quoting', product_feature: nil)

# Discovery questions
DiscoveryQuestion.create(name: 'Client Discovery')
DiscoveryQuestion.create(name: 'Software Discovery')

# Client Benefits, only need 1 for each feature
ClientBenefit.create(product: accountRight, product_feature: sales)
ClientBenefit.create(product: accountRight, product_feature: payroll)
ClientBenefit.create(product: accountRight, product_feature: bank_feeds)
ClientBenefit.create(product: accountRight, product_feature: time_sheets_time_billing)
ClientBenefit.create(product: accountRight, product_feature: purchases_smart_bills)
ClientBenefit.create(product: accountRight, product_feature: banking_smart_bills)
ClientBenefit.create(product: accountRight, product_feature: manage_inventory)
ClientBenefit.create(product: accountRight, product_feature: manage_purchases)
ClientBenefit.create(product: accountRight, product_feature: bank_feeds_2)
