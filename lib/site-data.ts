import {
  Package,
  Crown,
  Server,
  Cloud,
  Users,
  ReceiptText,
  Wrench,
  Download,
  Database,
  CloudCog,
  Workflow,
  Code2,
  Settings2,
  GraduationCap,
  Headphones,
  ShieldCheck,
  Scale,
  Briefcase,
  Factory,
  Store,
  Warehouse,
  Truck,
  HeartPulse,
  School,
  Package2,
  ShoppingCart,
  type LucideIcon,
} from 'lucide-react'

export type Product = {
  name: string
  tagline: string
  price: string
  icon: LucideIcon
  popular?: boolean
  features: string[]
}

export const products: Product[] = [
  {
    name: 'TallyPrime Silver',
    tagline: 'Single user license',
    price: '₹22,500',
    icon: Package,
    features: [
      'Single user / single PC',
      'Full accounting & inventory',
      'GST & e-invoicing ready',
      'Free updates within release',
    ],
  },
  {
    name: 'TallyPrime Gold',
    tagline: 'Unlimited multi-user',
    price: '₹67,500',
    icon: Crown,
    popular: true,
    features: [
      'Unlimited users on LAN',
      'Multi-location management',
      'Advanced MIS reporting',
      'Priority partner support',
    ],
  },
  {
    name: 'TallyPrime Server',
    tagline: 'Enterprise scale',
    price: 'On request',
    icon: Server,
    features: [
      'Enterprise data server',
      'High concurrency & security',
      'Centralized administration',
      'Optimized performance',
    ],
  },
  {
    name: 'Tally on Cloud',
    tagline: 'Access anywhere',
    price: '₹599/mo',
    icon: Cloud,
    features: [
      'Secure cloud hosting',
      'Work from any device',
      'Automated daily backups',
      '99.9% uptime SLA',
    ],
  },
  {
    name: 'Payroll Solutions',
    tagline: 'Salary & compliance',
    price: '₹9,999',
    icon: Users,
    features: [
      'Automated salary processing',
      'PF, ESI & PT compliance',
      'Payslip generation',
      'Attendance integration',
    ],
  },
  {
    name: 'TDS Solutions',
    tagline: 'Tax deduction made easy',
    price: '₹7,499',
    icon: ReceiptText,
    features: [
      'Auto TDS computation',
      'Challan & return filing',
      'Form 16 / 16A generation',
      'Reconciliation reports',
    ],
  },
]

export type Service = {
  name: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    name: 'Tally Implementation',
    description: 'End-to-end setup tailored to your business workflow.',
    icon: Wrench,
  },
  {
    name: 'Software Installation',
    description: 'Quick, secure installation across all your systems.',
    icon: Download,
  },
  {
    name: 'Data Migration',
    description: 'Seamless migration from legacy systems with zero loss.',
    icon: Database,
  },
  {
    name: 'Cloud Setup',
    description: 'Move your accounting to a secure managed cloud.',
    icon: CloudCog,
  },
  {
    name: 'Business Automation',
    description: 'Automate repetitive accounting and reporting tasks.',
    icon: Workflow,
  },
  {
    name: 'Custom Development',
    description: 'Bespoke modules built around your unique needs.',
    icon: Code2,
  },
  {
    name: 'Tally Customization',
    description: 'Tailored TDLs, invoices and reports for your brand.',
    icon: Settings2,
  },
  {
    name: 'Staff Training',
    description: 'Hands-on training to upskill your finance team.',
    icon: GraduationCap,
  },
  {
    name: 'Technical Support',
    description: 'Fast remote and on-site expert assistance.',
    icon: Headphones,
  },
  {
    name: 'Annual Maintenance',
    description: 'Proactive AMC plans keeping you always running.',
    icon: ShieldCheck,
  },
  {
    name: 'Compliance Solutions',
    description: 'GST, TDS and statutory compliance handled for you.',
    icon: Scale,
  },
  {
    name: 'Business Consulting',
    description: 'Strategic advisory to drive efficiency and growth.',
    icon: Briefcase,
  },
]

