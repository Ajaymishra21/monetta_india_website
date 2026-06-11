export type IndustryContent = {
  slug: string
  name: string
  overview: string
  challenges: string[]
  solutions: string[]
  products: string[]
  benefits: string[]
  faqs: { q: string; a: string }[]
}

export const industriesContent: IndustryContent[] = [
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    overview: 'Complete accounting, inventory and production control tailored for factories and manufacturers.',
    challenges: ['Inventory reconciliation', 'Production costing', 'GST compliance for manufacturing', 'Batch tracking & WIP'],
    solutions: ['Inventory Management', 'Production Tracking', 'Costing Reports', 'Factory Accounting & BOM'],
    products: ['TallyPrime Gold', 'TallyPrime Server', 'Inventory Modules'],
    benefits: ['Accurate costing', 'Reduced WIP', 'Improved margins', 'Compliance-ready reporting'],
    faqs: [
      { q: 'Can you track batch-wise production?', a: 'Yes — we configure batch & lot tracking with costing and expiry where required.' },
    ],
  },
  {
    slug: 'retail',
    name: 'Retail',
    overview: 'POS, multi-store inventory and customer analytics for retail businesses.',
    challenges: ['POS integration', 'Stock across stores', 'Sales analytics', 'Customer tracking'],
    solutions: ['POS Integration', 'Stock Management', 'Multi-Store Support', 'Sales Analytics'],
    products: ['TallyPrime Silver', 'Tally on Cloud', 'POS Integrations'],
    benefits: ['Faster billing', 'Reduced stockouts', 'Better customer retention'],
    faqs: [],
  },
  {
    slug: 'wholesale',
    name: 'Wholesale',
    overview: 'Automation for high-volume billing, dealer management and inventory control.',
    challenges: ['Bulk orders', 'Dealer credits', 'Inventory control', 'Billing automation'],
    solutions: ['Bulk Order Management', 'Dealer Management', 'Inventory Controls', 'Automated Billing'],
    products: ['TallyPrime Gold', 'TallyPrime Server'],
    benefits: ['Faster processing', 'Accurate ledgers', 'Improved cashflow'],
    faqs: [],
  },
  {
    slug: 'distribution',
    name: 'Distribution',
    overview: 'Tools for warehouse management, route planning and distributor networks.',
    challenges: ['Warehouse tracking', 'Route management', 'Stock at distributors', 'Returns management'],
    solutions: ['Distributor Network Tracking', 'Warehouse Management', 'Route Analytics'],
    products: ['TallyPrime Server', 'Warehouse Modules'],
    benefits: ['Real-time stock visibility', 'Reduced delivery errors'],
    faqs: [],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    overview: 'Hospital accounting, pharmacy billing and inventory for healthcare providers.',
    challenges: ['Pharmacy inventory', 'Patient billing', 'Regulatory compliance', 'Expiry tracking'],
    solutions: ['Hospital Accounting', 'Pharmacy Billing', 'Inventory & Expiry Tracking'],
    products: ['TallyPrime Silver', 'Healthcare Integrations'],
    benefits: ['Accurate billing', 'Controlled inventory', 'Regulatory compliance'],
    faqs: [],
  },
  {
    slug: 'education',
    name: 'Education',
    overview: 'Fee management, payroll and institution accounting for schools and colleges.',
    challenges: ['Fee management', 'Payroll for staff', 'Reporting for trustees'],
    solutions: ['Fee Management', 'Payroll Automation', 'Institution Reporting'],
    products: ['TallyPrime Silver', 'Payroll Modules'],
    benefits: ['Faster fee processing', 'Accurate payroll'],
    faqs: [],
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    overview: 'Fleet expense tracking, route analytics and transport accounting.',
    challenges: ['Fleet costing', 'Fuel management', 'Route expenses', 'Fleet maintenance accounting'],
    solutions: ['Fleet Expense Tracking', 'Transport Accounting', 'Route Analytics'],
    products: ['TallyPrime Server', 'Transport Modules'],
    benefits: ['Lower fleet costs', 'Better route planning'],
    faqs: [],
  },
  {
    slug: 'services',
    name: 'Services',
    overview: 'Project billing, client management and performance analytics for service firms.',
    challenges: ['Project billing', 'Client-wise revenue', 'Expense tracking'],
    solutions: ['Project Billing', 'Client Management', 'Expense Tracking'],
    products: ['TallyPrime Silver', 'Business Automation'],
    benefits: ['Better margins', 'Clear client invoices'],
    faqs: [],
  },
  {
    slug: 'e-commerce',
    name: 'E-Commerce',
    overview: 'Marketplace integrations, GST reporting and order management for online sellers.',
    challenges: ['Marketplace reconciliation', 'Inventory sync', 'GST across orders'],
    solutions: ['Marketplace Integration', 'Inventory Synchronization', 'Order Management'],
    products: ['Tally on Cloud', 'Integration Plugins'],
    benefits: ['Synced inventory', 'Accurate GST reporting'],
    faqs: [],
  },
]
