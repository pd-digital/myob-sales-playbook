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

# Discovery questions
DiscoveryQuestion.create(name: 'Client Discovery')
DiscoveryQuestion.create(name: 'Software Discovery')

# Products
essentials = Product.create(name: 'Essentials')
account_right = Product.create(name: 'AccountRight')
account_edge = Product.create(name: 'AccountEdge')
products = [essentials, account_right, account_edge]

# Client tasks
banking = ClientTask.create(name: 'Banking', key:'banking')
business_expenses = ClientTask.create(name: 'Business Expenses', key:'business-expenses')
invoicing = ClientTask.create(name: 'Invoicing', key:'invoicing')
managing_cash_flow = ClientTask.create(name: 'Managing Cash Flow', key:'managing-cash-flow')
managing_projects_and_jobs = ClientTask.create(name: 'Managing Projects & Jobs', key:'managing-projects-and-jobs')
managing_staff_and_payroll = ClientTask.create(name: 'Managing Staff & Payroll', key:'managing-staff-and-payroll')
managing_stock_and_suplliers = ClientTask.create(name: 'Managing Stock & Supplies', key:'managing-stock-and-suplliers')
managing_tax = ClientTask.create(name: 'Managing Tax', key:'managing-tax')
quoting = ClientTask.create(name: 'Quoting', key:'quoting')
client_tasks = [banking, business_expenses, invoicing, managing_cash_flow, managing_projects_and_jobs, managing_staff_and_payroll, managing_stock_and_suplliers, managing_tax, quoting]

# Product/Client task details
client_tasks.each do |client_task|
  products.each do |product|
    ProductTaskDetail.create(product_id: product.id, client_task_id: client_task.id)
  end
end
