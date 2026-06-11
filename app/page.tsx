import { ThemeProvider } from '@/components/theme-provider'
import { ScrollProgress } from '@/components/scroll-progress'
import { LoadingScreen } from '@/components/loading-screen'
import { SiteHeader } from '@/components/site-header'
import { FloatingActions } from '@/components/floating-actions'
import { BackToTop } from '@/components/back-to-top'
import { Hero } from '@/components/sections/hero'
import { TrustStats } from '@/components/sections/trust-stats'
import { LogoMarquee } from '@/components/sections/logo-marquee'
import { Products } from '@/components/sections/products'
import { Services } from '@/components/sections/services'
import { Industries } from '@/components/sections/industries'

export default function Page() {
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
      <BackToTop />
    </ThemeProvider>
  )
}
