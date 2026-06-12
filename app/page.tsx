'use client'

import { useEffect } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollProgress } from '@/components/scroll-progress'
import { LoadingScreen } from '@/components/loading-screen'
import { SiteHeader } from '@/components/site-header'
import { FloatingActions } from '@/components/floating-actions'
import { Hero } from '@/components/sections/hero'
import { TrustStats } from '@/components/sections/trust-stats'
import { LogoMarquee } from '@/components/sections/logo-marquee'
import { Products } from '@/components/sections/products'
import { Services } from '@/components/sections/services'
import { Industries } from '@/components/sections/industries'

export default function Page() {
  useEffect(() => {
    if (sessionStorage.getItem('monetta-scroll-home') === '1') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      sessionStorage.removeItem('monetta-scroll-home')
    }
  }, [])

  return (
    <ThemeProvider>
      <LoadingScreen />
      <ScrollProgress />
      <SiteHeader />
      <main>
        <Hero />
        <TrustStats />
        <LogoMarquee />
        <Products />
        <Services />
        <Industries />
      </main>
      <FloatingActions />
    </ThemeProvider>
  )
}