export type Industry = {
  name: string
  description: string
  icon: LucideIcon
}

export const industries: Industry[] = [
  {
    name: 'Manufacturing',
    description: 'BOM, production & costing control.',
    icon: Factory,
  },
  { name: 'Retail', description: 'Fast billing & POS integration.', icon: Store },
  {
    name: 'Wholesale',
    description: 'Bulk orders & credit management.',
    icon: Package2,
  },
  {
    name: 'Distribution',
    description: 'Multi-warehouse stock tracking.',
    icon: Warehouse,
  },
  {
    name: 'Healthcare',
    description: 'Inventory & expiry management.',
    icon: HeartPulse,
  },
  {
    name: 'Education',
    description: 'Fee & payroll automation.',
    icon: School,
  },
  {
    name: 'Logistics',
    description: 'Fleet, freight & route costing.',
    icon: Truck,
  },
  {
    name: 'Services',
    description: 'Project billing & receivables.',
    icon: Briefcase,
  },
  {
    name: 'E-commerce',
    description: 'Marketplace reconciliation.',
    icon: ShoppingCart,
  },
]

export const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Products', href: '/#products' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact' },
]

export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'Is Monetta India an authorized Tally partner?',
    answer:
      'Yes. Monetta India has been an authorized Tally partner since 2003, with over two decades of experience implementing TallyPrime and TallyPrime Server for businesses across India.',
  },
  {
    question: 'Which TallyPrime edition is right for my business?',
    answer:
      'It depends on your team size and locations. Silver suits single-user setups, Gold is ideal for unlimited multi-user access over a LAN, and Server is built for high-concurrency enterprises. Our consultants help you pick the right fit free of charge.',
  },
  {
    question: 'Do you provide GST and e-invoicing support?',
    answer:
      'Absolutely. Every implementation is configured for GST, e-invoicing and e-way bills out of the box, and we keep your setup compliant as statutory rules change.',
  },
  {
    question: 'Can I access Tally remotely or on the cloud?',
    answer:
      'Yes. Our Tally on Cloud solution lets you and your team securely access your data from any device, anywhere, with automated daily backups and a 99.9% uptime SLA.',
  },
  {
    question: 'What kind of support do you offer after purchase?',
    answer:
      'We provide remote and on-site technical support, annual maintenance contracts (AMC), staff training and proactive updates so your operations never skip a beat.',
  },
  {
    question: 'How long does a typical implementation take?',
    answer:
      'Most standard implementations are completed within 2 to 5 business days. Complex customizations and data migrations are scoped during a free consultation so you always know the timeline upfront.',
  },
]

export type TimelineItem = {
  year: string
  title: string
  description: string
}

export const timeline: TimelineItem[] = [
  {
    year: '2003',
    title: 'Founded in India',
    description: 'Monetta India begins its journey as an authorized Tally partner.',
  },
  {
    year: '2009',
    title: '1,000+ businesses served',
    description: 'Crossed our first major milestone of implementations nationwide.',
  },
  {
    year: '2015',
    title: 'Cloud & automation',
    description: 'Launched Tally on Cloud and business automation services.',
  },
  {
    year: '2021',
    title: 'TallyPrime expert partner',
    description: 'Became a leading TallyPrime migration and customization specialist.',
  },
  {
    year: '2026',
    title: '5,000+ happy clients',
    description: 'Trusted by thousands of businesses across every major industry.',
  },
]

export type TeamMember = {
  name: string
  role: string
  initials: string
}

export const team: TeamMember[] = [
  { name: 'Rajesh Mehta', role: 'Founder & CEO', initials: 'RM' },
  { name: 'Anita Sharma', role: 'Head of Implementation', initials: 'AS' },
  { name: 'Vikram Patel', role: 'Lead Tally Consultant', initials: 'VP' },
  { name: 'Priya Nair', role: 'Customer Success Lead', initials: 'PN' },
]
