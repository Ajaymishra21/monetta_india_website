import type { Metadata } from 'next'
import { AboutPage } from '@/components/about-page'

export const metadata: Metadata = {
  title: 'About Monetta India | TallyPrime, Cloud & Business Solutions',
  description: 'Learn about Monetta India, our mission, our journey, leadership, team and the enterprise-grade business solutions we provide for growing companies.',
}

export default function AboutRoutePage() {
  return <AboutPage />
}
