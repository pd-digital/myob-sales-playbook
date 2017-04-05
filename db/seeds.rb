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
Campaign.create(name: 'Special Campaign 1', key: 'special-campaign-1')
Campaign.create(name: 'Special Campaign 2', key: 'special-campaign-2')
Campaign.create(name: 'Special Campaign 3', key: 'special-campaign-3')

# ClientType
ClientType.create(name: 'Hospitality', key: 'hospitality')
ClientType.create(name: 'Retail', key: 'retail')
ClientType.create(name: 'Trades', key: 'trades')
ClientType.create(name: 'Wholesale', key: 'wholesale')
ClientType.create(name: 'Professional Services', key: 'professional-services')
ClientType.create(name: 'Manufacturing', key: 'manufacturing')
ClientType.create(name: 'Other', key: 'other')

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
invoicing_customer = ClientTask.create(name: 'Customer Invoicing', key:'customer-invoicing', product_feature: sales)
doing_payroll = ClientTask.create(name: 'Payroll', key:'payroll', product_feature: payroll)
bas = ClientTask.create(name: 'BAS/GST', key:'bas-gst', product_feature: bank_feeds)
time_sheets_time_billing_task = ClientTask.create(name: 'Time Sheets', key:'time-sheets', product_feature: time_sheets_time_billing)
expenses = ClientTask.create(name: 'Expenses', key:'expenses', product_feature: purchases_smart_bills)
money_in_money_out = ClientTask.create(name: 'Money In/Money out', key:'money-in-money-out', product_feature: banking_smart_bills)
suppliers_stock = ClientTask.create(name: 'Supplies', key:'supplies', product_feature: manage_inventory)
purchases = ClientTask.create(name: 'Stock', key:'stock', product_feature: manage_purchases)
banking = ClientTask.create(name: 'Banking', key:'banking', product_feature: bank_feeds_2)

# Client Benefits, only need 1 for each feature
sales_benefit = ClientBenefit.create(product: accountRight, product_feature: sales)
payroll_benefit = ClientBenefit.create(product: accountRight, product_feature: payroll)
bank_feeds_benefit = ClientBenefit.create(product: accountRight, product_feature: bank_feeds)
time_sheets_benefit = ClientBenefit.create(product: accountRight, product_feature: time_sheets_time_billing)
purchases_benefit = ClientBenefit.create(product: accountRight, product_feature: purchases_smart_bills)
banking_benefit = ClientBenefit.create(product: accountRight, product_feature: banking_smart_bills)
manage_inventory_benefit = ClientBenefit.create(product: accountRight, product_feature: manage_inventory)
manage_purchases_benefit = ClientBenefit.create(product: accountRight, product_feature: manage_purchases)
bank_feeds_2_benefit = ClientBenefit.create(product: accountRight, product_feature: bank_feeds_2)
